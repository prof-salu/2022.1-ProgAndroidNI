import React, {useState} from 'react';
import AS_Cursos from '@react-native-async-storage/async-storage'; //expo install @react-native-async-storage/async-storage
import AS_Alunos from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[curso, setCurso] = useState('');

  const[matricula, setMatricula] = useState('');
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  //###################################################
  async function gravarCurso(chave, valor){
    AS_Cursos.setItem(chave, valor);
  }

  async function buscarCurso(chave){
    const valor = await AS_Cursos.getItem(chave);
    setCurso(valor);
  }

  async function removerCurso(chave){
    AS_Cursos.removeItem(chave);
  }

  async function limparCursos(){
    AS_Cursos.clear();
  }
//###################################################
  async function gravarAluno(chave, inputMatr, inputNome, inputEmail){
    //Gerando o objeto ALUNO
    const aluno = { matricula: inputMatr, 
                    nome: inputNome, 
                    email: inputEmail};
    //SERIALIZANDO o ALUNO
    const alunoJSON = JSON.stringify(aluno);
    //GRAVANDO NO ARQUIVO
    await AS_Alunos.setItem(chave, alunoJSON);
  }

  async function buscarAluno(chave){
    //RECUPERA O DADO DO ARQUIVO (SERIALIZADO)
    const alunoJSON = await AS_Alunos.getItem(chave);
    //DESERIALIZANDO OS DADOS
    setMatricula(JSON.parse(alunoJSON).matricula);
    setNome(JSON.parse(alunoJSON).nome);
    setEmail(JSON.parse(alunoJSON).email);
  }
//###################################################
  gravarCurso('1', 'Sistemas de Informação');
  gravarCurso('2', 'Adm. de Banco de Dados');
  gravarCurso('3', 'Analise de Sistemas');

  //limparCursos();
  //removerCurso('3');

  buscarCurso('1');
//###################################################
  gravarAluno('1', '20221234', 'Carlos Pereira', 'kaka@gmail.com');
  buscarAluno('1');

  return (
    <View style={styles.container}>
     <Text>Curso de TI</Text>
      <Text>Matrícula: {matricula}</Text>
      <Text>Nome: {nome}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Curso: {curso}</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});