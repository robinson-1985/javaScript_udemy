// Atribuição via desestruturação (Arrays)

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const numeros = [1, 2, 3];
// [a, b, c] = numeros; // Atribuição via desestruturação

// console.log(a, b, c);

// Atribuição via desestruturação - trocando valores

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras; // Atribuição via desestruturação

// console.log(a, b, c);

// Agora iremos entender na prática sobre o que é o destructuring de arrays.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

//O destructuring é uma forma de pegar val. de um array ou objeto e atribuir a var.
// Então eu posso fazer assim:

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero] = numeros;
// console.log(primeiroNumero, segundoNumero);

// Para pegar o restante (...rest) dos valores do array, eu posso fazer assim:

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres)
// console.log(resto);

// spread operator (...) - pega todos os valores restantes de um array e coloca em outro array

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , seis, , sete, , nove] = numeros;
// console.log(um, tres, cinco);

// Iremos ver algo mais complexo com spread operator:
// indice da list:  0           1          2
// indices do array: 0  1  2    0  1  2    0  1  2
// const numeros =    [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(numeros[1][2]); // 6
// const[,[,,seis]] = numeros;
// console.log(seis); // só que isto tudo muito complexo.

// Então, para simplificar, podemos fazer assim:

const numeros =    [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const[lista1, lista2, lista3] = numeros;
console.log(lista3[2]); // 9
