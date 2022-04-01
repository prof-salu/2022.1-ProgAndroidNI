/*https://snack.expo.dev/@prof-salu/listas */

import { StyleSheet, Text, View } from 'react-native';
import ListaVirtualizada from './classes/ListaVirtualizada';
import ListaSecao from './classes/ListaSecao';
import ListaFlat from './classes/ListaFlat';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaFlat/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});