<?php


//Set the reporting
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL ^ (E_NOTICE | E_DEPRECATED));




//Database access credentials
define("DB_NAME", "webprogramming");
define("DB_PORT", 3306);
define("DB_USER", "root");
define("DB_PASSWORD", "root");
define("DB_HOST", "localhost");

//JWT Secret
define('JWT_SECRET', ':pKy!3J5mYYW]}C(;zeH@3jSbaHmJq');

