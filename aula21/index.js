/*
Operadores de comparação
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (valor) * Não é recomendado usar
=== igualdade estrita (valor e tipo)
!= diferente (valor) * Não é recomendado usar
!== diferente estrito (valor e tipo)
*/

// comparação de valores maior que

// const comp = 10 > 5;
// console.log(comp);

// comparação de maior que ou igual a

// const comp = 10 >= 5;
// console.log(comp);

// comparação de menor que

// const comp = 10 < 11;
// console.log(comp);

// comparação de menor ou igual a

// const comp = 10 <= 11;
// console.log(comp);

// comparação de igualdade (valor). O JS converte o tipo de dado para fazer a comparação, o que pode gerar problemas.

// const num1 = 10; // number
// const num2 = '10'; // string
// const comp = num1 == num2;
// console.log(comp);

// comparação de igualdade estrita (valor e tipo). O JS não converte o tipo de dado para fazer a comparação, o que evita problemas.

// const num1 = 10; // number
// const num2 = '10'; // string
// const comp = num1 === num2;
// console.log(comp);

// comparação de diferença (valor). O JS converte o tipo de dado para fazer a comparação, o que pode gerar problemas.

// const num1 = 10; // number
// const num2 = '10'; // string
// const comp = num1 != num2;
// console.log(comp);

// comparação de diferença estrita (valor e tipo). O JS não converte o tipo de dado para fazer a comparação, o que evita problemas.

const num1 = 10; // number
const num2 = '10'; // string
const comp = num1 !== num2;
console.log(comp);
