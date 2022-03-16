function myRandom() {
    return Math.floor(Math.random() * 6 + 1);
}

let dadoUtente= myRandom();
let dadoComputer= myRandom();

console.log(dadoUtente);
console.log(dadoComputer);

if(dadoUtente > dadoComputer){
    document.getElementById("dado").innerHTML=`Hai fatto ${dadoUtente}, hai vinto!`;
}else{
    document.getElementById("dado").innerHTML = `Hai fatto ${dadoUtente}, hai perso!`;
}