// Criando objetos

// const pessoa = {
//   nome: 'João',
//   sobrenome: 'Silva',
// };

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

// Posso utilizar os colchetes para acessar as propriedades do objeto

// const pessoa = {
//   nome: 'João',
//   sobrenome: 'Silva',
// };

// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);

// Posso criar objetos com propriedades dinâmicas

// const pessoa = {
//   nome: 'João',
//   sobrenome: 'Silva',
// };

// const chave = 'nome';

// console.log(pessoa[chave]);

// Posso adicionar novas propriedades ao objeto

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// Vamos fazer o mesmo com a notação de objeto literal

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';

// const pessoa2 = {
//   nome: 'Maria',
//   sobrenome: 'Oliveira',
// };

// console.log(pessoa1, pessoa2);

// Posso apagar a utilizando o operador delete

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';

// delete pessoa1.nome;
// console.log(pessoa1);

// Objetos podem conter métodos, que são funções dentro do objeto

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';
// pessoa1.falarNome = function() {
//   console.log(`${this.nome} está falando seu nome.`);
// };

// pessoa1.falarNome();

// Objetos também podem conter propriedades que são funções

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {  
//   return(`${this.nome} está falando seu nome.`); 
// };

// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };
  
// console.log(pessoa1.getDataNascimento());

// Utilizando o for in para iterar sobre as propriedades de um objeto

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Silva';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {  
//   return(`${this.nome} está falando seu nome.`); 
// };

// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

// Factory Functions são funções que retornam objetos
// Elas são uma forma de criar objetos de maneira mais organizada e reutilizável
// Vamos criar uma função que cria uma pessoa

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   };
// }

// const pessoa1 = criaPessoa('João', 'Silva');
// console.log(pessoa1.nomeCompleto);

// Constructor Functions são funções que criam objetos
// Classes são funções que criam objetos

// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// };

// const pessoa1 = new Pessoa('João', 'Silva');
// const pessoa2 = new Pessoa('Maria', 'Oliveira');
// console.log(pessoa1);
// console.log(pessoa2);

// 

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
};

const pessoa1 = new Pessoa('João', 'Silva');
pessoa1.nome = 'Outra coisa';
const pessoa2 = new Pessoa('Maria', 'Oliveira');
console.log(pessoa1);
console.log(pessoa2);

