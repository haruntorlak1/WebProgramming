<?php

require_once __DIR__ . '/BaseDao.class.php';

class UserDao extends BaseDao{

    public function __construct(){
        parent::__construct('user');
    }

    public function add_user($user){
        return $this->insert('user', $user);
    }

    public function get_user(){
        $query = "SELECT * FROM user";
        return $this->query($query, []);
    }
}
?>
