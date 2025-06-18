/* Funções de callback são funções passadas como argumentos para outras funções, 
 permitindo que você execute código após a conclusão de uma operação assíncrona 
ou em resposta a um evento. */

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

// Exemplo de funções de callback com setTimeout
function f1(callback) {
  setTimeout(function(){
    console.log('f1');
    if (callback) callback(); // Chama o callback se ele existir
  }, rand());  

}

function f2(callback) {
  setTimeout(function(){
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function(){
    console.log('f3');
    if (callback) callback(); 
  }, rand());
}

// Iniciando o encadeamento de callbacks
// Chamando a função f1 e passando f1Callback como callback
f1(f1Callback);

// Encadeamento de callbacks
function f1Callback() {
  f2(f2Callback);
}
// Continuando o encadeamento de callbacks
function f2Callback() {
  f3(f3Callback);
}
// Finalizando o encadeamento de callbacks
function f3Callback() {
  console.log('Olá mundo!');
}
