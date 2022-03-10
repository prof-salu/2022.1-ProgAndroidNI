import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

class Mensagem extends React.Component {
  render() {
    return (
      <View>
        <Text style={{textTransform:'uppercase'}}>Aula de desenvolvimento Mobile</Text>
        <Text style={estilos.texto}>{this.props.mensagem}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#ff1",
  },
});

export default Mensagem;
