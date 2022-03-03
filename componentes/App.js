import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaMundo from './componentes/OlaMundo';
import Saudacao from './classes/Saudacao'

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundo nome='Salu'/>
      <Saudacao nome='Salu'/>
      <StatusBar style="auto" />        
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
