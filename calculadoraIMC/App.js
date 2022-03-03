import React from 'react';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 16){
     s.resultadoText ='Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText ='Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText ='Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='Saudavel'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='Obesidade Grau 2°'
    }
    else{
      s.resultadoText ='Obesidade Grau 3°'
    }
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>
        
          <TextInput placeholder="Altura" keyboardType="numeric"  onChangeText={(altura)=>{this.setState({altura})}}/>
          <TextInput placeholder="Massa"  keyboardType="numeric"  onChangeText={(massa)=>{this.setState({massa})}}/>
        
          <Button onPress={this.calcular} title='Calcular'/>
          <Text>{this.state.resultado.toFixed(2)}</Text>
          <Text>{this.state.resultadoText}</Text>

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
});
