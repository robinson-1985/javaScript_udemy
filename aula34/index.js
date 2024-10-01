// For clássico - Geralmente com iteráveis (array ou strings) (Estruturas de repetição)

// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// Vamos criar uma estrutura de repetição para repetir o console.log acima

// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`);
// }

// Posso começar o contador de qualquer número

// for (let i = 400; i <= 500; i++) {
//   console.log(`Linha ${i}`);
// }

// Posso incrementar o contador de qualquer número

// for (let i = 400; i <= 500; i += 10) { // i += 10 é o mesmo que i = i + 10
//   console.log(`Linha ${i}`);
// }

// Posso decrementar o contador

// for (let i = 500; i >= 400; i -= 10) { // i -= 10 é o mesmo que i = i - 10
//   console.log(`Linha ${i}`);
// }

// Exemplo de número par e ímpar de 0 a 10

// for (let i = 0; i <= 10; i++) {
//   const par = i % 2 === 0 ? 'par' : 'ímpar';
//   console.log(`O número ${i} é ${par}`);
// }

// Percorrer um array

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia'];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
