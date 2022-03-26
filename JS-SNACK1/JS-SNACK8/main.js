
let numeriInseritiArray = [10,15,20,25,30,35,40,45,50,55 ]; 
console.log(numeriInseritiArray); 
 
sommaNumeri(); 
 
function sommaNumeri (){ 
 
    let somma = 0; 
    for (let i = 0; i < numeriInseritiArray.length; i++) { 
        somma += numeriInseritiArray[i]; 
        document.getElementById("somma").innerHTML = somma;
    } 
    console.log(somma); 
}   
document.getElementById("numeri").innerHTML = numeriInseritiArray;

