<?php
declare(strict_types=1);
require_once __DIR__ . '/momo-config.php';

/**
 * Callback receiver scaffold.
 * MTN callback delivery can be intermittent; the status endpoint also polls MTN.
 * Do not grant Premium from an unverified callback payload alone.
 */
try {
    $cfg = momo_config();
    $input = momo_read_json();
    $referenceId = (string)($_SERVER['HTTP_X_REFERENCE_ID'] ?? $input['referenceId'] ?? $input['reference_id'] ?? '');
    if (!preg_match('/^[0-9a-f-]{36}$/i', $referenceId)) {
        http_response_code(400);
        exit;
    }
    $payment = momo_load_payment($cfg, $referenceId);
    if (!$payment) {
        // A callback may arrive before a local record is visible; log safely and acknowledge.
        error_log('MoMo callback received for unknown reference: ' . $referenceId);
        http_response_code(202);
        exit;
    }
    // Callback is treated as a signal only. momo-check-payment.php queries MTN directly.
    $payment['callback_received_at'] = gmdate('c');
    momo_save_payment($cfg, $referenceId, $payment);
    http_response_code(202);
} catch (Throwable $e) {
    error_log('CodePath MoMo callback error: ' . $e->getMessage());
    http_response_code(500);
}
