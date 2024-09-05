/* Objects: Objeto é uma coleção de dados e/ou funcionalidades relacionadas (que 
geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades 
e métodos quando estão dentro de objetos). */

/* Exemplo de objeto

const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Santos',
    idade: 25,
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade); */

/* Função dentro de um objeto

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criaPessoa('Matheus', 'Santos', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
const pessoa3 = criaPessoa('João', 'Silva', 35);
const pessoa4 = criaPessoa('Luiz', 'Henrique', 45);
const pessoa5 = criaPessoa('Lucas', 'Santos', 30);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);
console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade); */

/* Posso utilizar a função dentro do objeto dessa forma também

function criaPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Matheus', 'Santos', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
const pessoa3 = criaPessoa('João', 'Silva', 35);
const pessoa4 = criaPessoa('Luiz', 'Henrique', 45);
const pessoa5 = criaPessoa('Lucas', 'Santos', 30);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);
console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade);*/

// Posso criar um objeto criando uma variável e atribuindo um objeto a ela

const pessoa1 = { 
    nome: 'Matheus',
    sobrenome: 'Santos',
    idade: 25,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala(); // Chamada da função fala
pessoa1.incrementaIdade(); // Chamada da função incrementaIdade
pessoa1.fala(); // Chamada da função fala
pessoa1.incrementaIdade(); // Chamada da função incrementaIdade
pessoa1.fala(); // Chamada da função fala
pessoa1.incrementaIdade(); // Chamada da função incrementaIdade
pessoa1.fala(); // Chamada da função fala
