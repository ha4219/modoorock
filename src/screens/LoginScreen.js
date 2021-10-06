import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import TextInputField from '../components/TextInputField';
import Button from '../components/Button';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/img.png')} />
      <View style={styles.subContainer}>
        <TextInputField state={{defaultValue: '아이디'}} />
        <TextInputField defaultValue="비밀번호" secureTextEntry={true} />
        <View style={styles.subContainer1}>
          <Text> 자동 로그인 / 아이디 찾기 / 비밀번호 찾기</Text>
        </View>
        <Button name={'로그인'} />
        <View style={styles.subContainer1}>
          <Text>-------간편 로그인-------</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
        </View>
        <Button name={'회원가입'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  img: {
    marginBottom: 50,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  itemImg: {
    width: 40,
    height: 40,
    margin: 5,
  },
  subContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  subContainer1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    border: 1,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default LoginScreen;
