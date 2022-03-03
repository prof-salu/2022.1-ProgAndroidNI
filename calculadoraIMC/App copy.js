import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [imc, setImc] = useState('');
const [situacao, setSituacao] = useState('');

  function calculaIMC(){
    if(peso > 0 && altura > 0){
      setImc(Math.floor(parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))));
    }else{
      setImc('');
    }

    situacaoIMC();
  }

  function situacaoIMC(){
    if(imc > 0 && imc < 18.5 ){
      setSituacao('Abaixo do peso');
    }else if(imc >= 18.5 && imc < 25){
      setSituacao('Peso normal');
    }else if(imc >= 25 && imc < 30){
      setSituacao('Sobrepeso');
    }else if(imc >= 30 && imc < 35){
      setSituacao('Obesidade Grau I');
    }else if(imc >= 35 && imc < 40){
      setSituacao('Obesidade Grau II');
    }else if(imc >= 18.5 && imc < 25){
      setSituacao('Peso normal');
    }else if(imc >= 40){
      setSituacao('Obesidade Mórbida');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Insira os dados abaixo para calcular o seu Indice de Massa Corporal: </Text>

      <TextInput placeholder='Peso'
        style={{height: 40, textAlign: 'center'}}
        keyboardType={'numeric'}
        onChangeText={(peso) => setPeso({peso})} />

      <TextInput placeholder='Altura'
        style={{height: 40, textAlign: 'center'}}
        keyboardType={'numeric'}
        onChangeText={(altura) => setAltura({altura})} />

        <Button title='Calcular'
        onPress={calculaIMC}/>

      <Text>{imc ? `IMC: ${imc}`:''} </Text>
      <Text>{situacao ? `Resultado: ${situacao}`:''}</Text>
      <StatusBar style="auto" />
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
});
