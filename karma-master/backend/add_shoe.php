<?php

require_once __DIR__ . '/services/ShoesService.class.php';

$payload= $_REQUEST;

if($payload['shoeName']==NULL || $payload['shoeName']==''){
  header('HTTP/1.1 500 Bad Request');
  die(json_encode(['error' => "Shoe name field is missing!"]));

}

$shoe_service = new ShoesService();
$shoe = $shoe_service -> add_shoe($payload);

echo json_encode(['message' => "You have successfully added the shoe!", 'data' =>$shoe]);