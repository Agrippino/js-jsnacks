//creo un array dove verrano inseriti i numeri dispari 
let numeriDispariInseriti = [];
console.log("numeri dispari inseriti: " + numeriDispariInseriti)
//creo un ciclo dove vengono inseriti 6 numeri e presi esportati solo i dispari
for(let i=0; i<6;i++)
{ let numeriInseriti= parseInt(prompt("inserisci qui i numeri"));
    if(numeriDispari = numeriInseriti %2 !=0){
    numeriDispariInseriti.push (numeriInseriti);
    console.log(numeriDispariInseriti[i]);
    document.getElementById("numeri").innerHTML = numeriInseriti;
}
}
