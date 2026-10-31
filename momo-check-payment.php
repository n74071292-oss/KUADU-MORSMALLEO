<?php
declare(strict_types=1);
require_once __DIR__ . '/momo-config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') momo_json_response(405, ['error' => 'POST required.']);

try {
    $cfg = momo_config();
    momo_require_credentials($cfg);
    $input = momo_read_json();
    $referenceId = (string)($input['referenceId'] ?? '');
    $payment = momo_load_payment($cfg, $referenceId);
    if (!$payment) momo_json_response(404, ['error' => 'Payment reference was not found.']);

    // Never trust a browser-supplied status. Query MTN's status endpoint server-side.
    $token = momo_access_token($cfg);
    $result = momo_http($cfg, 'GET', '/collection/v1_0/requesttopay/' . rawurlencode($referenceId), null, $token);

    if ($result['status'] !== 200 || empty($result['body']['status'])) {
        error_log('MoMo status check failed; HTTP ' . $result['status'] . ' body: ' . substr($result['raw'], 0, 1000));
        momo_json_response(502, ['error' => 'Could not verify payment with MTN. Please try again.']);
    }

    $mtnStatus = strtoupper((string)$result['body']['status']);
    if (!in_array($mtnStatus, ['PENDING', 'SUCCESSFUL', 'FAILED', 'TIMEOUT'], true)) $mtnStatus = 'PENDING';

    // Check key transaction details before marking a purchase successful.
    $amountMatches = isset($result['body']['amount']) && number_format((float)$result['body']['amount'], 2, '.', '') === number_format((float)$payment['amount'], 2, '.', '');
    $currencyMatches = isset($result['body']['currency']) && strtoupper((string)$result['body']['currency']) === strtoupper((string)$payment['currency']);
    if ($mtnStatus === 'SUCCESSFUL' && (!$amountMatches || !$currencyMatches)) {
        error_log('MoMo amount/currency mismatch for reference ' . $referenceId);
        $payment['status'] = 'REVIEW_REQUIRED';
    } else {
        $payment['status'] = $mtnStatus;
    }
    $payment['last_verified_at'] = gmdate('c');
    $payment['mtn_status'] = $mtnStatus;
    momo_save_payment($cfg, $referenceId, $payment);

    // This is a verification result only. A production account/login system must
    // associate the verified order with the authenticated customer before granting access.
    momo_json_response(200, [
        'referenceId' => $referenceId,
        'status' => $payment['status'],
        'premiumUnlocked' => false,
        'message' => $payment['status'] === 'SUCCESSFUL'
            ? 'MTN confirms payment. Connect this verified order to your authenticated user/account system before unlocking Premium.'
            : ($payment['status'] === 'PENDING' ? 'Payment is still pending.' : 'Payment status: ' . $payment['status']),
    ]);
} catch (Throwable $e) {
    error_log('CodePath MoMo status error: ' . $e->getMessage());
    $msg = str_contains($e->getMessage(), 'not configured') ? $e->getMessage() : 'Could not verify payment. Check the server configuration and logs.';
    momo_json_response(500, ['error' => $msg]);
}
