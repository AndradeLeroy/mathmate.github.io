var rotation, time;

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}


function SpinIt(){
    rotation = getRandom(800, 2000);
    time = getRandom(5, 10);
    
    document.getElementById('rad').style.transform = "rotate(" + rotation + "deg)";
    document.getElementById('rad').style.transition =  time + "s";
   
    setTimeout(function(){ getNumber(rotation); }, (time * 1000));
    
}
function SpinIt1(){
    rotation = getRandom(800, 2000);
    time = getRandom(5, 10);
    
    document.getElementById('rad2').style.transform = "rotate(" + rotation + "deg)";
    document.getElementById('rad2').style.transition =  time + "s";
   
    setTimeout(function(){ getNumber1(rotation); }, (time * 1000));
    
}

function getNumber(x){
    x = x % 360;
    
    
     if((x >= 0) && (x <=29)){
        //1
        document.getElementById('ipNumberRad1').value='1';
    }
    
    
    
    
    if((x >= 30) && (x <=89)){
        //6
        document.getElementById('ipNumberRad1').value='6';
    }
    
    
     if((x >= 90) && (x <=149)){
        //5
         document.getElementById('ipNumberRad1').value='5';
    }
    
     if((x >= 150) && (x <=209)){
        //4
         document.getElementById('ipNumberRad1').value='4';
    }
    
     if((x >= 210) && (x <=269)){
        //3
         document.getElementById('ipNumberRad1').value='3';
    }
    
     if((x >= 270) && (x <=329)){
        //2
         document.getElementById('ipNumberRad1').value='2';
    }
       if((x >= 330) && (x <=359)){
        //1
           document.getElementById('ipNumberRad1').Value='1';
    }

}
function getNumber1(x){
    x = x % 360;
    
    
     if((x >= 0) && (x <=29)){
        //1
        document.getElementById('ipNumberRad2').value='1';
    }
    
    
    
    
    if((x >= 30) && (x <=89)){
        //6
        document.getElementById('ipNumberRad2').value='6';
    }
    
    
     if((x >= 90) && (x <=149)){
        //5
         document.getElementById('ipNumberRad2').value='5';
    }
    
     if((x >= 150) && (x <=209)){
        //4
         document.getElementById('ipNumberRad2').value='4';
    }
    
     if((x >= 210) && (x <=269)){
        //3
         document.getElementById('ipNumberRad2').value='3';
    }
    
     if((x >= 270) && (x <=329)){
        //2
         document.getElementById('ipNumberRad2').value='2';
    }
       if((x >= 330) && (x <=359)){
        //1
           document.getElementById('ipNumberRad2').Value='1';
    }







}
function bereken(){

var x = parseFloat(document.getElementById("ipNumberRad1").value);
var y = parseFloat(document.getElementById("ipNumberRad2").value);
var z = x + y;
document.getElementById("ipNumberRad3").value ="De uitkomst is: " + z;
}































