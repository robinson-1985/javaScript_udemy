// if, else if e else - condicionais

// const hora = 10;

// if (hora <= 12) {
//     console.log('Bom dia!');
// }

/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// eu posso ter vários else ifs na checagem
// só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else

// const hora = 10;

// if (hora >= 0 && hora <= 11) {
//     console.log('Bom dia!');
// } else if (hora >= 12 && hora <= 17) {
//     console.log('Boa tarde!');
// } else if (hora >= 18 && hora <= 23) {
//     console.log('Boa noite!');
// } else {
//     console.log('Olá');
// }

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
