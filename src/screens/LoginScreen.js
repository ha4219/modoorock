import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import TextInputField from '../components/TextInputField';


const LoginScreen = ({navigattion}) => {
  return (
    <View>
      <TextInputField state={{defaultValue: 'id'}} />
      <TextInputField state={{defaultValue: 'pw'}} />
      <Button title="Login" />
    </View>
  );
};

export default LoginScreen;
