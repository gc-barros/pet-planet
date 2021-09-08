<?php

define('DBSERVER', 'localhost'); // Data server
define('DBUSERNAME', 'root'); // Database username
define('DBPASSWORD', 'Thiago270602'); // Database password
define('DBNAME', 'World'); // Database name

/*connect to MySQL database */
$db = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME);

//Check db connection
if($db === false){
    die("Error: connection error. ". mysqli_connect_error());
}
?>
