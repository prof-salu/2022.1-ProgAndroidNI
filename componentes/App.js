import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.principal}>
        <Text>Sou um campo de texto!</Text>
        <TextInput
          placeholder="Entrada de dados!"
          style={styles.input} />
        <Button title="Sou um botão!" />
        <Image source={require("./assets/favicon.png")} style={styles.imagem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  principal: {
    width: 400,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
  },
  imagem: {
    width: 48,
    height: 48,    
  },
  input: {
    width: 386,
    height: 50,
    fontSize: 30,
    textAlign: 'center',
  },
});
