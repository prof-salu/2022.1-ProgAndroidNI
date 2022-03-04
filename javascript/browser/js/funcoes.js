function saudacao(){
    console.log('Bem-vindos a aula de Desenvolvimento Android');
}

function saudacaoDisciplina(disciplina){
    console.log('Bem-vindos a aula de ' + disciplina);
}

function calculaMedia(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

saudacao();
saudacaoDisciplina('Programação II');

console.log(calculaMedia(7, 6, 6));
console.log(calculaMedia(7, 6, 6).toFixed(2));
console.log(calculaMedia(7, 6, 6).toFixed(1));