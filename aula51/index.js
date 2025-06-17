// return: retorna o valor de uma variável e termina a função

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2)); 

// function soma2(a, b) {
//   return a + b;
// }

// soma2(5, 2);

// outro tipo de função que não retorna nada, apenas executa um código

// document.addEventListener('click', function() { 
//   document.body.style.backgroundColor = 'red';
// });

// function para criar objetos e retornar esses objetos

// function criaPessoa(nome, sobrenome) {
//   return { nome, sobrenome };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// const p2 = {
//   nome: 'Maria',
//   sobrenome: 'Oliveira' 
// };

// console.log(p1);
// console.log(p2);

// console.log(typeof p1);
// console.log(typeof p2);

// function que recebe uma função como parâmetro

// function falaFrase(comeco) {
//   function falaResto(resto) {
//     return  comeco + '' + resto;
//   }

//   return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// const resto = (' mundo!');
// console.log(resto);

// function que duplica o valor

// function duplica(n) {
//   return n * 2;
// }

// function triplica(n) {
//   return n * 3;
// }

// function quadruplica(n) {
//   return n * 4;
// }

// console.log(duplica(2)); // 4
// console.log(triplica(2)); // 6
// console.log(quadruplica(2)); // 8

function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(3)); 
console.log(triplica(2)); 
console.log(quadruplica(10)); 
