let inseriscoPrimaParola = prompt("inserisco la prima parola");
let inseriscoSecondaParola = prompt("inserisco la seconda parola");
let differenzaParole
let parola1= inseriscoPrimaParola.length;
let parola2 = inseriscoSecondaParola.length;

if(parola1>parola2){
    (differenzaParole = inseriscoPrimaParola);
    console.log ("stampo parola1");
}
else if(parola1<parola2){
    (differenzaParole = inseriscoSecondaParola);
    console.log ("stampo parola 2");
}
else{
    differenzaParole = ("avete insetiro la stessa parola");
}
document.getElementById("1parola").innerHTML = inseriscoPrimaParola;
document.getElementById("2parola").innerHTML = inseriscoSecondaParola;
document.getElementById("stampa").innerHTML = differenzaParole;