import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    resultado: 0,
  };

  somar = this.somar.bind(this);
  subtrair = this.subtrair.bind(this);
  multiplicar = this.multiplicar.bind(this);
  dividir = this.dividir.bind(this);

  somar(){
    this.state.resultado = Number(this.state.num1) + Number(this.state.num2);
    this.setState(this.state);
  }

  subtrair(){
    this.state.resultado = Number(this.state.num1) - Number(this.state.num2);
    this.setState(this.state);
  }

  multiplicar(){
    this.state.resultado = Number(this.state.num1) * Number(this.state.num2);
    this.setState(this.state);
  }

  dividir(){
    this.state.resultado = Number(this.state.num1) / Number(this.state.num2);
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Minha calculadora!</Text>

        {/*View de INPUT */}
        <View>
          <TextInput 
            style={styles.input} 
            placeholder="Numero 01" 
            onChangeText={(num1) => this.setState({num1})}/>
          <TextInput 
            style={styles.input} 
            placeholder="Numero 02" 
            onChangeText={(num2) => this.setState({num2})}/>
        </View>

        {/*View dos BOTõES */}
        <View style={styles.containerBotoes}>
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
        {/*view RESULTADO */}
        <View>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', //"#fff"
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'blue',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 5,
    width: 250,
  },
  containerBotoes: {
    width: 250,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 5,
    padding: 2,
  },
  botao: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  textoBotao: {
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 30,
    color: 'white',
  },
  resultado: {
    borderWidth: 2,
    borderColor: 'blue',
    textAlign: 'center',
    fontSize: 30,
    width: 250,
  },
});
