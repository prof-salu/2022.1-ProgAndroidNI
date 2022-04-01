import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default class App extends React.Component {
  state = {
    nome : '',
    tel: '',
    lista: [
      { id: 0, nome: "Carlos", tel: "1234" },
      { id: 1, nome: "Tereza", tel: "5678" },
    ],
  };

  chave = this.state.lista.length;

  addContato = this.addContato.bind(this);

  addContato() {
    this.state.lista.push({ id: ++this.chave, nome: this.state.nome, tel: this.state.tel });
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput 
            style={styles.entrada} 
            placeholder="Nome" 
            onChangeText={(nome) => {this.setState({nome})}}
          />

          <TextInput 
            style={styles.entrada} 
            placeholder="Telefone" 
            onChangeText={(tel) => {this.setState({tel})}}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.botao} onPress={this.addContato}>
            <Text style={styles.textoBotao}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Apagar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Editar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={this.state.lista}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.nome + " - " + item.tel}</Text>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  entrada: {
    textAlign: "center",
    borderWidth: 2,
    marginBottom: 3,
    fontSize: 20,
  },
  botao: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    marginBottom: 6,
    borderRadius: 20,
    fontSize: 20,
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
  item: {
    marginBottom: 1,
    fontSize: 20,
    color: "gray",
  },
});
