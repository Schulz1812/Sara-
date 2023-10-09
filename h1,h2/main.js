// Seleciona a div com id "principal"
const principalDiv = document.getElementById("principal");

// Cria os elementos h1, h2 e p
const h1Element = document.createElement("h1");
const h2Element = document.createElement("h2");
const pElement = document.createElement("p");

// Adiciona o texto aos elementos
h1Element.textContent = "Bem vindo ao JS";
h2Element.textContent = "Criando elementos de forma dinâmica";
pElement.textContent = "Esse é um exemplo clássico de geração de HTML com Javascript";

// Adiciona as classes aos elementos
h1Element.classList.add("tituloPrincipal");
h2Element.classList.add("tituloSec");
pElement.classList.add("texto");

// Adiciona os elementos como filhos da div principal
principalDiv.appendChild(h1Element);
principalDiv.appendChild(h2Element);
principalDiv.appendChild(pElement);
