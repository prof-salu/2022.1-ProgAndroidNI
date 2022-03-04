module.exports = class Conta {
  constructor() {
    this._agencia;
    this._numero;
    this._saldo = 1000;
  }

  get agencia() {
    return this._agencia;
  }

  set agencia(agencia) {
    this._agencia = agencia;
  }

  get numero() {
    return this._numero;
  }

  set numero(numero) {
    this._numero = numero;
  }

  get saldo() {
    return this._saldo;
  }

  saca(valor) {
    if (valor > 0 && valor < this._saldo) {
      this._saldo = this._saldo - valor;
      return true;
    } else {
      return false;
    }
  }

  deposita(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  transfere(valor, conta) {
    if (this.saca(valor)) {
      conta.deposita(valor);
    }
  }

  exibeDados() {
    console.log("Agencia: " + this._agencia);
    console.log("Numero: " + this._numero);
    console.log("Saldo: " + this._saldo);
    console.log();
  }

  toString() {
    return (
      "[Agencia: " +
      this._agencia +
      ", Numero: " +
      this._numero +
      ", Saldo: " +
      this._saldo +
      "]"
    );
  }
};
