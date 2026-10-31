<?php
declare(strict_types=1);

/**
 * CodePath lightweight PHP API.
 * Stores lesson progress in the visitor's PHP session (no database required).
 * Run with PHP 8+ using: php -S localhost:8000
 */
session_start();
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if (!isset($_SESSION['codepath_progress']) || !is_array($_SESSION['codepath_progress'])) {
    $_SESSION['codepath_progress'] = [];
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';

function respond(int $status, array $payload): never {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

if ($action === 'progress' && $method === 'GET') {
    respond(200, ['ok' => true, 'completed' => array_values($_SESSION['codepath_progress'])]);
}

if ($action === 'progress' && $method === 'POST') {
    $raw = file_get_contents('php://input');
    $body = json_decode($raw ?: '', true);
    if (!is_array($body) || !isset($body['completed']) || !is_array($body['completed'])) {
        respond(400, ['ok' => false, 'error' => 'Send JSON with a completed array.']);
    }

    // Only accept short, safe lesson IDs; limit payload size.
    if (count($body['completed']) > 100) {
        respond(413, ['ok' => false, 'error' => 'Too many lesson IDs.']);
    }

    $valid = [];
    foreach ($body['completed'] as $id) {
        if (is_string($id) && preg_match('/^[a-z0-9_-]{1,40}$/', $id)) {
            $valid[] = $id;
        }
    }
    $_SESSION['codepath_progress'] = array_values(array_unique($valid));
    respond(200, ['ok' => true, 'completed' => $_SESSION['codepath_progress']]);
}

if ($action === 'health' && $method === 'GET') {
    respond(200, ['ok' => true, 'app' => 'CodePath API', 'php' => PHP_VERSION]);
}

respond(404, ['ok' => false, 'error' => 'Endpoint not found.']);
