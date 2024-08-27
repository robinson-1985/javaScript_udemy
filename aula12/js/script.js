/*
Os exemplos abaixo são formas de exibir mensagens ao usuário, porém, 
a forma mais comum é utilizando o alert, confirm e prompt. E só rodam no navegador.*/

alert('Com a nossa mensagem'); //undefined

window.alert('Com a nossa mensagem'); //undefined

window.confirm('Deseja realmente apagar?'); //true ou false

window.prompt('Qual o seu nome?'); //string ou null

confirm('Deseja realmente apagar?'); //true ou false 

const confirma = confirm('Deseja realmente apagar?');
console.log(confirma); //true ou false

let confirmar = confirm('Deseja realmente apagar?');

// Exemplo de uso do prompt
let num1 = prompt('Digite um número');
console.log(num1); //string ou null

let num2 = prompt('Digite outro número');
console.log(num2); //string ou null

// Agora vamos converter a string para número
num1 = Number(num1);//number ou NaN

num2 = Number(num2);//number ou NaN

num1 = parseFloat(num1);//number ou NaN

num2 = parseFloat(num2);//number ou NaN
