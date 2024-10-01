// Atribuição de desestruturação em objetos


// Atribuição normal

// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 30,
//   endereco: {
//     rua: 'Av Brasil',
//     numero: 320
//   }
// };

// // Atribuição via desestruturação
// const {nome, sobrenome, idade} = pessoa;
// console.log(nome, sobrenome, idade);

// undefined

// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 30,
//   endereco: {
//     rua: 'Av Brasil',
//     numero: 320
//   }
// };

// // Atribuição via desestruturação
// const {nome = '', sobrenome, idade} = pessoa;
// console.log(nome, sobrenome, idade);

// Posso modificar o nome da variável

// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 30,
//   endereco: {
//     rua: 'Av Brasil',
//     numero: 320
//   }
// };

// // Atribuição via desestruturação
// const {nome: teste = '', sobrenome, idade} = pessoa;
// console.log(teste, sobrenome, idade);

// Posso desestruturar um objeto dentro de outro objeto

// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 30,
//   endereco: {
//     rua: 'Av Brasil',
//     numero: 320
//   }
// };

// // Atribuição via desestruturação de um objeto dentro de outro objeto
// const { 
//   endereco: { rua, numero },
//   endereco
// } = pessoa;

// console.log(rua, numero, endereco);

// Posso desestruturar um objeto dentro de outro objeto e atribuir um nome diferente

// Posso desestruturar um objeto dentro de outro objeto

// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 30,
//   endereco: {
//     rua: 'Av Brasil',
//     numero: 320
//   }
// };

// // Atribuição via desestruturação de um objeto dentro de outro objeto e atribuir um nome diferente
// const { 
//   endereco: { rua: r, numero },
//   endereco
// } = pessoa;

// console.log(r, numero, endereco);

// Operador de rest (...) para pegar o resto das propriedades

// Posso desestruturar um objeto dentro de outro objeto

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação de um objeto dentro de outro objeto
const { nome, ...resto } = pessoa;
console.log(nome, resto);
