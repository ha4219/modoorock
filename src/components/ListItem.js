import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
  return (
      <TouchableOpacity style={styles.container}>
        <Text>{props.index} </Text>
        <Text>{props.item.title}</Text>
        <Text>{props.item.date}</Text>
        <Text>{props.item.content}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    flexDirection: 'row',
  },
});

export default ListItem;
