// /* while e do while são estruturas de repetição que são utilizadas quando não sabemos quantas
//   vezes o bloco de código deve ser executado.*/

// let i = 0;

// while(i <= 10) {
//   console.log(i);
//   i++;
// }

// console.log('---');

// // Abaixo vai um exemplo, porém não é recomendado utilizar o while para percorrer arrays e sim for.

// const nome = 'Luiz Otávio';
// let j = 0;

// while (j < nome.length) {
//   console.log(nome[j]);
//   j++;
// }

// utilizando o do while

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('#########');

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
