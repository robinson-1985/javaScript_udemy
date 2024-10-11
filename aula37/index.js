// For of - estrutura de repetição

//for clássico - geralmente com iteráveis (array ou strings)

// const nomes = ['Lucas', 'Otávio', 'Miranda'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nomes[i]);
// }

// for in - Retorna o índice ou chave (string, array ou objetos)

// const nomes = ['Lucas', 'Otávio', 'Miranda'];

// for (let i in nomes) {
//     console.log(nomes[i]);
// }

// for of - Retorna o valor em si (iteráveis, array ou strings)

const nomes = ['Lucas', 'Otávio', 'Miranda'];

for (let valor of nomes) {
    console.log(valor);
}

// console.log('-------------------');

// // forEach - lê os valores do objeto

// nomes.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });
