import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Formulario from './Formulario';
import Home from './Home';

const Stack = createNativeStackNavigator();

function Navegacao(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Formulario' component={Formulario}/>
        </Stack.Navigator>
    );
}
export default Navegacao;