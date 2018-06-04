function bereken() {
    document.getElementById("demo").innerHTML = "";
    var input = parseFloat(document.getElementById("usr1").value);
    var uitkomst = 1;

    for (var exponent = 1; exponent <= 15; exponent++) {


        uitkomst *= input;

        document.getElementById("demo").innerHTML += input +"<sup> "+  exponent + "</sup> = " + uitkomst + "<br>";
    }



}
