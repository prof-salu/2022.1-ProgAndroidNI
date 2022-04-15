import React from 'react';
import Home from '../components/HomeScreen';
import Atividades from '../components/AtividadesScreen';
import Contato from '../components/ContatoScreen';
import Sobre from '../components/SobreScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

class MenuAbas extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Atividades" component={Atividades} />
          <Tab.Screen name="Contato" component={Contato} />
          <Tab.Screen name="Sobre" component={Sobre} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default MenuAbas;
