import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

class ListaFlat extends React.Component {
  state = {
    data: [
      { id: 0, descricao: 'Memória' },
      { id: 1, descricao: 'Processador' },
      { id: 2, descricao: 'GPU' },
      { id: 3, descricao: 'SSD NVME' },
      { id: 4, descricao: 'Monitor' },
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.descricao}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={styles.list}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});
export default ListaFlat;