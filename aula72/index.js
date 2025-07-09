// Getters e Setters

// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;
  
//   let estoquePrivado = estoque; // Variável privada
//   Object.defineProperty(this, 'estoque', {
//     enumerable: true,
//     configurable: true, // Pode reconfigurar o valor de estoque
//     get: function() {
//       return estoquePrivado;
//     },
//     set: function(valor) {
//       if (typeof valor !== 'number') {
//         throw new TypeError('Mensagem');
//       }
      
//       estoquePrivado = valor; // Atualiza o estoque privado
//     }
//   });
// }

// // funtio factory para criar um novo produto

// function criarProduto(nome) {
//   return {
//     get nome() {
//       return nome;
//     },
//     set nome(valor) {
//       nome = valor;
//     }
//   }
// }

// const p1 = new Produto('Camiseta', 20, 3);
// // console.log(p1);
// p1.estoque = 'jajajaja'; // Atualiza o estoque através do setter
// console.log(p1.estoque); // Acessa o estoque através do getter


// function factory para criar um novo produto

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  
  let estoquePrivado = estoque; // Variável privada
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true, // Pode reconfigurar o valor de estoque
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem');
      }
      
      estoquePrivado = valor; // Atualiza o estoque privado
    }
  });
}

function criaProduto(nome) { // Função factory
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa.', ''); // Exemplo de manipulação
      nome = valor;
    }
  };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.'; // Atualiza o nome através do setter
console.log(p2.nome); // Acessa o nome através do getter
