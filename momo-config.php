<?php
declare(strict_types=1);

/**
 * Server-only MTN MoMo configuration.
 * Set the variables in your hosting control panel; never expose these in HTML/JS.
 */
function momo_config(): array {
    $environment = getenv('MOMO_ENVIRONMENT') ?: 'sandbox';
    $baseUrl = rtrim(getenv('MOMO_BASE_URL') ?: 'https://sandbox.momodeveloper.mtn.com', '/');
    $targetEnvironment = getenv('MOMO_TARGET_ENVIRONMENT') ?: 'sandbox';
    $currency = getenv('MOMO_CURRENCY') ?: 'GHS';
    $storage = getenv('MOMO_STORAGE_DIR') ?: (__DIR__ . '/storage');

    if (!in_array($environment, ['sandbox', 'production'], true)) {
        throw new RuntimeException('MOMO_ENVIRONMENT must be sandbox or production.');
    }
    if ($environment === 'production' && stripos($baseUrl, 'https://') !== 0) {
        throw new RuntimeException('Production MoMo API must use HTTPS.');
    }

    return [
        'environment' => $environment,
        'base_url' => $baseUrl,
        'target_environment' => $targetEnvironment,
        'subscription_key' => getenv('MOMO_COLLECTION_SUBSCRIPTION_KEY') ?: '',
        'api_user' => getenv('MOMO_API_USER') ?: '',
        'api_key' => getenv('MOMO_API_KEY') ?: '',
        'currency' => $currency,
        'callback_url' => getenv('MOMO_CALLBACK_URL') ?: '',
        'storage_dir' => $storage,
    ];
}

function momo_require_credentials(array $cfg): void {
    foreach (['subscription_key', 'api_user', 'api_key'] as $key) {
        if ($cfg[$key] === '' || str_starts_with($cfg[$key], 'replace_with_')) {
            throw new RuntimeException('MTN MoMo credentials are not configured on the server.');
        }
    }
}

function momo_json_response(int $status, array $body): never {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($body, JSON_UNESCAPED_SLASHES);
    exit;
}

function momo_read_json(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '', true);
    return is_array($data) ? $data : [];
}

function momo_storage_dir(array $cfg): string {
    $dir = $cfg['storage_dir'];
    if (!is_dir($dir) && !mkdir($dir, 0700, true) && !is_dir($dir)) {
        throw new RuntimeException('Cannot create payment storage directory.');
    }
    return $dir;
}

function momo_save_payment(array $cfg, string $referenceId, array $record): void {
    $path = momo_storage_dir($cfg) . '/' . $referenceId . '.json';
    $tmp = $path . '.tmp';
    if (file_put_contents($tmp, json_encode($record, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX) === false) {
        throw new RuntimeException('Could not save payment record.');
    }
    chmod($tmp, 0600);
    rename($tmp, $path);
}

function momo_load_payment(array $cfg, string $referenceId): ?array {
    if (!preg_match('/^[0-9a-f-]{36}$/i', $referenceId)) return null;
    $path = momo_storage_dir($cfg) . '/' . $referenceId . '.json';
    if (!is_file($path)) return null;
    $data = json_decode((string)file_get_contents($path), true);
    return is_array($data) ? $data : null;
}

function momo_http(array $cfg, string $method, string $path, ?array $body = null, ?string $token = null, array $extraHeaders = []): array {
    if (!function_exists('curl_init')) throw new RuntimeException('PHP cURL extension is required.');
    $headers = [
        'Ocp-Apim-Subscription-Key: ' . $cfg['subscription_key'],
        'X-Target-Environment: ' . $cfg['target_environment'],
        'Accept: application/json',
    ];
    if ($token !== null) $headers[] = 'Authorization: Bearer ' . $token;
    if ($body !== null) $headers[] = 'Content-Type: application/json';
    $headers = array_merge($headers, $extraHeaders);

    $ch = curl_init($cfg['base_url'] . $path);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT => 25,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
    ]);
    if ($body !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    $response = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    if ($response === false) throw new RuntimeException('MoMo network request failed: ' . $error);
    $decoded = json_decode($response, true);
    return ['status' => $status, 'body' => is_array($decoded) ? $decoded : [], 'raw' => $response];
}

function momo_access_token(array $cfg): string {
    $auth = base64_encode($cfg['api_user'] . ':' . $cfg['api_key']);
    $res = momo_http($cfg, 'POST', '/collection/token/', null, null, [
        'Authorization: Basic ' . $auth,
    ]);
    if ($res['status'] < 200 || $res['status'] >= 300 || empty($res['body']['access_token'])) {
        throw new RuntimeException('Could not obtain MTN MoMo access token (HTTP ' . $res['status'] . '). Check credentials, product subscription, and environment.');
    }
    return (string)$res['body']['access_token'];
}
