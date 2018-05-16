<html>
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <meta charset="utf-8"/>
    <title></title>
</head>
<body>
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
$sql= "SELECT * FROM logingegevens";
$result = mysqli_query($conn, $sql);

if(!$result){
    
    
    echo"qeury niet goed";
}
 
?>    
    
    
    
    


<div class="container">
   

        <div class="col-sm"><img src="img/logo.png" id="logo" width=100%></div>

    

        
  <h2>log in</h2>
  <h3><?php if(!empty($_SESSION['error'])){ echo $_SESSION['error']; 
                           $_SESSION['error'] = "";               } ?></h3>
  <form method="POST" action="PHP/login.php" >
      
     <div class="form-group">
      <label for="geberuikernaam"></label>
      <input type="text" class="form-control" id="gb" placeholder="Enter gebruikernaam" name="username">
    </div>
   
    <div class="form-group">
      <label for="pwd"></label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password" >
    </div>
      
      <button type="submit" name="registreer" value="Aanmelden" class="btn btn-default">log in </button>
      <div class="form-group">
      <a href="PHP/aanmelden.html" id="gn">nog geen account klik hier</a>
     </div>
  </form>

</div>    

    
    
    
    
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>    
</body>
</html>