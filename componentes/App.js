import React from "react"; 
import { StyleSheet, Text, Button, TextInput, View, Image } from "react-native";
import Mensagem from "./classes/Mensagem";
import BotaoEspecial from "./classes/BotaoEspecial";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, margin: 4, }}>Texto estático!</Text>

      <TextInput placeholder="Entrada de dados" style={styles.entrada} keyboardType='numeric'/>

      <Button title="Sou um botão" color={'red'} />

      <Image source={require("./assets/favicon.png")} style={styles.imagem} /> 
      {/*
      <Mensagem mensagem="Aprendendo React Native" />
      <BotaoEspecial msgBotao="Botão estilizado"></BotaoEspecial>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imagem: {
    width: 48,
    height: 48,
    margin: 4,
  },
  entrada: {
    fontSize: 40,
    textAlign: "center",
    margin: 4,
  },
});
