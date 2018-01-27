<?php
include_once './api.php';

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO']));
$input = json_decode(file_get_contents('php://input'),true);

$id = '';
if (isset($_GET['id'])) {
	$id = $_GET['id'];
}

$api = new API();

switch ($method) {
  case 'GET':
    $api->get($id,$request[1]); break;
  case 'PUT':
   $api->put($request); break;
  case 'POST':
    $api->post($request); break;
  case 'DELETE':
    $api->delete($id, $request); break;
}
