import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonItem = ({name, backgroundColor}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 40,
  },
  container: {
    margin: 5,
    alignItems: 'center',
  },
});

export default ButtonItem;
