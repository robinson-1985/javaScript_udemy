/* Método splice: é usado para adicionar ou remover elementos de um array em uma
 posição específica.*/

// const nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
// const removidos = nomes.splice(3, 2);
// console.log(nomes, removidos);

// podemos utilizar indices negativos para remover elementos do final do array

// const nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
// const removidos = nomes.splice(-2, 2);
// console.log(nomes, removidos);

// utilizar o Number.MAX_Value para remover todos os elementos a partir de um índice específico

// const nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);

// podemos adicionar elementos ao array utilizando o splice

// const nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
// const removidos = nomes.splice(3, 1, 'Lucas', 'Fernanda');
// console.log(nomes, removidos);

// podemos simular o pop utilizando o splice

// const nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
// const removidos = nomes.splice(-1, 1); // remove o último elemento do array
// console.log(nomes, removidos);

// podemos simular o shift utilizando o splice

// const nomes = ['Maria', 'João', 'José', 'Ana', 'Pedro'];
// const removidos = nomes.splice(0,1); // remove o primeiro elemento do array
// console.log(nomes, removidos);

// podemos simular o push utilizando o splice

// const nomes = ['Maria', 'João', 'José', 'Ana', 'Pedro'];
// nomes.splice(nomes.length,0, 'Robinson', 'Louis', 'Andersen'); // adiciona o elemento no final do array
// console.log(nomes);

// podemos simular o unshift utilizando o splice

const nomes = ['Maria', 'João', 'José', 'Ana', 'Pedro'];
nomes.splice(0, 0, 'Robinson', 'Louis', 'Andersen'); // adiciona o elemento no início do array
console.log(nomes);
