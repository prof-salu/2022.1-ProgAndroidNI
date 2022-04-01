import React, { Component } from 'react';

import { View, Text, VirtualizedList, StyleSheet } from 'react-native';

class ListaVirtualized extends React.Component {
  DATA = [
    { id: 0, title: 'Flamengo', },
    { id: 1, title: 'Fluminense', },
    { id: 2, title: 'Vasco', },
    { id: 3, title: 'Botafogo', },
    { id: 4, title: 'America', },
    { id: 5, title: 'Bangu', },
    { id: 6, title: 'Volta Redonda', },
    { id: 7, title: 'Nova Iguaçu', },
  ];

  getItem = (data, index) => {
    return data[index];
  };

  Item = (item) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <VirtualizedList
          data={this.DATA}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <this.Item title={item.title} key={item.id} />
          )}
          keyExtractor={(item) => item.key}
          getItemCount={(data) => data.length}
          getItem={this.getItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffb606',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default ListaVirtualized;