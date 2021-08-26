console.log('oi!')
console.log('estou funcionando?')

// EXERCÍCIOS JAVASCRIPT POR GABRIEL DAREZZO
// https://github.com/gabrieldarezzo/helpjs-ravi

// EXERCÍCIO 1
// Faça uma mensagem de 'Olá Mundo'
// alert('Ola mundo!');


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

document.querySelector("#botao-ex4").addEventListener("click",nomeCompleto);


function nomeCompleto(){
    // google -> javascript return input value
    const nomeCompleto = document.querySelector("#input-ex4")
    console.log("entrei?",nomeCompleto.value)
    alert('O Nome Completo é: ' +  nomeCompleto.value)
}

document.querySelector("#botao2-ex4").addEventListener("click",changeColor);

function changeColor(){
    console.log("console mudar cor verde")
    const changeColor = document.querySelector("#input-ex4").style.backgroundColor = "lightgreen";
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

document.querySelector("#botao-ex5").addEventListener("click",countingCharacters)

function countingCharacters (){
    const coutingCharacters = document.querySelector("#input-ex4").value.length
    alert('A quantidade de caracteres é: ' +  coutingCharacters)
}

