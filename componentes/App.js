import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Mensagem from './classes/Mensagem';
import MeuBotao from './classes/MeuBotao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Texto estático!!!</Text>
      <TextInput placeholder='Entrada de dados' keyboardType='numeric'/>
      <Button title='Sou um botão!' color={'green'}/>
      <Image style={styles.imagem} source={require('./assets/favicon.png')}/> 
      {/*COMENTARIO REACT*/}
      <Text style={{fontSize: 30, color: 'blue', fontWeight: 'bolder'}}>Novo texto!</Text>

      <Mensagem texto='Aula de Desenvolvimento Mobile'/>
      <Mensagem texto='Prof. Salustiano Oliveira'/>
      <Mensagem texto='Aula 04'/>
     
      <MeuBotao msg='Clique aqui'></MeuBotao>

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
  imagem: {
    width: 48,
    height: 48,
    marginTop: 10,
  }, 
  texto: {
    fontSize: 40,
    margin: 10,
    color: 'red',
  }
});
