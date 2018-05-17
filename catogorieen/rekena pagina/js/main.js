




function bereken(){
var p = document.getElementById("choose").value;
if(p == 1){
var x = parseInt(document.getElementById("usr1").value);
var y = parseInt(document.getElementById("usr2").value);
var z = x * y;
document.getElementById("demo").innerHTML ="De uitkomst is: " + z;
}

else{
var x = parseInt(document.getElementById("usr1").value);
var y = parseInt(document.getElementById("usr2").value);
var z = x / y;
document.getElementById("demo").innerHTML ="De uitkomst is: " + z;
}




}

