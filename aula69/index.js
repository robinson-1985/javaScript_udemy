//forEach serve para iterar sobre os valores de um array
// e executar uma função para cada elemento do array.
// forEach não retorna nada, apenas executa a função para cada elemento.
// É útil quando você quer realizar uma ação para cada elemento, mas não precisa de um novo array.
// Exemplo: somar todos os valores de um array

const a1 = [10, 20, 30];
let total = 0;
a1.forEach(valor => {
  total += valor;
});

console.log(total);
