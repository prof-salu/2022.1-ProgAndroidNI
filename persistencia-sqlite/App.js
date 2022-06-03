import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navegacao from './Componentes/Navegacao';
import EnviaLivro from './Componentes/EnviaLivro';

export default function App() {
   return (
    <NavigationContainer>
      <EnviaLivro>
        <Navegacao/>
      </EnviaLivro>      
    </NavigationContainer>
  );
}
