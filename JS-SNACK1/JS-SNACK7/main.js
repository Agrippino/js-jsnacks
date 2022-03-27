//creo due variabili dove verranno inseriti i numeri
let primoNumeroInserito = parseInt(prompt("Inserisci il primo numero,grazie"));
let secondoNumeroInserito= parseInt(prompt("Inserisci il secondo numero,grazie"));
let risultatoNumero1= primoCubo (primoNumeroInserito);
let risultatoNumero2= secondoCubo (secondoNumeroInserito);
// creo due funzioni che calcolano il cubo dei numeri e lo riportano a video
function primoCubo(numero1) {
    let primoFattore= (numero1**3);
    console.log("primo fattore elevato al cubo è uguale a:" + primoFattore);
    return primoFattore;
}
function secondoCubo(numero2) {
    let secondoFattore = (numero2**3);
    console.log("secondo fattore elevato al cubo è uguale a:" + secondoFattore);
    return secondoFattore;
}

document.getElementById("primo").innerHTML = risultatoNumero1;
document.getElementById("due").innerHTML = risultatoNumero2;