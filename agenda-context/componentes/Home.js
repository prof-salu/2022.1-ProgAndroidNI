import React from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style= {styles.floatButton}
            onPress={() => navigation.navigate('Formulario')}>
                <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatButton: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'green',
        borderRadius: 100,
    },
    textoBotao: {
        fontSize: 30,
        color: 'white',
    }
});