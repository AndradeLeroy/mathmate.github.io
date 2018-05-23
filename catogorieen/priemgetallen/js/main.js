var teller = 0, getal = 1, eindgetal, interval;

function Eindgetal() {
    eindgetal = parseFloat(document.getElementById('usr2').value);
    if (eindgetal != "") {
        if ((eindgetal >= 1) && (eindgetal <=250 )) {
            StartInterval();
        } else {
            alert("De ingevoerde eindgetal is niet correct");
        }
    } else {
        alert("Je hebt geen eindgetal ingevoerd!");
    }
}

function StartInterval() {
    interval = setInterval(function () { BerekenReeks() }, 10);
}







function BerekenReeks() {
    if (teller <= eindgetal) {
        document.getElementById('dReeks').innerHTML += getal + " - ";
        teller++;
        var a = 0;
        var b = 1;
        var c = a + b;
        a = b;
        c = b;
        
        
    } else {
        clearInterval(interval);
    }
}


if(getal / 3 == 1 ){
    document.getElementById('dReeks').innerHTML =  "<h3> </h3>";
}

