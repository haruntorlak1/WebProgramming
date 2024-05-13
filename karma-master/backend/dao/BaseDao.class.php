<?php

require_once __DIR__ . "/../../config.php";

class BaseDao{
    protected $connection;
    private $table;

    //This is the constructor for BaseDao class
    public function __construct($table){
        $this -> table = $table;
        try{
            $this -> connection = new PDO(
                "mysql:host=" . DB_HOST . 
                ";dbname=" . DB_NAME . 
                ";port=" . DB_PORT,
                DB_USER,
                DB_PASS, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]
            );
        } catch (PDOException $e){
            throw $e;
        }
    }


    
  
    protected function query($query, $params = array()){
        $statement = $this -> connection -> prepare($query);
        $statement -> execute($params);
        return $statement -> fetchAll(PDO::FETCH_ASSOC);
    }

    
    protected function query_unique($query, $params){
        $results = $this -> query($query, $params);
        return reset($results);
    }

    
    protected function execute($query, $params){
        $prepared_statemet = $this -> connection -> prepare($query);
        if($params){
            foreach($params as $key => $param){
                $prepared_statemet -> bindValue($key, $param);
            }
        }
        $prepared_statemet -> execute();
        return $prepared_statemet;
    }

    public function insert($table, $entity){
        $query = "INSERT INTO {$table} (";

        foreach($entity as $column => $value){
            $query .= $column . ", ";
        }

        $query = substr($query, 0, -2);
        $query .= ") VALUES (";

        foreach($entity as $column => $value){
            $query .= ":" . $column . ", ";
        }

        $query = substr($query, 0, -2);
        $query .= ")";

        $statement = $this -> connection -> prepare($query);
        $statement -> execute($entity);
        $entity["id"] = $this -> connection -> lastInsertId();
        return $entity;
    }
}