




function bereken(){
document.getElementById("demo").innerHTML="";
var p = document.getElementById("choose").value;
if(p == 1){
var x = parseFloat(document.getElementById("usr1").value);
var y = parseFloat(document.getElementById("usr2").value);
for( i = 1; i <= y; i++  ){
    
   var z = x * i;
document.getElementById("demo").innerHTML += x +"*"+ i +"="+ z +"<br>"; 
    
} 
}

else{

var x = parseFloat(document.getElementById("usr1").value);
var y = parseFloat(document.getElementById("usr2").value);
for( i = 1; i <= y; i++  ){
    
   var z = x / i;
document.getElementById("demo").innerHTML += x +":"+ i +"="+ z +"<br>"; 
    
} 
}




}

