/* Polimorfismo: uma mesma coisa pode ter comportamentos diferentes dependendo
do contexto de como ela foi criada*/

// Superclasse (classe mãe)

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(
  `Agência/Conta: ${this.agencia}/${this.conta} | ` +
  `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

// Herança
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

// Polimorfismo: o método sacar foi sobrescrito na classe filha
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0,  100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log(cc);

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);

console.log(cp);
