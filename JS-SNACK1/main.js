//inserisco il primo numero 
let primoNumeroInserito = prompt ("Salve, inserisci il primo numero");
parseInt = primoNumeroInserito;
console.log ("stampo numero 1");
//inserisco il secondo numero 
let secondoNumeroInserito = prompt ("Salve, inserisci il secondo numero");
parseInt = secondoNumeroInserito;
console.log ("stampo numero 2");
let  vincitoreGioco;
//creo delle condiozioni 
if(primoNumeroInserito>secondoNumeroInserito){
    vincitoreGioco = ("il primo numero è più grande");
    console.log ("primo numero più grande ");
}
else if(primoNumeroInserito<secondoNumeroInserito){
    vincitoreGioco = ("il secondo numero è più grande");
    console.log ("secondo numero più grande ");
}
else {
    vincitoreGioco =("Avete scelto lo stesso numero");
    console.log ("numero uguale");
    
}
document.getElementById("vincitore").innerHTML = vincitoreGioco;
document.getElementById("Primo").innerHTML = primoNumeroInserito;
document.getElementById("Secondo").innerHTML = secondoNumeroInserito;