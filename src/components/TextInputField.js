import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const TextInputField = (state) => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        autoCapitalize="none"
        placeholder={state.state.defaultValue}
      />
      <Text style={styles.error}>{state.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
  },
  error: {
    color: 'red',
  },
});

export default TextInputField;
