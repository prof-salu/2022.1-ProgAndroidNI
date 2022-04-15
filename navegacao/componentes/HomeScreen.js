import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>MeuAPP</Text>

        <Text style={styles.texto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
          accumsan magna, eu varius leo. Cras cursus lectus est, quis laoreet
          dolor gravida nec. Nam malesuada cursus tincidunt. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse est urna,
          pellentesque molestie volutpat blandit, commodo eu magna. Mauris
          congue ullamcorper auctor.
        </Text>
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
  texto: {
    fontSize: 16,
    padding: 30,
    textAlign: 'justify',   
  },
});

export default HomeScreen;
