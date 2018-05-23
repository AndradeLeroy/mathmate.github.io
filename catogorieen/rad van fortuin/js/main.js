var rotation, time;

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}


function spinit(){
    rotation = getRandom(800, 2000);
    time = getRandom(5, 10);
    
    document.getElementById('rad').style.transform = "rotate(" + rotation + " deg)";
    document.getElementById('rad').style.transition = "transform: rotate(" + time + " s)";
    
}


































