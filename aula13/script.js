// Aprendendo mais sobre strings. As strings são indexadas, ou seja, cada caractere tem um índice.

// let umaString = "Um 'rato' roeu a roupa do rei de Roma.";
//               0123456789
let umaString = "Um rato roeu a roupa do rei de Roma.";
console.log(umaString);

// posso por exemplo acessar um caractere específico da string
console.log(umaString[4]); // t

// posso acessar também utilizando o método charAt
console.log(umaString.charAt(6)); // e

// posso concatenar strings (existe diversar formas de fazer isso):
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

// posso saber o indice de um caractere específico
console.log(umaString.indexOf('a')); // mostra o primiero índice da letra a
console.log(umaString.indexOf('o', 3)); // mostra o índice da letra o a partir do índice 3
console.log(umaString.lastIndexOf('o')); // mostra o último índice da letra o

// expresssões regulares
console.log(umaString.match(/[a-z]/g)); // [ 'm', 't', 'e', 'x', 't', 'o' ]
console.log(umaString.search(/x/)); // mostra o índice do caractere x
console.log(umaString.replace('Um', 'Outro')); // mudou o Um por Outro 
console.log(umaString.replace(/r/g, '#')); // muda a letra r por #
console.log(umaString.length); // mostra o tamanho da string

// posso dividir uma string em um array (fatiar)
console.log(umaString.slice(2, 7)); // mostra do índice 2 ao 7
console.log(umaString.slice(-5)); // mostra os 5 últimos caracteres

//console.log(umaString.length -3);
console.log(umaString.slice(-5, -1)); // mostra do índice -5 ao -1
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // é mais fácil utilizar o slice

// posso dividir uma string em um array (fatiar) utilizando o método split
console.log(umaString.split(' ')); // fatia a string separando por espaços
console.log(umaString.split('r')); // fatia a string separando por r e retirando essa letra
console.log(umaString.split(' ', 3)); // fatia a string separando por espaços e limitando a 3

// posso transformar uma string em maiúscula
console.log(umaString.toUpperCase());

// posso transformar uma string em minúscula
console.log(umaString.toLowerCase());
