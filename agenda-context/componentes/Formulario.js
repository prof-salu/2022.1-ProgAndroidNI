import React, {useState, useContext} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import { ListaContatos } from './Lista';

export default function Formulario(){
    const navigation = useNavigation();
    const [inputNome, setInputNome] = useState('');
    const [inputTel, setInputTel] = useState('');

    const {agenda} = useContext(ListaContatos);
    const {addContato} = useContext(ListaContatos);

    function novoContato(){
        if(inputNome == '' || inputTel == ''){
            alert('Os campos devem estar preenchidos');
            return;
        }
         
        addContato(agenda, inputNome, inputTel);

        navigation.navigate('Home');
    }

    return(
        <View style= {styles.container}>
            <View>
                <TextInput
                    style={styles.entrada}
                    placeholder='Nome'
                    placeholderTextColor={'red'}
                    value={inputNome}
                    onChangeText={(text) => setInputNome(text)}/>           

                <TextInput
                    style={styles.entrada}
                    placeholder='Telefone'
                    placeholderTextColor={'red'}
                    value={inputTel}
                    onChangeText={(text) => setInputTel(text)}/>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={novoContato}>
                        <Text style={styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },entrada: {
        width: 150,
        textAlign: 'center',
        borderWidth: 2,
        marginBottom: 5,
        fontSize: 20,
    },botao: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        marginBottom: 5,
        borderRadius: 20,
        fontSize: 20,
    },textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    }
});