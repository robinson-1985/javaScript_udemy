/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(obj, prop)
...(spread)

Já vimos🧮 

Object.keys(retorna as chaves de um objeto)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades de uma vez)
Object.defineProperty (define uma propriedade de um objeto)
*/

// const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = produto;

// produto.nome = 'Harry Potter';
// outraCoisa.preco = 2.5; // Referência para o mesmo objeto

// console.log(produto);
// console.log(outraCoisa);

// Vamos utilizar o spread operator para criar uma cópia rasa de um objeto

// const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = { ...produto }; // Cópia rasa do objeto e espalhamento

// produto.nome = 'Harry Potter';
// outraCoisa.preco = 2.5;

// console.log(produto);
// console.log(outraCoisa);

// Posso adicionar novas propriedades ao objeto com o spread operator

// const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = { 
//   ...produto,
//   material: 'porcelana',
//  }; 

// caneca.nome = 'Harry Potter';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);

// Vamos utilizar o Object.assign que serve para copiar propriedades de um objeto para outro

// const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = Object.assign({}, produto, {
//   material: 'porcelana',
//   cor: 'azul',
// }); 

// caneca.nome = 'Harrods';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);

// Existe uma forma de você fazer isso de forma manual, mas não é recomendado

// const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = {nome: produto.nome, preco: produto.preco, material: 'porcelana', cor: 'azul'}; 

// caneca.nome = 'Harrods';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);

// Utilizar Objects.keys para obter as chaves de um objeto

// const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = {nome: produto.nome, preco: produto.preco, material: 'porcelana', cor: 'azul'};

// console.log(Object.keys(produto));

// Object.freeze: Congela o objeto, não permite modificações

// const produto = { nome: 'Produto', preco: 1.8 };
// Object.freeze(produto);
// produto.nome = 'Outro Nome'; // Não terá efeito, pois o objeto está congelado
// const caneca = {nome: produto.nome, preco: produto.preco, material: 'porcelana', cor: 'azul'};

// console.log(produto);

// Object.getOwnPropertyDescriptor: Retorna as propriedades de um objeto

//  const produto = { nome: 'Produto', preco: 1.8 };
//  Object.defineProperty(produto, 'nome', {
//    writable: false, // Não permite escrita
//    configurable: false, // Não permite reconfiguração
//    enumerable: true, // Permite enumeração
//  });
//  console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//  console.log(produto);

 const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
 console.log(Object.values(produto)); // Retorna os valores do objeto
// console.log(Object.entries(produto)); // Retorna as entradas do objeto como pares.

// posso iterar sobre as entradas do objeto

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
