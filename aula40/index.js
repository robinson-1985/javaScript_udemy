// // break e continue

// Continue - continua a execução do loop
// Break - sai do loop

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {

//   if (numero === 2) {
//     console.log('Pulei o número 2');
//     continue;
//   }

//   if (numero === 7) {
//     console.log('Achei o número 7');
//     break;
//   }

//   console.log(numero);
// }

// for clássico - Geralmente com iteráveis (array ou strings)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numeros.length; i++) {

//   if (numero === 2) {
//     console.log('Pulei o número 2');
//     continue;
//   }

//   if (numero === 7) {
//     console.log('Achei o número 7');
//     break;
//   }

//   console.log(numero);
// }

// while - Geralmente quando não sabemos o ponto de parada

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let i = 0;
// while ( i < numeros.length) {
//   let numero = numeros[i];

//   if (numero === 2) {
//     console.log('Pulei o número 2');
//     i++;
//     continue;
//   }

//   console.log(numero);

//   if (numero === 7) {
//     console.log('Achei o número 7');
//     i++;
//     break;
//   }

//   i++;
// }

// do while - Raramente utilizado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do{
  let numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o número 2');
    i++;
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log('Achei o número 7');
    i++;
    break;
  }

  i++;
} while (i < numeros.length);
