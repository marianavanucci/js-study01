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

// document.getElementById("botao").addEventListener("click",console.log('entrei?'));

document.querySelector("#botao").addEventListener("click",mariana());

function mariana(){
    console.log("entrei?")
}



// function nome() {
//     const nomeCompleto = document.getElementById('nome-completo').value;
//     alert('O Nome Completo é: ' + nomeCompleto );	
//   };