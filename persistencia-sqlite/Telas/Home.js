import React, { useState, useEffect, useContext } from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { LivroContext } from '../Componentes/EnviaLivro';

export default function Home() {
  const {editaLivro} = useContext(LivroContext);
  const navigation = useNavigation();    

  const db = SQLite.openDatabase('db.MainDB');

  const isFocused = useIsFocused();

  const [livros, setLivros] = useState([]);
  const [empty, setEmpty] = useState([]);

  useEffect(() => {
        getData();
        createTable();
        resetLivro();
    }, [isFocused]);

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "LIVRO "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, TITULO TEXT, ASSUNTO TEXT, EDITORA TEXT, AUTOR TEXT);"
            );
        });
    }
 
    const getData = () => {
      db.transaction((tx) => {
            tx.executeSql(
                "SELECT ID, TITULO, ASSUNTO, EDITORA, AUTOR FROM LIVRO",
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                      temp.push(results.rows.item(i));
                      setLivros(temp);
          
                    if (results.rows.length >= 1) {
                      setEmpty(false);
                    } else {
                      setEmpty(true)
                    }
                }
            );
        });
    }

    const enviaLivroForm = (id, titulo, assunto, editora, autor) => {
      navigation.navigate('Formulario');
      editaLivro(id, titulo, assunto, editora, autor);
    }

    const resetLivro = () => {
      editaLivro('', '', '', '', '');
    }

    return (
        <View style={styles.container}>
        
        <FlatList
          style={styles.lista}
          data={livros}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => 
                enviaLivroForm(item.ID, item.TITULO, item.ASSUNTO, item.EDITORA, item.AUTOR)
              }>
              <Text> ID: {item.ID} </Text>
              <Text> Titulo: {item.TITULO} </Text>
              <Text> Assunto: {item.ASSUNTO} </Text>
              <Text> Editora: {item.EDITORA} </Text>
              <Text> Autor: {item.AUTOR} </Text>
            </TouchableOpacity>
            
          )}
        />

        <TouchableOpacity 
          style={styles.floatbutton}
          onPress={() => navigation.navigate('Formulario')}>
          <Text style={{ fontSize: 30, color: 'white',}}>+</Text>
        </TouchableOpacity>
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
  item: {
    borderBottomWidth: 2,
    padding: 3
  },
  floatbutton: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  lista: {
    marginTop: 25,
  },
});