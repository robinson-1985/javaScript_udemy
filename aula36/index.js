// For in - estrutura de repetição

// forma clássica:

// const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia'];
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// forma com for in: lê os índices ou chaves do objeto

// const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia'];

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// Agora vamos criar um objeto:

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// se não sabemos qual propriedade pegar, então podemos usar:

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// para simplificar utilizamos o for in:

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
