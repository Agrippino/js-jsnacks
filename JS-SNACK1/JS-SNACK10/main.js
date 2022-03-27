let inserisciNumeri = prompt("insersci qui i numeri");
    somma = inserisciNumeri
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
document.getElementById("somma").innerHTML = somma;
document.getElementById("numeri").innerHTML = inserisciNumeri;
console.log("i numeri inseriti sono: " + inserisciNumeri);
console.log("il risutato è: " + somma);
