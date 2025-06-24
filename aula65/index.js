/* Filter: é uma função que recebe um array e retorna um novo array com os 
elementos que passam no teste. Ou seja, sempre retornam um array com a mesma
quantidade de elementos ou menos. */

// Retorne os números maiores que 10

// Podemos utilizar uma função nomeada

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 10, 11, 15, 22, 27];

// function callbackFilter(valor){
//   return valor > 10 
// }

// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

// Podemos utilizar uma função anônima

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 10, 11, 15, 22, 27];
// const numerosFiltrados2 = numeros.filter(function(valor){
//   return valor > 10;
// });
// console.log(numerosFiltrados2);

// Podemos utilizar uma função arrow

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 10, 11, 15, 22, 27];

// const numerosFiltrados3 = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados3);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra a

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj =>  obj.nome.length >= 5);
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeGrande, pessoasComMaisDe50Anos, nomeTerminaComA);
