<?php

require_once __DIR__ . '/../dao/ShoeDao.class.php';

class ShoesService{

    private $shoe_dao;

    public function __construct(){
        $this ->shoe_dao = new shoeDao();
    }
    public function add_shoe($shoe)
    {
        return $this -> shoe_dao ->add_shoe($shoe);
    }

    public function get_shoes(){
        $rows = $this->shoe_dao->get_shoes();
        return [
            'data' => $rows
        ];

    }

    public function get_all_shoes()
    {
        return $this -> shoe_dao -> get_all_shoes();
    }

    public function get_shoe_by_id($shoeID) {
        $shoe = $this->shoe_dao->get_shoe_by_id($shoeID);
        return $shoe;
   }
}


