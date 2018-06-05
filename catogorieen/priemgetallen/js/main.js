function bereken() {
    document.getElementById("demo").innerHTML = "0 <br> 1 <br>";
    var eindgetal = parseFloat(document.getElementById("usr1").value);
    var huidiggetal = 1;
    var voriggetal = 0;
    var uitkomst;


    for (var exponent = 1; exponent <= eindgetal; exponent++) {

        uitkomst = voriggetal + huidiggetal;
        voriggetal = huidiggetal;
        huidiggetal = uitkomst;


        document.getElementById("demo").innerHTML += uitkomst + "<br>";
    }



}
