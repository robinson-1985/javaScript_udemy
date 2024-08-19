/* Exercícios - Const e Let
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
let anoAtual = 2024;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} naceu em ${anoNascimento},e tem ${idade} anos e pesa ${peso} kg e o seu IMC é de ${indiceMassaCorporal}`);
