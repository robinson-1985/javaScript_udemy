/*
Arrays: lembre-se que ele aceita qq tipo de dado, mas é recomendado que seja do mesmo tipo
Array é um Objeto especial que contém uma lista de elementos, que podem ser de qualquer tipo de dado, ou seja, ele é indexado.
Os Arrays são indexados, ou seja, cada elemento tem um índice, que começa em 0.
*/

// Exemplo 1         0       1       2       3       4       5
const alunos = ['João', 'Maria', 'José', 'Pedro', 'Ana', 'Carla'];
// console.log(alunos); // acessa o índice completo
// console.log(alunos[0]);
// console.log(alunos[2]);

// Posso editar também o valor de um índice:
//alunos[2] = 'Eduardo';
//alunos[6] = 'Luiz'; // Adiciona um novo índice
//console.log(alunos);

// Para saber o tamanho do array, usamos o length
//console.log(alunos.length);

//Podemos adicionar um novo elemento no final do array usando o length
// alunos[alunos.length] = 'Luiz';
// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Felipe';
// console.log(alunos);

// Mas, tem como add de forma melhor um novo elemento no final do array usando o método push()
// alunos.push('Mariana');
// alunos.push('Mário');
// alunos.push('Carolina');
// console.log(alunos);

// Podemos add um novo elemento no início do array usando o método unshift()
// alunos.unshift('Lucas'); // Sempre lembre-se que o debaixo vai para o indice 0
// alunos.unshift('Lúcia'); // Lúcia vai para o índice 0 e Lucas para o índice 1
// alunos.unshift('Larissa'); // Larissa vai para o índice 0, Lúcia para o índice 1 e Lucas para o índice 2
// console.log(alunos);

// Podemos remover o último elemento do array usando o método pop()
// alunos.pop(); // Remove o último elemento
// console.log(alunos);

// Podemos remover o último elemento do array usando o método po() com uma variável
// const removido = alunos.pop(); // Remove o último elemento
// console.log(removido); // Retorna o elemento removido
// console.log(alunos); // Retorna o array sem o último elemento

// Podemos remover o primeiro elemento do array usando o método shift()
// const removido1 = alunos.shift(); // Remove o primeiro elemento
// console.log(removido1); // Retorna o elemento removido
// console.log(alunos); // Retorna o array sem o primeiro elemento

// Podemos remover um índice específico do array usando o método delete
// delete alunos[1]; // Remove o índice 1
// console.log(alunos); // Retorna o array com o índice 1 removido

// Podemos acessar no javascript um indice que não existe
// console.log(alunos[50]); // Retorna undefined

// Podemos fatiar um array usando o método slice() e pode ser positivo ou negativo
// alunos.push('Luiz'); // Adiciona um novo elemento no array
// alunos.push('Luiza'); // Adiciona um novo elemento no array
// console.log(alunos.slice(0, 3)); // Retorna os elementos do índice 0 ao 2
// console.log(alunos.slice(0, -2)); // Retorna os elementos do índice 0 ao penúltimo

// Podemos acessar no javascript o tipo de dado de um array
console.log(typeof alunos); // Retorna object
console.log(alunos instanceof Array); // Retorna true
