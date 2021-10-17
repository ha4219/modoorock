import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonItem = ({name, backgroundColor, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '90%',
    height: 40,
  },
  container: {
    flex: 1,
    margin: 5,
    // alignItems: 'center',
  },
});

export default ButtonItem;
