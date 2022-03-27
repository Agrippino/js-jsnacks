//chideo il nome 
let inserisciTesto = prompt("Il tuo nome è nella lsita?");
console.log("nome inserito: " +inserisciTesto);
//Lista con i nomi 
let nomiNellaLista = ["matteo","fabio","pietro","anna","simone","bryan",]
console.log("nomi presenti nella lista: " + nomiNellaLista);
let nomeRisultato
let variabileZero = 0
//ciclo for per confronto con il server
for (let i=0; i < nomiNellaLista.length;i++){
    if(nomiNellaLista[i]!=inserisciTesto){     
    }
    else {
        variabileZero ++
    alert(emailRisultato="Lei è nella lista, entri pure!");
    break;
    }
}
if (variabileZero == 0){
    alert(nomeRisultato= "Lei non è presente,vada via");
}

//reminder fisso in pagina
document.getElementById("demo").innerHTML = emailRisultato;