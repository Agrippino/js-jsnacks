parseInt =let primoNumeroInserito = prompt ("Salve, inserisci il primo numero");
console.log ("stampo numero 1");
parseInt = let secondoNumeroInserito = prompt ("Salve, inserisci il secondo numero");
console.log ("stampo numero 2");
let  vincitoreGioco;

if(primoNumeroInserito>secondoNumeroInserito){
    vincitoreGioco = ("il primo numero è più grande");
    console.log ("primo numero più grande ");
}
else if(primoNumeroInserito<secondoNumeroInserito){
    vicitoreGioco = ("il secondo numero è più grande");
    console.log ("secondo numero più grande ");
}
else {
    vicitoreGioco =("Avete scelto lo stesso numero");
    console.log ("numero uguale");
}
document.getElementById("vincitore").innerHTML = vincitoreGioco;
document.getElementById("Primo").innerHTML = primoNumeroInserito;
document.getElementById("Secondo").innerHTML = secondoNumeroInserito;