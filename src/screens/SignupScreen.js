import React, {Component, useRef} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import {doSignup, test} from '../actions/auth';

const SignupScreen = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [name, setName] = React.useState('');
  const [ph, setPh] = React.useState('');

  const onPress = () => {
    dispatch(doSignup({id, pw, name, ph}));
    // dispatch(test());
  };
  return (
    <View>
      <TextInputField value={id} setValue={setId} defaultValue={'아이디'} />
      <TextInputField
        value={pw}
        setValue={setPw}
        secureTextEntry={true}
        defaultValue={'비밀번호'}
      />
      <TextInputField value={name} setValue={setName} defaultValue={'이름'} />
      <TextInputField value={ph} setValue={setPh} defaultValue={'전화번호'} />
      <Button name={'가입'} onPress={onPress} />
    </View>
  );
};

export default SignupScreen;
