<?php

class Generic {
	private $db;
	private $className;
	
	public function read() {
	}
	
	public function getClassName() {
		return $this->className;
	}
	
	public function create() {
		return $this->db->create($this->className,$this->id, $this->name);
	}
	
	public function put() {
		return $this->db->update($this->className,$this->id, $this->name);
	}
	
	public function get($id) {
		return $this->db->get($this->className,$id);
	}
	
	public function getWhere($id, $where) {
		return $this->db->getWhere($this->className,$where);
	}
	
	public function delete($id) {
		return $this->db->delete($this->className,$id);
	}
	
	public function __construct($db, $className){
		$this->db = $db;
		$this->className = $className;
	}
}
?>
