// Não pode utilizar uma palavra reservada
// Não pode começar com número
// Não pode conter espaços em branco ou hífens
// São case sensitives

// Uma variável declarada com let pode ser atualizada dentro de seu escopo. 
// Diferente de var, no entanto, uma variável let não pode ser declarada novamente dentro de seu escopo.

let nome = 'Ana';
let Nome = 'Carlos';

console.log(nome);
console.log(Nome);

let primNome = 'Salu', ultNome = 'Oliveira';

console.log(primNome + ' ' + ultNome);

// Declarações com var tem escopo global ou escopo de função/local.
// O escopo é global quando uma variável var é declarada fora de uma função. 
//Isso significa que qualquer variável que seja declarada com var fora de um bloco de função pode ser utilizada na janela inteira.

var disciplina = 'Programacao Android';
console.log(disciplina);
var disciplina = 'Java I';
console.log(disciplina);

let curso = 'Sistemas de Informação';
console.log(curso);
let curso = 'Análise de Sistemas'; //erro
console.log(curso);