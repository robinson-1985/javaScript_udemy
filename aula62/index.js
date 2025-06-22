// const nomes = new Array('Eduardo', 'Maria', 'Joana');

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes[2] = 'João';
// delete nomes[2];
// console.log(nomes);

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = nomes;
// novo.pop(); // remove o último elemento
// console.log(nomes);

// spread operator: são usados para copiar arrays ou objetos

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes]; // cria uma cópia do array

// novo.pop(); // remove o último elemento
// console.log(nomes);
// console.log(novo);

// tamanho do array

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// console.log(nomes.length); // não é um método, e sim um atributo

// remover elementos do array

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.pop(); // remove o último elemento
// console.log(nomes);

// posso retornar o elemento removido

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.pop(); // remove o último elemento e retorna o elemento removido
// console.log(nomes, removido); // imprime o array atualizado e o elemento removido

// e temos o shift, que remove o primeiro elemento do array

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const removido = nomes.shift(); // remove o primeiro elemento e retorna o elemento removido
// console.log(nomes, removido); // imprime o array atualizado e o elemento removido

// push: adiciona elementos no final ou no início do array

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.push('Louis'); // adiciona o elemento 'Louis' no final do array
// console.log(nomes); // adiciona o elemento 0 no final do array

// unshift: adiciona um elemento no início do array (atenção, não é o mesmo que shift)

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.unshift('Luiz'); // adiciona o elemento 'Luiz' no início do array
// nomes.unshift('Luana'); // adiciona o elemento 'Luana' no início do array
// console.log(nomes); // imprime o array atualizado

// slice: fatia o array

// const nomes = ['Eduardo', 'Maria', 'Joana', 'Luiz', 'Luana', 'João'];
// const novo = nomes.slice(0, 3); // fatia o array do índice 1 até o índice 3 (não inclui o índice 3)
// const novo1 = nomes.slice(0, -1); // fatia o array do índice 1 até o último elemento (não inclui o último elemento)
// console.log(novo, novo1);

// converter  string em array

// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' '); // divide a string em um array de strings, usando o espaço como separador
// console.log(nomes);

// converter array em string utilizando join (unir)

const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' '); // junta os elementos do array em uma string, usando o espaço como separador
console.log(nome);
