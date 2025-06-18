/* Funções fábricas (Factory Functions) são funções que retornam outras funções. 
Elas são úteis para criar funções com comportamento personalizado, encapsulando 
variáveis e lógica dentro de um escopo.*/

// Quando a função está dentro de um objeto, ela é chamada de método.

// function criaPessoa(nome, sobrenome, altura, peso) {
//   return {
//     nome,
//     sobrenome,
//     fala: function(assunto) {
//       return `${this.nome} está ${assunto}`;
// // 'this' se refere ao objeto que contém a função, ou seja, o objeto retornado por criaPessoa
//     },
//     altura: altura,
//     peso: peso,
//     imc(){
//       const indice = this.peso / (this.altura * this.altura);
//       return indice.toFixed(2); // Retorna o IMC com duas casas decimais
//     }
//   };
// }

// const p1 = criaPessoa('João', 'Mariano', 1.80, 80);
// console.log(p1.fala('falando sobre JavaScript')); //console.log(p1.nome); é a mesma coisa.
// console.log(p1.imc()); // Exibe o IMC de p1
// const p2 = criaPessoa('Maria', 'Silva', 1.65, 60);
// console.log(p2.fala('aprendendo a programar')); //console.log(p2.nome); é a mesma coisa.
// console.log(p2.imc()); // Exibe o IMC de p2

/*Constructor Functions são funções que criam objetos. Elas são definidas 
com a primeira letra maiúscula e geralmente são chamadas com o operador 'new'.*/

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // setter
    set nomeCompleto(valor) {
      valor = valor.split(' '); // Divide o nome completo em um array de palavras
      this.nome = valor.shift(); // Extrai o primeiro nome
      this.sobrenome = valor.join(' '); // Junta o restante como sobrenome
    },

    // Métodos são funções dentro de um objeto.
    fala(assunto = 'falando sobre nada') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,

    // Getters e Setters são usados para acessar e modificar propriedades de um objeto.
   get imc(){
      const indice = this.peso / (this.altura * 2);
      return indice.toFixed(2); 
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

