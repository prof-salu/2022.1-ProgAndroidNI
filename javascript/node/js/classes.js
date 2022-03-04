let Conta = require("./Conta");
let cc1 = new Conta();
let cc2 = new Conta();

cc1.agencia = 1234;
cc1.numero = 5678;
//cc1.saldo = 500;

cc2.agencia = 7777;
cc2.numero = 8888;

cc1.exibeDados();
cc2.exibeDados();


console.log('CC1: ' + cc1.toString());

cc1.saca(100);
console.log('CC1: ' + cc1.toString());

cc1.deposita(300);
console.log('CC1: ' + cc1.toString());

cc1.transfere(500, cc2);
console.log('CC1: ' + cc1.toString());
console.log('CC2: ' + cc2.toString());
