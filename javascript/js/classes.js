let Conta = require("./Conta");
let ContaCorrente = require("./ContaCorrente");
let c1 = new Conta();
let c2 = new Conta();
let cc3 = new ContaCorrente();

c1.agencia = 1234;
c1.numero = 5678;
//cc1.saldo = 500;

c2.agencia = 7777;
c2.numero = 8888;

cc3.agencia = 1234;
cc3.numero = 9988;

c1.exibeDados();
c2.exibeDados();
cc3.exibeDados();

console.log("C1: " + c1.toString());

c1.saca(100);
cc3.saca(100);
console.log("C1: " + c1.toString());
console.log("CC3: " + cc3.toString());

c1.deposita(300);
console.log("C1: " + c1.toString());

c1.transfere(500, c2);
console.log("C1: " + c1.toString());
console.log("C2: " + c2.toString());
