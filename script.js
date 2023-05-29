console.log("oi!");
console.log("estou funcionando?");

// EXERCÍCIOS JAVASCRIPT POR GABRIEL DAREZZO
// https://github.com/gabrieldarezzo/helpjs-ravi

// EXERCÍCIO 1
// Faça uma mensagem de 'Olá Mundo'
// alert("Ola mundo!");

// EXERCÍCIO 2
// Faça essa mensagem em um arquivo javascript externo e chame ela
// no arquivo html

// EXERCÍCIO 3
// Faça uma saída de soma de 2 inteiros, ex: alert(2 + 2)
// alert(2+2);

// EXERCÍCIO 4
// No HTML Crie:
// 1 - Campo/Input do tipo text para preencher o nome completo.
// 2 - Botão com o texto: 'Exibir Nome' e ao clicar neste botão
// é exibido um alert com o valor do campo nome completo,
// ex: ' O Nome Completo é: "xxxx". '
// 3 - quando clica no botão o input fica verde

// document.getElementById("botao").addEventListener("click",console.log('entrei?'));
// addEventListener só roda função, ele não roda o console direto, ou alert

document.querySelector("#botao-ex4").addEventListener("click", nomeCompleto);

function nomeCompleto() {
  // google -> javascript return input value
  const nomeCompleto = document.querySelector("#input-ex4");
  console.log("entrei?", nomeCompleto.value);
  alert("O Nome Completo é: " + nomeCompleto.value);
}

document.querySelector("#botao2-ex4").addEventListener("click", changeColor);

function changeColor() {
  document.querySelector("#input-ex4").style.backgroundColor = "lightgreen";
}

// RESPOSTA DO EXERCÍCIO function nome() {
//     const nomeCompleto = document.getElementById('nome-completo').value;
//     alert('O Nome Completo é: ' + nomeCompleto );
//   };

// EXERCÍCIO 5
// exiba a quantidade de letras que possuem o texto inserido ao clicar no botão
// Exemplos de entrada e saida:
// 'Gabriel' // 7
// 'Daniel' // 6
// 'Ronaldo' // 6
// 'Dennis Ritchie' // 14 (Espaço conta)

document
  .querySelector("#botao-ex5")
  .addEventListener("click", countingCharacters);

function countingCharacters() {
  const coutingCharacters = document.querySelector("#input-ex4").value.length;
  alert("A quantidade de caracteres é: " + coutingCharacters);
}

// EXERCÍCIO 6
// No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada,
//troque o src dela para a lampada que está acessa.
//SRC da Lampada (apagada)
//https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true
//SRC da Lampada (acessa)
//https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true

document.querySelector("#imagem-ex6").addEventListener("click", changeImage);

function changeImage() {
  document.querySelector("#imagem-ex6").src =
    "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
}

// EXERCÍCIO 7
//Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover',
//ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg' (Exemplo abaixo).

document
  .querySelector("#imagem-ex7")
  .addEventListener("mouseover", changeImage2);

function changeImage2() {
  document.querySelector("#imagem-ex7").src =
    "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
}

// EXERCÍCIO 7A
// Faça 2 campos no HTML chamados: 'Nome', 'Sobrenome' e um botão 'Saudação';
//ao clicar no botão exibir um alert: 'Olá {NOME} {SOBRENOME}'

document.querySelector("#botao-ex7a").addEventListener("click", fullName);

function fullName() {
  // google -> javascript return input value
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  console.log("entrei?", firstName.value);
  alert("O Nome Completo é: " + firstName.value + " " + lastName.value);
}
