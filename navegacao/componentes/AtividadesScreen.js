import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AtividadesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Atividades</Text>

        <Text style={styles.atividade}>
          1.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
          accumsan magna, eu varius leo.
        </Text>
        <Text style={styles.atividade}>
          2. Cras cursus lectus est, quis laoreet dolor gravida nec. Nam
          malesuada cursus tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.{' '}
        </Text>
        <Text style={styles.atividade}>
          3. Suspendisse est urna, pellentesque molestie volutpat blandit,
          commodo eu magna. Mauris congue ullamcorper auctor.
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
  atividade: {
    fontSize: 16,
    paddingHorizontal: 15,
    textAlign: 'justify',
    marginVertical: 10,
  },
});

export default AtividadesScreen;
