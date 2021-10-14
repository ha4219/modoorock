import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{props.item.title}</Text>
      <Text>{props.item.date}</Text>
      <Text>답변예정</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  touch: {
    flexDirection: 'row',
  },
});

export default ListItem;
