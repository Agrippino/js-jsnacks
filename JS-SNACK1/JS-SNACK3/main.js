//creo una variabile e un ciclo
let addizioni = 0
for (let i=0; i<10; i++)
{//nel ciclo vengono inseriti i numeri e poi somamti tra loro 
    let inserisciNumeri= parseInt(prompt("insersci qui i numeri"));
    addizioni= addizioni + inserisciNumeri;
    console.log("numeri per l'addizone: " + addizioni);
    document.getElementById("somma").innerHTML = addizioni;
}
