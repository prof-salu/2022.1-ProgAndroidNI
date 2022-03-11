import React from "react";
import {View, Text, StyleSheet} from "react-native";

class Mensagem extends React.Component{
    render(){
        return(
            <View>
                <Text style={estilos.texto}>{this.props.texto}</Text>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    texto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'brown',
        margin: 10,
        backgroundColor: '#ff1',
        borderWidth: 2,
        padding: 5,
    }
});

// O componente MeuBotao deve possuir a cor vermelha
// E o seu titulo deverá ser definido 
// via propriedade na classe que o chamar

export default Mensagem;