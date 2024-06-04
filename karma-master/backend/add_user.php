<?php

require_once __DIR__ . '/../services/UserService.class.php';

$payload = $_REQUEST;

if (!isset($payload['email']) || $payload['email'] == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Email field is missing!"]));
}

if (!isset($payload['password']) || $payload['password'] == '') {
    header('HTTP/1.1 500 Bad Request');
    die(json_encode(['error' => "Password field is missing!"]));
}

$user_service = new UserService();
$user = $user_service->add_user($payload);

echo json_encode(['message' => "You have successfully added the user!", 'data' => $user]);
?>
