// Let vs Var - Primeira diferença

// Let não permite redeclaração de variáveis, o que é permitido com var.

var nome = 'João';
var nome = 'Otávio'; // Não gera erro, o que causa problemas em códigos grandes.

console.log(nome); 

nome = 'João'; // Gera erro, pois não podemos redeclarar uma variável com let.

console.log(nome);
