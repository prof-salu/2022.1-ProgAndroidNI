let Conta = require("./Conta");

module.exports = class ContaCorrente extends Conta {
  saca(valor) {
    super.saca(valor + 0.1);
  }
};
