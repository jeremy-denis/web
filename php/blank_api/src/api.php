<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once './database.php';
include_once './user.php';
include_once './message.php';
include_once './topic.php';

class API {
	private $db;
	private $entity;
	private $conn;
	
	public function __construct()
	{		
		$this->db = new Database();
		$this->conn   = $this->db->getConnection();
		$this->entity = array();
		$this->entity['users'] = new User($this->db); 
		$this->entity['messages'] = new Message($this->db);
		$this->entity['topics'] = new Topic($this->db);
	}
	
	public function get($id, $request) {
		$reply;
		if ($id) {
			$stmt = $this->entity[$request]->get($id);
		} else {
			$stmt = $this->entity[$request]->get('');
		}
			$nb   = $stmt->rowCount();
			if($nb > 0){
				$tmp = array();
				while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
					$one = $this->entity[$request]->toJson($row);
					array_push($tmp,$one);
				}
				$reply = $tmp;
			} else{
				echo json_encode(
					array("message" => "No data found.")
				);
				return;
			}
		
		
		echo json_encode($reply);
	}
	
	public function post($request) {
		$data = json_decode(file_get_contents("php://input"));
		if($this->entity[$request]->post($data)){
			echo '{';
				echo '"message": "Object was created."';
			echo '}';
		} else {
			echo '{';
				echo '"message": "Unable to created object."';
			echo '}';
		}
	}
	
	public function delete($request) {
		$data = json_decode(file_get_contents("php://input"));
		if($this->entity[$request]->delete($data->id)){
			echo '{';
				echo '"message": "Object was deleted."';
			echo '}';
		} else {
			echo '{';
				echo '"message": "Unable to delete object."';
			echo '}';
		}
	}
	
	public function put($request) {
		$data = json_decode(file_get_contents("php://input"));
		if($this->entity[$request]->put($data)){
			echo '{';
				echo '"message": "Object was updated."';
			echo '}';
		} else {
			echo '{';
				echo '"message": "Unable to update object."';
			echo '}';
		}
	}
}
?>
