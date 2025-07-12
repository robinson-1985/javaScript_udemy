/*
JavaScript é uma linguagem baseada em protótipos para passar propriedades e métodos 
de um objeto para outro.

Definição de protótipo: é um objeto que serve como modelo para outros objetos.

Todos os objetos tem uma referência interna para um protótipo (__proto__). que vem 
da propriedade prototype de uma função construtora que foi usada para criar o objeto.
Quando tentamos acessar um membro de um objeto, o JavaScript procura primeiro
no próprio objeto, depois no protótipo do objeto, e assim por diante, até encontrar 
o membro ou chegar ao final da cadeia de protótipos (null) até encontrar (ou não) 
o membro desejado.
*/

// Construtora -> molde (classe))

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => 'ORIGINAL' + `${this.nome} ${this.sobrenome}`;
}

//intância -> instância de um objeto (objeto)
const pessoa1 = new Pessoa('Luiz', 'Otávio'); // Função construtora
const data = new Date(); // Função construtora

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
};

console.dir(pessoa1);
console.dir(data);
