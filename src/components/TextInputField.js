import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const TextInputField = state => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        autoCapitalize="none"
        placeholder={state.defaultValue}
        secureTextEntry={state.secureTextEntry}
      />
      <Text style={styles.error}>{state.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '90%',
    borderWidth: 0.3,
    borderRadius: 8,
  },
  error: {
    color: 'red',
  },
});

export default TextInputField;
