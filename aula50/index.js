/* arguments: argumentos que sustenta todos os argumentos passados para a função
 arguments é um objeto semelhante a um array que contém todos os argumentos 
passados para a função
mas eles não são arrays */


/*function funcao(a,b, c,) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7);*/

/* function funcao(a, b, c, d, e, f, g) {
  console.log(a, b, c, d, e, f, g);
}
funcao(1, 2, 3);// 1 2 3 undefined undefined undefined undefined */

// function funcao(a,b = 2, c = 4){
//   console.log(a + b + c);
// }

// funcao(2, 10, 20);

// argumentos que sustentam todos os argumentos passados para a função
// function funcao(a, b=2, c=4) {
//   console.log(a + b + c);
// }
// funcao(2, undefined, 20); // 2 + 2 + 20 = 24

// // desestruturação de objetos ou seja, extrair valores de objetos

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }

// let obj = {
//   nome: 'Luiz',
//   sobrenome: 'Otávio',
//   idade: 30
// };

// funcao(obj); // Luiz Otávio 30

// // desestruturação de arrays

// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }
// let arr = ['Luiz', 'Otávio', 'Miranda', 30];

// funcao(arr); // Luiz Otávio Miranda 30

// funcão do mundo real

// function conta(operador, acumulador, ...numeros) { // ...numeros é o rest operator, que agrupa os argumentos restantes em um array
//   for(let numero of numeros) {
//     if (operador === '+') acumulador += numero;
//     if (operador === '-') acumulador -= numero;
//     if (operador === '/') acumulador /= numero;
//     if (operador === '*') acumulador *= numero;
//   }

//   console.log(acumulador);
// }

// conta('+', 0, 20, 30, 40, 50);
// conta('-', 100, 20, 30, 10); // 40
// conta('/', 100, 2, 5); // 10
// conta('*', 2, 5, 10); // 100


// desestruturação de objetos e arrays juntos

// function funcao({ nome, sobrenome, idade }, [valor1, valor2, valor3]) {
//   console.log(nome, sobrenome, idade);
//   console.log(valor1, valor2, valor3);
// }
// let obj2 = {
//   nome: 'Maria',
//   sobrenome: 'Silva',
//   idade: 25
// };
// let arr2 = ['Ana', 'Clara', 'Souza', 28];
// funcao(obj2, arr2); // Maria Silva 25

// arrow function com rest operator

// const conta = (operador, acumulador, ...numeros) => { 
//   console.log(operador, acumulador, numeros);
// };

// conta('+', 1, 20, 30, 40, 50);

// args

const conta = (...args) => { 
  console.log(args);
};

conta('+', 1, 20, 30, 40, 50);
