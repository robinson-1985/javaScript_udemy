// Como criar uma classe em JS

/* class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
const p3 = new Pessoa('João', 'Silva');
const p4 = new Pessoa('Ana', 'Souza');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
p1.falar();
p2.comer();
p3.beber();
p4.falar();

*/

// Como criar uma função construtora em JS
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa2('Maria', 'Oliveira');
console.log(p1);
console.log(p2);
p1.falar();
p2.falar();
