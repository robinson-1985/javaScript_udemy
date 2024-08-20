/* 
Operadores aritméticos
+ Adição / Concatenação
- Subtração
* Multiplicação
/ Divisão
** Potenciação
% Resto da divisão

Precedência de operadores
1º - ()
2º - **
3º - * / %
4º - + -
*/

const num1 = 2;
const num2 = 10;
const num3 = 10;
console.log(num1 + num2); 
console.log(num1 - num2); 
console.log(num1 * num2); 
console.log(num1 / num2); 
console.log(num1 ** num2); 
console.log(num1 % num2); 
console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);

// vamos incrementar uma variável para entender melhor a precedência
// Jamais utilizar const para variáveis que serão incrementadas

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

// Observe como utilizamos o operador de incremento
let contador1 = 1;
contador1++; // 2
console.log(contador1); // 2

// Também podemos incrementar de forma diferente
let contador2 = 10;
++contador2; // 11
++contador2; // 12
++contador2; // 13
++contador2; // 14
console.log(contador2);

// Também podemos decrementar
let contador3 = 10;
contador3--; // 9
contador3--; // 8
contador3--; // 7
contador3--; // 6
console.log(contador3);

// Também podemos decrementar de forma diferente
let contador4 = 10;
--contador4; // 9
--contador4; // 8
--contador4; // 7
--contador4; // 6
console.log(contador4);

// Podemos incrementar ou decrementar mais de um valor
const passo = 2;
let contador5 = 0;
contador5 = contador5 + passo; // 2
console.log(contador5);
contador5 = contador5 + passo; // 4
console.log(contador5);
contador5 = contador5 + passo; // 6
console.log(contador5);

// podemos simplificar a operação acima
let contador6 = 0;
contador6 += 2; // 2 é igual a contador6 = contador6 + 2
contador6 += 2; // 4 é igual a contador6 = contador6 + 2
contador6 += 2; // 6 é igual a contador6 = contador6 + 2
console.log(contador6); 

// Operador de atribuição de multiplicação
let contador7 = 2;
contador7 *= 2; // 4 é igual a contador7 = contador7 * 2
contador7 *= 2; // 8 é igual a contador7 = contador7 * 2
contador7 *= 2; // 16 é igual a contador7 = contador7 * 2
console.log(contador7);

// Operador de atribuição de potenciação
let contador8 = 2;
contador8 **= 10; // 1024 é igual a contador8 = contador8 ** 10

// NaN - Not a Number parseInt() parseFloat() Number()
const num4 = 10;
const num5 = parseInt('5'); // converte para número inteiro
console.log(num4 + num5); // 15

const num6 = parseFloat('5.2'); // converte para número decimal
console.log(num4 + num6); // 15.2

const num7 = Number('5.2'); // converte para número decimal
console.log(num4 + num7); // 15.2
