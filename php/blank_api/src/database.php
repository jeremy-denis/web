<?php
class Database{
 
    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "cactuspro";
    private $username = "test";
    private $password = "test";
    public  $db;
    
    public function __construct()
	{
		$this->getConnection();
	}
 
    // get the database connection
    public function getConnection(){
 
        $this->db = null;
 
        try{
            $this->db = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->db->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        //return $this->db->conn;
    }
    
    public function update() {
	}
	
	public function getWhere($table_name,$where) {
		$query = "SELECT * from ".$table_name;
		$cpt = 0;
		if (count($where) > 0) {
			foreach ($where as $key => $value){
				if ($cpt == 0) {
					$query .= " WHERE ".$key." = ".$value;
					++$cpt;
				} else {
					$query .= " AND ".$key." = ".$value;
				}
			}
		}
		$stmt = $this->db->prepare($query);
		
		$stmt->execute();
		return $stmt;
	}
	
	public function get($table_name,$id) {
		if ($id != '') {
			$query = "SELECT * from ".$table_name." where id = :id";
		} else {
			$query = "SELECT * from ".$table_name;
		}
		
		$stmt = $this->db->prepare($query);
		
		if ($id != '') {
			$te = $stmt->bindParam(":id", $id, PDO::PARAM_INT);
		}
		$stmt->execute();
		return $stmt;
	}
    
    public function create($table_name) {
		$query = "INSERT into ".$table_name." SET id=:id, name=:name";
		
		$stmt = $this->db->prepare($query);
		 
		$stmt->bindParam(":id", $this->id);
		$stmt->bindParam(":name", $this->name);
		 
		 return $stmt->execute();
	}
    
    function delete($id,$table_name){
		$query = "DELETE FROM " . $table_name . " WHERE id = ?";
 
		$stmt = $this->conn->prepare($query);
		$stmt->bindParam(1, $id);
 
		return $stmt->execute();
	}
}
?>
