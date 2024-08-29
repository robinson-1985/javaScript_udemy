// Mais sobre numbers: o JS segue o padrão IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

// abaixo posso fazer um cálculo complexo para corrigir a soma de num1 e num2
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1)); // verificando se num1 é um número inteiro

/* aqui posso fazer a soma de num1 e num2 de forma mais simples

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = parseFloat(num1.toFixed(2)); // 1.0 - pode usar o Number() no lugar do parseFloat()*/

console.log(num1);
console.log(Number.isInteger(num1)); // verificando se num1 é um número inteiro

// console.log(num1.toString() + num2); // aqui não se realiza a soma e sim a concatenação
// num1 = num1.toString(); // convertendo num1 para string
// console.log(num1.toString(2)); // convertendo num1 para binário
// console.log(num1.toFixed(2)); // arredondando num1 para 2 casas decimais
// console.log(num1.toFixed(4)); // arredondando num1 para 4 casas decimais
// console.log(Number.isInteger(num1)); // verificando se num1 é um número inteiro
//let temp = num1 * 'Olá'; // NaN - Not a Number
// console.log(Number.isNaN(temp)); // verificando se temp é um NaN
// let temp = num1 * '5'; // NaN - Not a Number
// console.log(temp);



