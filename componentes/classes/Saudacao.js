import React from "react";
import {Text, View} from "react-native";

class Saudacao extends React.Component{
    render(){
        return(
            <View>
                <Text>Olá {this.props.nome}.</Text>            
                <Text>Bem vindo ao mundo do React Native!</Text>
            </View>
        )
    }
}export default Saudacao;