
let numeriInseritiArray = []; 
console.log(numeriInseritiArray); 
sommaNumeri();
 
function sommaNumeri (){ 

    let somma = 0; 
    for (let i = 0; i <10; i++) {
        numeriInseritiArray.push(parseInt(prompt("insersci qui i numeri")));
        somma += numeriInseritiArray[i]; 
        document.getElementById("somma").innerHTML = somma;
        media = somma / 10;
        document.getElementById("media").innerHTML = media;
    }  console.log("risultato media aritmetica: " + media);
}
document.getElementById("numeri").innerHTML = numeriInseritiArray;