




function bereken(){
var p = document.getElementById("choose").value;
if(p == 1){
var x = parseFloat(document.getElementById("usr1").value);
var y = parseFloat(document.getElementById("usr2").value);
var z = x * y;
document.getElementById("demo").innerHTML ="De uitkomst is: " + z;
}

else{
var x = parseFloat(document.getElementById("usr1").value);
var y = parseFloat(document.getElementById("usr2").value);
var z = x / y;
document.getElementById("demo").innerHTML ="De uitkomst is: " + z;
}




}

