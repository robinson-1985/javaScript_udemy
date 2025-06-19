/* Funções contrutoras (constructor functions) são funções que criam objetos.
Elas são usadas para criar múltiplas instâncias de um objeto com a mesma estrutura.
A convenção é nomear essas funções com a primeira letra maiúscula. -> Pessoa (new)*/

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;

  const metodoPrivado = function() {
    console.log('Este é um método privado.');
  };

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método.');
  };
}

// Instanciando objetos com a função construtora Pessoa
const pessoa1 = new Pessoa('Luiz', 'Miranda');
const pessoa2 = new Pessoa('Maria', 'Oliveira');
pessoa2.metodo(); // Maria: sou um método.
