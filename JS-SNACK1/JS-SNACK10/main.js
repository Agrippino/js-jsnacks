let numeriInseritiArray = []; 
console.log(numeriInseritiArray); 
sommaNumeri();
 
function sommaNumeri (){ 
    let somma = 0; 
    for (let i = 0; i <1; i++) {
        numeriInseritiArray.push(parseInt(prompt("insersci qui i numeri")));
        somma += numeriInseritiArray[i]; 
        console.log(somma);
        document.getElementById("somma").innerHTML = somma;
    }
}

//document.getElementById("demo").innerHTML = arrayNumeri;
