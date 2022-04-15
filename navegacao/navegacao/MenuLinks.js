import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Home from '../components/HomeScreen';
import Atividades from '../components/AtividadesScreen';
import Contato from '../components/ContatoScreen';
import Sobre from '../components/SobreScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function TelaInicial({ navigation }) {
  return (
    <View style={estilos.container}>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Home')}>
        <Text style={estilos.textoBotao}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Atividades')}>
        <Text style={estilos.textoBotao}>Atividades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Contato')}>
        <Text style={estilos.textoBotao}>Contato</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Sobre')}>
        <Text style={estilos.textoBotao}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createStackNavigator();

class MenuLink extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu Principal" component={TelaInicial} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Atividades" component={Atividades} />
          <Stack.Screen name="Contato" component={Contato} />
          <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 150,
    backgroundColor: 'blue',
    marginBottom: 5,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default MenuLink;
