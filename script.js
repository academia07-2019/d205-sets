// setTimeout(function() {
//     alert("eu sou um alert")
// }, 1000);

// let intervalo = setInterval(function(){
//     alert("eu sou um alert chato");
// }, 2000);

// clearInterval(intervalo);

let texto = document.querySelector("h1");
let tempo = Number(prompt("Digite os segundos que você contar"));

texto.innerHTML = tempo;

function diminuirTempo(){
    tempo--;
    texto.innerHTML = tempo;
    if(tempo == 0){
        clearInterval(idIntervalo);
    }
}

let idIntervalo = setInterval(diminuirTempo, 1000);