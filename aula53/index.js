// Closures são funções que têm acesso ao escopo de uma função externa, mesmo após a função externa ter sido executada.
// Isso permite que a função interna "lembre" do ambiente em que foi criada, mesmo quando é chamada fora desse ambiente.

// function retornaFuncao() {
//   const nome = 'Robinson';
//   return function() {
//     return nome;
//   };
// }

// const funcao = retornaFuncao();
// console.log(funcao); 

// função anônima

// // Global
// function retornaFuncao() { // closure
//   const nome = 'Robinson';
//   return function() {
//     return nome;
//   };
// }

// const funcao = retornaFuncao();
// console.dir(funcao); 

// Closure é uma função que "lembra" do escopo onde foi criada, mesmo quando é chamada fora desse escopo.
// Exemplo de closure duplo:
function retornaFuncao(nome) { 
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao('Robinson');
const funcao2 = retornaFuncao('Dias');
console.dir(funcao); 
console.dir(funcao2);

console.log(funcao(), funcao2()); // Chama as funções retornadas, que acessam o escopo da função externa
