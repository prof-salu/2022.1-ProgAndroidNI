import React from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';

class ContatoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Contato</Text>

        <Button
          onPress={() =>
            Linking.openURL('mailto:contato@meuapp.com?subject=ASSUNTO&body=CORPO-EMAIL')} title="contato@meuapp.com"/>

        <Button
          onPress={() =>
            Linking.openURL('tel:12345678')} title="Ligar"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ContatoScreen;
