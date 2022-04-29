import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navegacao from './componentes/Navegacao';
import Lista from './componentes/Lista';

export default function App() {
  return (
    <NavigationContainer>
      <Lista>
        <Navegacao/> 
      </Lista>
    </NavigationContainer>
  );
}