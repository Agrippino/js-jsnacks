let addizioni = 0
for (let i=0; i<10; i++)
{
    let inserisciNumeri= parseInt(prompt("insersci qui i numeri"));
    addizioni= addizioni + inserisciNumeri;
    console.log(addizioni);
    document.getElementById("somma").innerHTML = addizioni;
}
