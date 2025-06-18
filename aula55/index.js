/* Funções imediatas ou Funções auto-invocadas (IIFE -> Immediately Invoked 
Function Expression): são  funções que são definidas e executadas imediatamente, 
sem a necessidade de serem chamadas posteriormente.
Elas são frequentemente usadas para criar escopos isolados, evitando a poluição do 
escopo global e protegendo variáveis de serem acessadas externamente.
Elas são definidas entre parênteses e seguidas por outro parêntese para a execução imediata.
*/

// Essa funçao é definida e executada imediatamente

// function qualquerCoisa() {
//   console.log('Qualquer coisa');
// }

// qualquerCoisa();

// Porém, podemos invocar a função imediatamente, sem precisar chamá-la depois:

(function (idade, peso, altura) {
  // Aqui dentro, podemos definir variáveis e funções que não serão acessíveis fora deste escopo
  const sobrenome = 'Mariano';
  function criaNome(nome) {
    return nome + ' ' + sobrenome + ', tudo bem?';
  }
  function falaNome() {
    console.log(criaNome('João'));
  }

  falaNome(); // Chama a função dentro do escopo da IIFE
  console.log(`Idade: ${idade}, Peso: ${peso}, Altura: ${altura}`);
  // Aqui, podemos acessar as variáveis e funções definidas dentro da IIFE

})(40, 80, 1.80); // Passando parâmetros para a função imediatamente invocada

