import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

class ListaSecao extends React.Component {
  DADOS= [
     {
     titulo: 'Eletrônicos',
     data: ['TV', 'Caixa de Som', 'Toca-discos Retrô']
     },
     {
     titulo: 'Vestuário',
     data: ['Camisas', 'Camisetas', 'Casacos']
     },
     {
     titulo: 'Livros',
     data: ['Ficção', 'Suspense', 'Policiais']
     }
 ];
 
 Item = ({ titulo }) => (
     <View style={styles.item}>
        <Text style={styles.titulo}>{titulo}</Text>
     </View>
 );

 render() {
    return (
      <View style={styles.container}>
        <SectionList
            sections={this.DADOS}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <this.Item titulo={item} />}
            renderSectionHeader={({ section: { titulo } }) => (
            <Text style={styles.header}>{titulo}</Text>
            )}
        />
     </View>
    );
  }
}

const styles = StyleSheet.create({
     container: {
     flex: 1,
     marginHorizontal: 16
     },
     item: {
     backgroundColor: '#fffccc',
     padding: 20,
     marginVertical: 8
     },
     header: {
     fontSize: 32,
     backgroundColor: '#fff'
     },
     titulo: {
     fontSize: 24
     }
 });

export default ListaSecao;

