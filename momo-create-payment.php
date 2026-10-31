<?php
declare(strict_types=1);
require_once __DIR__ . '/momo-config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') momo_json_response(405, ['error' => 'POST required.']);

try {
    $cfg = momo_config();
    momo_require_credentials($cfg);
    $input = momo_read_json();

    $plans = [
        'starter' => ['name' => 'Starter', 'amount' => '20.00'],
        'practice-plus' => ['name' => 'Practice Plus', 'amount' => '40.00'],
        'project-builder' => ['name' => 'Project Builder', 'amount' => '75.00'],
        'pro-learning-pack' => ['name' => 'Pro Learning Pack', 'amount' => '120.00'],
    ];
    $planId = (string)($input['plan'] ?? '');
    if (!isset($plans[$planId])) momo_json_response(400, ['error' => 'Choose a valid Premium plan.']);

    $phone = preg_replace('/\D+/', '', (string)($input['phone'] ?? ''));
    // Convert common Ghana numbers to international MSISDN format without a plus sign.
    if (preg_match('/^0\d{9}$/', $phone)) $phone = '233' . substr($phone, 1);
    if (!preg_match('/^233\d{9}$/', $phone)) {
        momo_json_response(400, ['error' => 'Enter a valid Ghana mobile number, e.g. 0241234567 or 233241234567.']);
    }

    $referenceId = sprintf('%04x%04x-%04x-4%03x-%04x-%04x%08x',
        random_int(0, 0xffff), random_int(0, 0xffff),
        random_int(0, 0xffff), random_int(0, 0x0fff),
        random_int(0, 0x3fff) | 0x8000,
        random_int(0, 0xffff), random_int(0, 0xffffffff)
    );
    $externalId = 'CP-' . bin2hex(random_bytes(8));
    $plan = $plans[$planId];

    $payload = [
        'amount' => $plan['amount'],
        'currency' => $cfg['currency'],
        'externalId' => $externalId,
        'payer' => [
            'partyIdType' => 'MSISDN',
            'partyId' => $phone,
        ],
        'payerMessage' => 'CodePath Premium ' . $plan['name'],
        'payeeNote' => 'CodePath Premium ' . $plan['name'],
    ];
    if ($cfg['callback_url'] !== '') $payload['callbackUrl'] = $cfg['callback_url'];

    $token = momo_access_token($cfg);
    $result = momo_http($cfg, 'POST', '/collection/v1_0/requesttopay', $payload, $token, [
        'X-Reference-Id: ' . $referenceId,
        'X-Reference-Id: ' . $referenceId,
    ]);

    if ($result['status'] !== 202) {
        error_log('MoMo request-to-pay failed; HTTP ' . $result['status'] . ' body: ' . substr($result['raw'], 0, 1000));
        momo_json_response(502, ['error' => 'MTN did not accept the payment request. Check server logs and MoMo configuration.']);
    }

    momo_save_payment($cfg, $referenceId, [
        'reference_id' => $referenceId,
        'external_id' => $externalId,
        'plan' => $planId,
        'plan_name' => $plan['name'],
        'amount' => $plan['amount'],
        'currency' => $cfg['currency'],
        'phone_last4' => substr($phone, -4),
        'status' => 'PENDING',
        'created_at' => gmdate('c'),
        'environment' => $cfg['environment'],
    ]);

    momo_json_response(200, [
        'referenceId' => $referenceId,
        'status' => 'PENDING',
        'message' => 'Payment request sent. Approve it on your MoMo phone, then check payment status.',
    ]);
} catch (Throwable $e) {
    error_log('CodePath MoMo error: ' . $e->getMessage());
    $msg = str_contains($e->getMessage(), 'not configured') ? $e->getMessage() : 'Payment could not be started. Check the server configuration and logs.';
    momo_json_response(500, ['error' => $msg]);
}
