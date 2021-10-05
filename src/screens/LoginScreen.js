import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import TextInputField from '../components/TextInputField';
import {naviagte} from '../helpers/NavigationContainer';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <TextInputField state={{defaultValue: 'id'}} />
      <TextInputField state={{defaultValue: 'pw'}} />
      <Button title="Login" onPress={() => navigation.navigate('Tab')} />
    </View>
  );
};

export default LoginScreen;
