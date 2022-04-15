import 'react-native-gesture-handler';
import React from 'react';
import Home from '../components/HomeScreen';
import Atividades from '../components/AtividadesScreen';
import Contato from '../components/ContatoScreen';
import Sobre from '../components/SobreScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

class MenuLateral extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Atividades" component={Atividades} />
          <Drawer.Screen name="Contato" component={Contato} />
          <Drawer.Screen name="Sobre" component={Sobre} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}export default MenuLateral;