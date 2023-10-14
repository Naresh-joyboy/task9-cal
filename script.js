function addition() {
    var fir = parseInt(document.getElementById("ink").value);
    var sec = parseInt(document.getElementById("ink1").value);
    var resu = fir + sec;
    document.getElementById("result").value = resu;
    console.log(resu);
}

function multiple() {
    var fir = parseInt(document.getElementById("ink").value);
    var sec = parseInt(document.getElementById("ink1").value);
    var resu = fir * sec;
    document.getElementById("result").value = resu;
    console.log(resu);
}

function subtract() { 
    var fir = parseInt(document.getElementById("ink").value);
    var sec = parseInt(document.getElementById("ink1").value);
    var resu = fir - sec;
    document.getElementById("result").value = resu;
    console.log(resu);
}

function division() {
    var fir = parseInt(document.getElementById("ink").value);
    var sec = parseInt(document.getElementById("ink1").value);
   
        var resu = fir / sec;
        document.getElementById("result").value = resu;
        console.log(resu);
    
}
