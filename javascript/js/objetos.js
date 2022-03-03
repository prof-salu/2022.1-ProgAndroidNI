let pessoa = {
    'nome': 'Carlos',
    'sobrenome': 'Pereira',
    'idade': 44,
    'profissao': 'Soldador' 
}

console.log(pessoa);

//DOT notation
console.log('Nome: ' + pessoa.nome);
console.log('Sobrenome: ' + pessoa.sobrenome);
console.log('Idade: ' + pessoa.idade);
console.log('Profissão: ' + pessoa.profissao);

//Nova propriedade
pessoa.naturalidade = 'Nova Iguaçu';
console.log('Natural: ' + pessoa.naturalidade);

//Bracket notation
pessoa['curso'] = 'Gestão de TI';
console.log('Curso: ' + pessoa.curso);


