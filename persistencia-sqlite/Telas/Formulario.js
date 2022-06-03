import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

import { LivroContext } from '../Componentes/EnviaLivro';

export default function Formulario() {
  const navigation = useNavigation();

  const {livro} = useContext(LivroContext);

  const db = SQLite.openDatabase('db.MainDB');
  
  const [id, setId] = useState('');
  const [inputTitulo, setTitulo] = useState('');
  const [inputAssunto, setAssunto] = useState('');
  const [inputEditora, setEditora] = useState('');  
  const [inputAutor, setAutor] = useState('');

  useEffect(() => {
    setId(livro.id);
    if(livro.id != ''){
      setTitulo(livro.titulo);
      setAssunto(livro.assunto);
      setEditora(livro.editora);
      setAutor(livro.autor);
    }else{
      setTitulo('');
      setAssunto('');
      setEditora('');
      setAutor('');
    }
  }, []);

  const setData = async () => {
      if (inputTitulo == '') {
          Alert.alert('Warning!', 'Please write your data.')
      } else {
          await db.transaction(async (tx) => {
            await tx.executeSql(
                "INSERT INTO LIVRO (TITULO, ASSUNTO, EDITORA, AUTOR) VALUES (?,?,?,?)",
                [inputTitulo, inputAssunto, inputEditora, inputAutor],
                (tx, results) => {
                  console.log('Resultado', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert('Dados gravados com sucesso....');
                  } else Alert.alert('Error....');
                }
            );
        })
        navigation.navigate('Home');            
      }
    }

  const deleteData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM LIVRO WHERE ID=?',
        [id],
        (tx, results) => {
          console.log('Resultado: ', results.rowsAffected);
          if(results.rowsAffected > 0){
            console.log('Livro apagado');
            navigation.navigate('Home');
          }
        }
      )
    })
  }

  const updateData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE LIVRO SET TITULO=?,ASSUNTO=?,EDITORA=?,AUTOR=? WHERE ID=?',
        [inputTitulo, inputAssunto, inputEditora, inputAutor, id],
        (tx, results) => {
          console.log('Resultado: ', results.rowsAffected);
          if(results.rowsAffected > 0){
            console.log('Livro alterado');
            navigation.navigate('Home');
          }
        }
      )
    })
  }
  
  return (
   <View style={styles.container}>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.entrada}
            placeholder="Titulo"
            placeholderTextColor="red"
            value={inputTitulo}
            onChangeText={(text) => setTitulo(text)}
            />

            <TextInput
            style={styles.entrada}
            placeholder="Assunto"
            placeholderTextColor="red"
            value={inputAssunto}
            onChangeText={(text) => setAssunto(text)}
            />

            <TextInput
            style={styles.entrada}
            placeholder="Editora"
            placeholderTextColor="red"
            value={inputEditora}
            onChangeText={(text) => setEditora(text)}
            />

            <TextInput
            style={styles.entrada}
            placeholder="Autor"
            placeholderTextColor="red"
            value={inputAutor}
            onChangeText={(text) => setAutor(text)}
            />

          {(id == '' ? (
          <TouchableOpacity style={styles.botao} onPress={setData}>
            <Text style={styles.textoBotao}>Novo Livro</Text>
          </TouchableOpacity>): (null))}

          {(id != '' ? (
          <TouchableOpacity style={styles.botao} onPress={updateData}>
            <Text style={styles.textoBotao}>Editar Livro</Text>
          </TouchableOpacity>): (null))}

          {(id != '' ? (
          <TouchableOpacity style={styles.botao} onPress={deleteData}>
            <Text style={styles.textoBotao}>Apagar Livro</Text>
          </TouchableOpacity>): (null))}

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
  },
  inputContainer:{
    width: 300,
  },
  entrada: {
    textAlign: 'center',
    borderWidth: 2,
    marginBottom: 3,
    fontSize: 20,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 20,
    fontSize: 20,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});