import React, { Component, useDispatch } from 'react';
import { Text, View } from 'react-native';

import TextInputField from '../components/TextInputField';
import Button from '../components/Button';

const SignupScreen = () => {
  // const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [name, setName] = React.useState('');
  const [ph, setPh] = React.useState('');
  return (
    <View>
      <TextInputField value={id} setValue={setId} />
      <TextInputField value={pw} setValue={setPw} secureTextEntry={true} />
      <TextInputField value={name} setValue={setName} />
      <TextInputField value={ph} setValue={setPh} />
      <Button name={'가입'} />
    </View>
  );
};

export default SignupScreen;
