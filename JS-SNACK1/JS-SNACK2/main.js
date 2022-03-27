//inserisco le parole
let inseriscoPrimaParola = prompt("inserisco la prima parola");
let inseriscoSecondaParola = prompt("inserisco la seconda parola");
let differenzaParole
//inserisco una variabile che conta la lunghezza della parola 
let parola1= inseriscoPrimaParola.length;
let parola2 = inseriscoSecondaParola.length;
//creo un ciclo che ler confronta 
if(parola1>parola2){
    (differenzaParole = inseriscoPrimaParola);
    console.log ("stampo parola1: ");
}
else if(parola1<parola2){
    (differenzaParole = inseriscoSecondaParola);
    console.log ("stampo parola 2: ");
}
else{
    differenzaParole = ("la lunghezza della parole è uguale");
}
document.getElementById("1parola").innerHTML = inseriscoPrimaParola;
document.getElementById("2parola").innerHTML = inseriscoSecondaParola;
document.getElementById("stampa").innerHTML = differenzaParole;