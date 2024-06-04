<?php

require_once __DIR__ . '/BaseDao.class.php';

class ShoeDao extends BaseDao{

    public function __construct(){
        parent::__construct('shoes');
    }
    public function add_shoe($shoe){
        return $this->insert('shoes', $shoe);
    }
    public function get_shoes(){
        $query = "SELECT * FROM shoes";
       

        return $this->query($query,[]);
    }
    public function get_shoe_by_id($shoeID) {
        $query = "SELECT * FROM shoes WHERE shoeID = :shoeID";
        return $this->query($query, [':shoeID' => $shoeID]);
    }
    
}