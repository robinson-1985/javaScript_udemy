/*
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Pelo menos uma expressão precisa ser verdadeira para retornar true
FALSY - Valores que são avaliados em contextos booleanos e retornam false
*false
0
'' "" ``
null / undefined
NaN
*/

// console.log('Robinson' && 0 && 'Maria'); // 0 - retorna o valor falso

// console.log('Robinson' && '' && 'Maria'); // '' - retorna o valor falso (vazio)
// console.log('Robinson' && NaN && 'Maria'); // NaN - retorna o valor falso
// console.log('Robinson' && undefined && 'Maria'); // undefined - retorna o valor falso

// as funções de curto-circuito auxiliam a ter um código mais limpo e legível: AND (&&)

// function falaOi() {
//     return 'Oi';
// }

// const vaiExecutar = false;

// console.log(vaiExecutar && falaOi()); // false - não executa a função

// function falaOi() {
//   return 'Oi';
// }

// let vaiExecutar = undefined;

// console.log(vaiExecutar && falaOi()); // undefined - não executa a função

// as funções de curto-circuito auxiliam a ter um código mais limpo e legível: OR (||)

// console.log(0 || false || null || 'Robinson' || true); // Robinson - retorna o primeiro valor verdadeiro

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto'; // vermelho - retorna o valor verdadeiro

// console.log(corPadrao); // vermelho

const a = 0;
const b = null;
const c = 'false'; 
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // false - retorna o primeiro valor falso
// retorna o 'false' porque é uma string e não um valor booleano
