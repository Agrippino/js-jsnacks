
//creato un array con i numeri 
let numeriInseritiArray = [10,15,20,25,30,35,40,45,50,55 ]; 
console.log("numeri inseriti nell'array: "+numeriInseritiArray); 

sommaNumeri(); 
 
function sommaNumeri (){ 
 //creo una funzione dove i numeri inseriti nell'array vengono sommati tra di loro
    let somma = 0; 
    for (let i = 0; i < numeriInseritiArray.length; i++) { 
        somma += numeriInseritiArray[i]; 
        document.getElementById("somma").innerHTML = somma;
    } 
    console.log("somma dell'array: " +somma); 
}   
document.getElementById("numeri").innerHTML = numeriInseritiArray;

