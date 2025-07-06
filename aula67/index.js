///Reduce é um método que permite reduzir um array a um valor unico

// Some todos os números (reduce)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   return acumulador + valor;
// }, 0);

// console.log(total);

// Retorne um array com os pares (mais fácil utilizar o  Filter ), porém, vamos utilizar o reduce como exemplo

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const pares = numeros.reduce(function (acumulador, valor) {
//   if(valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);

// console.log(pares);

// Retorne um array com o dobro dos valores (poderia fazer com map)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor) {
//   acumulador.push(valor * 2); return acumulador;
// }, []);

// console.log(total);

/* Então reduce é um método poderoso que pode ser usado para transformar arrays em valores
únicos ou em outros arrays, dependendo da lógica que você implementar. Ele é especialmente
útil quando você precisa realizar operações de agregação ou transformação complexas nos 
dados de um array.*/

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor) {
//   acumulador += valor; 
//   return acumulador;
// });

// console.log(total);

// Somando somente os pares:

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor) {
//   if(valor % 2 === 0) acumulador += valor; 
//   return acumulador;
// }, 0);

// console.log(total);

// Retorne a pessoa mais velha:

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
}, { nome: '', idade: 0 });

console.log(maisVelha);
