import React from "react";
import {Text, View} from "react-native";

export default function OlaMundo(props){
    return(
        <View>
            <Text>Olá {props.nome}.</Text>            
            <Text>Bem vindo ao React Native!</Text>
        </View>
    )
}