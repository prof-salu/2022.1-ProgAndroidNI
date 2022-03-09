import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calculaIMC() {
    if (peso > 0 && altura > 0) {
      setResultado((peso / (altura * altura)).toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.mensagem}>Calculo do Indice de Massa Corporal</Text>

        <Image
          style={styles.tabela}
          source={require("./assets/tabela_imc.png")}
        />

        <TextInput
          style={styles.input}
          placeholder="Seu peso:"
          keyboardType="numeric"
          onChangeText={(peso) => setPeso(peso)}
        />

        <TextInput
          style={styles.input}
          placeholder="Sua altura:"
          keyboardType="numeric"
          onChangeText={(altura) => setAltura(altura)}
        />
     

      <Button title="Calcular" onPress={calculaIMC} />

      <Text style={styles.resultado}>{resultado ? `Seu IMC é de ${resultado}` : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5432",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  mensagem: {
    textTransform: "uppercase",
    fontWeight: "bolder",
    marginBottom: 10,
  },

  input: {
    fontSize: 25,
    width: 300,
    height: 50,
    marginTop: 5,
  },

  resultado: {
    fontSize: 30,
    width: 300,
    height: 50,
    marginTop: 5,
  },

  tabela: {
    width: 300,
    height: 213,
    borderWidth: 2,
    borderColor: "black",
  },
});
