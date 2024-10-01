const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

// let nome = 'Luiz Otávio'; // criando
// var nome2 = 'Luiz Otávio';

// if (verdadeira) {
//   let nome = 'Outra coisa'; // criando
//   // console.log('nome, nome2');

//   if (verdadeira) {
//     let nome = 'Outra coisa';
//     console.log(nome, nome2);
//   }
// }

// console.log(nome, nome2);

let nome = 'Luiz Otávio'; // criando
var nome2 = 'Luiz Otávio';


//console.log(nome, nome2);

// if (verdadeira) {
//   let nome = 'Outra coisa'; // criando
//   var nome2 = 'Rogério'; // redeclarando

//   if (verdadeira) {
//     var nome2 = 'Ronaldo'; // redeclarando
//     let nome = 'Outra coisa';
    
//   }
// }

// console.log(nome, nome2);

// escopo de bloco

// var sobrenome = 'Miranda'; // criando

// function falaOi () {
//   console.log(sobrenome);

//   if (verdadeira) {
//     var sobrenome = 'Lima'; // criando
//     }

//   console.log(sobrenome);

// }

// falaOi();

// hoisting utilizando var: eleva a declaração da variável para o topo do escopo

// console.log(sobrenome); // undefined

// var sobrenome = 'Miranda'; // criando

// utilizando let e const não ocorre hoisting

console.log(sobrenome); // erro

let sobrenome = 'Miranda';