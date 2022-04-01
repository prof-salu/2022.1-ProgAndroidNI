import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0,
  };

  somar = this.somar.bind(this);
  subtrair = this.subtrair.bind(this);
  dividir = this.dividir.bind(this);
  multiplicar = this.multiplicar.bind(this);

  somar() {
    this.state.result = Number(this.state.num1) + Number(this.state.num2);

    this.setState(this.state);
  }

  subtrair() {
    this.state.result = Number(this.state.num1) - Number(this.state.num2);

    this.setState(this.state);
  }

  multiplicar() {
    this.state.result = Number(this.state.num1) * Number(this.state.num2);

    this.setState(this.state);
  }

  dividir() {
    if (Number(this.state.num2) != 0) {
      this.state.result = Number(this.state.num1) / Number(this.state.num2);
    } else {
      this.state.result = 'Infinity';
    }

    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.valores}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Valor 01"
            onChangeText={(num1) => {
              this.setState({ num1 });
            }}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Valor 02"
            onChangeText={(num2) => {
              this.setState({ num2 });
            }}
          />
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={this.somar}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.subtrair}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.multiplicar}>
            <Text style={styles.textoBotao}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.dividir}>
            <Text style={styles.textoBotao}>/</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.resultado}>{this.state.result}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valores: {
    width: 250,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 2,
    width: 250,
    height: 50,
    borderColor: 'orange',
  },
  input: {
    borderWidth: 2,
    borderColor: 'blue',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 5,
  },

  botoes: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'red',
    marginBottom: 5,
    width: 250,
    justifyContent: 'center',    
    padding: 2,
  },

  botao: {
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 4,
    width: 50,
    height: 50,
  },
  textoBotao: {
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: 'bold',
  },
});
