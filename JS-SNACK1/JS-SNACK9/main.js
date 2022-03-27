//creo un array vuoto dove poi verranno inseriti i numeri
let numeriInseritiArray = []; 
console.log(numeriInseritiArray); 
sommaNumeri();
// creo una funziona per eseguire le operazioni
function sommaNumeri (){ 

    let somma = 0; 
    for (let i = 0; i <10; i++) {
        //inserisco il un push per insrire i numeri in un array 
        numeriInseritiArray.push(parseInt(prompt("insersci qui i numeri")));
        //eseguo la somma di tutri i numeri presenti 
        somma += numeriInseritiArray[i]; 
        document.getElementById("somma").innerHTML = somma;
        //faccio la media aritmetica 
        media = somma / 10;
        document.getElementById("media").innerHTML = media;
    }  console.log("risultato media aritmetica: " + media);
}
document.getElementById("numeri").innerHTML = numeriInseritiArray;