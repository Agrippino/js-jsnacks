const nuemriInseriti =[10,15,20,25,30,35,40,45,50,55];
console.log(nuemriInseriti);
document.getElementById("primo").innerHTML =nuemriInseriti;

let somma = sommaNumeri (nuemriInseriti);
function sommaNumeri(numeriArray) {
    let operazioneNumeri = 0 + nuemriInseriti;
    console.log("somma numeri inseriti"+ operazioneNumeri);
    document.getElementById("due").innerHTML =operazioneNumeri;
    return operazioneNumeri;
}
