import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Tab, TabView} from '@ui-kitten/components';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import styles from './Home.style';
import TabBar from '../components/TabBar';
import {doLogOut} from '../actions/auth';
import {test} from '../actions/board';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [idx, setIdx] = React.useState(0);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const check = () => async() => {
    try {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);
      if (result === RESULTS.GRANTED) {
        console.log('ok');
      }
    } catch (e) {
      console.log(e);
    }
  };



  React.useEffect(() => {
    check();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text> Home</Text>
        {isLoggedIn ? (
          <React.Fragment>
            <Button title="Test" onPress={() => navigation.navigate('Test')} />
            <Button title="tab" onPress={() => navigation.navigate('Tab')} />
            <Button title="LOGOUT" onPress={() => dispatch(doLogOut())} />
            <Button
              title="CAMERA"
              onPress={() => navigation.navigate('Camera')}
            />
            <Button title="QR" onPress={() => navigation.navigate('Qr')} />
            <Button
              title="Imoge"
              onPress={() => navigation.navigate('Imoge')}
            />
            <Button
              title="Notice"
              onPress={() => navigation.navigate('Notice')}
            />
            <Button
              title="session"
              onPress={() => dispatch(test())}
            />
          </React.Fragment>
        ) : (
          <Button title="login" onPress={() => navigation.navigate('Login')} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
