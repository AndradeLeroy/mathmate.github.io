<?php
session_start();
//destroyed sessie
session_destroy();
//stuurt terug naar begin
header("Location: ../index.php");


?>