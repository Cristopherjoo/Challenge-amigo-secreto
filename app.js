// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombre = inputAmigo.value.trim().toUpperCase();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
  
    amigos.push(nombre);

    inputAmigo.value = "";

    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {  
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
   
    let indiceDelSorteo = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceDelSorteo];
   
    resultado.innerHTML = "¡El amigo secreto es: " + amigoSeleccionado + "!";
}