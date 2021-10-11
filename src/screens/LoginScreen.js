import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import {doLogin, doFindId, doFindPw} from '../actions/auth';
import {FindIdModal, FindPwModal} from '../components/FindModal';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');

  const [findId, setFindId] = React.useState(false);
  const [findPw, setFindPw] = React.useState(false);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const onPress = () => {
    dispatch(doLogin({id, pw}));
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container}>
      <FindIdModal
        visible={findId}
        onClose={setFindId}
        name={'아이디 찾기'}
        onRequest={doFindId}
      />
      <FindPwModal
        visible={findPw}
        onClose={setFindPw}
        name={'비밀번호 설정'}
        onRequest={doFindPw}
      />
      <Image style={styles.img} source={require('../assets/logo.png')} />
      <View style={styles.subContainer}>
        <TextInputField defaultValue="아이디" value={id} setValue={setId} />
        <TextInputField
          defaultValue="비밀번호"
          secureTextEntry={true}
          value={pw}
          setValue={setPw}
        />
        <View style={styles.subContainer1}>
          <Pressable onPress={() => setFindId(true)}>
            <Text>아이디 찾기</Text>
          </Pressable>
          <Pressable onPress={() => setFindPw(true)}>
            <Text>비밀번호 찾기</Text>
          </Pressable>
        </View>
        <Button name={'로그인'} onPress={onPress} />
        <View style={styles.subContainer1}>
          <Text>-------간편 로그인-------</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
          <Image style={styles.itemImg} source={require('../assets/img.png')} />
        </View>
        <Button
          name={'회원가입'}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginBottom: 50,
    aspectRatio: 1,
    width: '100%',
    resizeMode: 'contain',
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
