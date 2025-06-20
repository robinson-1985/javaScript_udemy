/* Funções geradoras são funções que podem ser pausadas e retomadas
Elas são definidas com a palavra-chave function* e utilizam a palavra-chave yield para 
pausar a execução. Elas são úteis para criar iteradores personalizados.*/

// function* geradora1() {
//   // Qualquer código
//   yield 'Valor 1';
//   // Qualquer código
//   yield 'Valor 2';
//   // Qualquer código
//   yield 'Valor 3';
// }

// const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next()); // retorna undefined porque não há mais valores a serem gerados

// Podemos iterar sobre uma função geradora usando o for...of
// function* geradora2() {
//   yield 'Valor 1';
//   yield 'Valor 2';
//   yield 'Valor 3';
// }

// const g2 = geradora2();
// for (let valor of g2) {
//   console.log(valor);
// } 

// Utilizando o Contador

// function* gerador3() {
//   let count = 0;
//   while (true) {
//     yield count;
//     count++;
//   }
// }

// const contador = gerador3();
// console.log(contador.next().value);
// console.log(contador.next().value);
// console.log(contador.next().value); 
// // Podemos usar o contador em um loop

// Delegação de geradores

// function* gerador4() {
//   yield 0;
//   yield 1;
//   yield 2;
// }

// function* gerador5() {
//   yield* gerador4(); // Delegando a execução para gerador4
//   yield 3;
//   yield 4;
//   yield 5;
// }

// const g5 = gerador5();
// for (let valor of g5) {
//   console.log(valor);
// }

// Geradores com parâmetros

function* gerador6() {
  yield function(){
    console.log('Vim do y1');
  };

  yield function(){
    console.log('Vim do return');
  };
  // ...

  yield function(){
    console.log('Vim do y3');
  };
}

const g6 = gerador6();
const func1 = g6.next().value;
const func2 = g6.next().value;
const func3 = g6.next().value;

func1(); // Executa a função do primeiro yield
func2(); // Executa a função do segundo yield 
func3(); // Executa a função do terceiro yield
