var teller = 0, getal = 1, eindgetal, interval;

function PromptEindgetal() {
    eindgetal = prompt("Voer een eindgetal in. Letop! eindgetal waarde moet tussen de 5 en 250 liggen.");
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
        getal = getal + teller;
        
        
    } else {
        clearInterval(interval);
    }
}


if(getal / 3 == 1 ){
    document.getElementById('dReeks').innerHTML =  "<h3> </h3>";
}

