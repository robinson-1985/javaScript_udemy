// Object.defineProperty(): define uma propriedade de um objeto;

// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;
//   // this.estoque = estoque;
  
//   Object.defineProperty(this, 'estoque', {
//     enumerable: true,
//     value: estoque,
//     writable: true, // Pode alterar o valor de estoque
//     configurable: false // Não é possível deletar a propriedade estoque
//   });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500000;
// console.log(Object.keys(p1));

// // podemos iterar sobre as propriedades de um objeto

// for (let chave in p1) {
//   console.log(chave, p1[chave]);
// }

// Object.defineProperties(): define várias propriedades de um objeto;

function Produto(nome, preco, estoque) {
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    value: estoque,
    writable: true, // Pode alterar o valor de estoque
    configurable: false // Não é possível deletar a propriedade estoque
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true, // Pode alterar o valor de nome
      configurable: true // É possível deletar a propriedade nome
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true, // Pode alterar o valor de preco
      configurable: true // É possível deletar a propriedade preco
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

// podemos iterar sobre as propriedades de um objeto

for (let chave in p1) {
  console.log(chave);
}
