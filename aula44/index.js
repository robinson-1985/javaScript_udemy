// Tratando e lançando erros com try, catch e throw

// try {
//     console.log(naoExisto);
// } catch (error) {
//     console.log('naoExisto não existe.');
//     console.log(error);
// }

// lembrando que os erros não é seguro mostrar para o usuário, pois pode conter informações sensíveis

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('x e y precisam ser números.');
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma('1', 2)); // vai dar erro
} catch (error) {
  // console.log(error);
  console.log('Alguma coisa mais amigável para o usuário.');
}
