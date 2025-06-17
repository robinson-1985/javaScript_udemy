// Escopo léxico 

// const nome = 'Robinson'

// function falaNome() {
//   console.log(nome);
//  }

// falaNome();

// variável nome definida fora da função falaNome, mas acessada dentro dela.
// Se a variável não for definida dentro da função, ela será buscada no escopo pai.
// Se não for encontrada, será buscada no escopo global.
// Escopo léxico é a forma como o JavaScript organiza o escopo das variáveis.

// const nome = 'Robinson'

// function falaNome() {
//   const nome = 'Dias';
//   console.log(nome);
// }

// function usaFalaNome() {
//   falaNome();
// }

// usaFalaNome();

// vamos ver como funciona o escopo léxico em funções aninhadas

const nome = 'Robinson';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Dias';
  falaNome(); // Aqui, a função falaNome acessa a variável nome do escopo global, que é 'Robinson'.
  // Se a função falaNome fosse definida dentro de usaFalaNome, ela acessaria o nome 'Dias'.
  // Isso demonstra o conceito de escopo léxico, onde a função falaNome "lembra" do escopo onde foi definida.
  // Portanto, mesmo que exista uma variável nome dentro de usaFalaNome, a função falaNome ainda acessa a variável nome do escopo global.
}
  
usaFalaNome();