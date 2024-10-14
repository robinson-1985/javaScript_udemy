// Escreva uma função que recebe 2 números e retorne o maior deles:

// solução verbosa

// function max(x, y) {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// console.log(max(10, 5));

// vamos solucionar de forma mais enxuta

// function max(x, y) {
//   if (x > y) return x;
//   return y;

// // Vamos melhorar a solução acima com o operador ternário:

// function max(x, y) {
//   return x > y ? x : y;
// }

// console.log(max(10, 5));

// usando arrow function

const max2 = (x, y) => (x > y ? x : y);
console.log(max2(8, 5));
