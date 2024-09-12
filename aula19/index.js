/*
Dados Primitivos (imutáveis) - string, number, undefined, boolean. 
null(bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - passados por referência
*/

// string
// let nome = 'Luiz';
// nome = 'Otávio'; // não altera a string
// console.log(nome);

// string com array
// let nome = 'Luiz';
// nome[0] = 'R'; // não altera a string pq é imutável
// console.log(nome[0]); // L

// Cópia de valores da string
// let a = 'A';
// let b = a; // cópia 
// console.log(a, b); // A A

// a = 'Outra coisa';
// console.log(a, b); // Outra coisa A

// array - passado por referência (mutável)

// let a = [1, 2, 3];
// let b = a; // passa a referência do array a para b
// let c = b; // passa a referência do array b para c
// console.log(a, b); // [1, 2, 3] [1, 2, 3]

// a.push(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4]
// console.log(c); // [1, 2, 3, 4]

// b.pop(); // remove o último elemento do array
// console.log(a); // [1, 2, 3]
// console.log(b); // [1, 2, 3]
// console.log(c); // [1, 2, 3]

// array - cópia de valores

// let a = [1, 2, 3];
// let b = [...a]; // cópia dos valores do array a para b
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);

// object - passado por referência (mutável)

// const a = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda'
// };
// const b = a;

// a.nome = 'João';
// console.log(b);

// Agora se eu quiser que os dois valores apontem para objetos diferentes, eu faço uma cópia dos valores

const a = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
};
const b = {...a}; // cópia dos valores do objeto a para b

a.nome = 'João';
console.log(a);
console.log(b);

b.nome = 'João';
console.log(a);
console.log(b);
