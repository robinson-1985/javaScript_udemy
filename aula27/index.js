// Operação ternária: é uma forma de escrever uma condição de forma mais resumida
// Sintaxe: (condição) ? 'valor para verdadeiro' : 'valor para falso';

// Exemplo de condição comum

// const pontuacaoUsuario = 1000;
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

// Vamos reescrever a condição acima utilizando a operação ternária

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
