<?php
session_start();
$host = "localhost";

$user = "root";

$pass = "";

$db = "project 4";

$conn = mysqli_connect($host, $user, $pass, $db);

               

if(!$conn){

                die("Niet goed");

} 









//check of er een post is gedaan naar deze pagina
if($_SERVER['REQUEST_METHOD'] =='POST'){
    //bezoeker komt van een form
    
    
    //juiste inlog gegevens
  
    //dit heeft de user ingevuld
    $ingevoerdeuser =$_POST['username'];
    $ingevoerdeww =$_POST['password'];
    
    $sql= "SELECT * FROM logingegevens WHERE login_naam = '$ingevoerdeuser'";
    $result = mysqli_query($conn, $sql);
    
    if($result){
        $password = mysqli_fetch_assoc($result);
    
    
    
    //controleert of het user en ww goed 
   
       if($password['wachtwoord'] == $ingevoerdeww){ 
            
            $_SESSION['ingelogd'] = "ja";
            $_SESSION['username'] = $ingevoerdeuser;
            header("location:../home page/html/home.php ");
        }
        else{
            $_SESSION['error'] = "gebruikersnaam en/of wachtwoord incorrect";
            header("Location: ../index.php");
        }
    }
    else{
        header("location:../index.php ");
        
        
    }



}

else{

    header("location:../index.php ");
   
}

?>