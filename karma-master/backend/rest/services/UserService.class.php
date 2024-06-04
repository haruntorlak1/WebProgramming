<?php

require_once __DIR__ . '/../dao/UserDao.class.php';

class UserService {
    private $userDao;

    public function __construct(){
        $this->userDao = new UserDao();
    }

    public function add_user($user){
        return $this->userDao->add_user($user);
    }

    public function get_user(){
        return $this->userDao->get_user();
    }
}
?>
