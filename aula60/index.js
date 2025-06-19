// Função recursiva: serve para chamar a si mesma

/* Crio uma função que recebe um parametro max.
   Se max for maior que 10, a função retorna e não faz mais nada.*/

// function recursiva(max) {
//   if (max >= 10) return;
//   max++; // Incrementa o valor de max
//   console.log(max); // Exibe o valor de max no console
//   recursiva(max);
// }

// recursiva(0); // do menor valor possível para maior valor possível

// Agora abaixo ocorre o contrário, ou seja, a função recursiva

function recursiva(max) {
  console.log(max); // Exibe o valor de max no console
  if (max >= 10) return;
  max++; // Incrementa o valor de max
  recursiva(max);
}

recursiva(0)
