// Functions
// Em JS você pode criar funções de duas formas: com e sem retorno de valor
// A função é um bloco de código que pode ser executado várias vezes

/* function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

saudacao('Lucas');
saudacao('João');
saudacao('Maria');*/

// Função com retorno

/* function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Lucas');
console.log(variavel); */

// Função com mais de um parâmetro

/* function soma(x, y) {
    const resultado = x + y;
    return x + y;
}

console.log(soma(2, 2));
console.log(soma(3, 3));
console.log(soma(4, 4)); */

// As funções são protegidas, ou seja, não é possível acessar uma variável criada dentro de uma função fora dela. Para isto, é necessário retornar o valor da variável.

/* function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2, 2);
console.log(resultado); */

// Ao colocar o return dentro de um bloco de código, o JS entende que a função terminou e não executa o restante do código.

/* function soma(x, y) {
    const resultado = x + y;
    return resultado;
    console.log('Oi'); // Não será executado
}

const resultado = soma(2, 2);
console.log(resultado); */

// se não enviar os dados para a função, ela retornará NaN (Not a Number)

/* function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma();
console.log(resultado)*/

// O JS entende que é uma concatenação de strings, pois não foi informado o tipo de dado

/*function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma('Carlos', ' Lucas');
console.log(resultado) */

// Função declarando parâmetros padrão

/* function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2); // Se não informar o segundo parâmetro, ele assumirá o valor padrão
console.log(resultado)*/

// Função anônima (Toda vez que a minha variável receber uma função, ela se torna uma função anônima e precisa ser colocado o ponto e vírgula no final)

/*const raiz = function(n) { 
    return n ** 0.5;
};

console.log(raiz(9)); 
console.log(raiz(16));
console.log(raiz(25)); */

// Arrow function (Maneira moderna de criar funções)

/*const raiz = n => {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));*/

// Arrow function com retorno implícito (A função pode ser resumida em uma linha)

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
