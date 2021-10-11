import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <Text>{props.index}</Text>
        <Text>{props.item.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ListItem;
