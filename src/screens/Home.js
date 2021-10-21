import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch, connect} from 'react-redux';
import {Tab, TabView} from '@ui-kitten/components';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import styles from './Home.style';
import TabBar from '../components/TabBar';
import {doLogOut, getSession} from '../actions/auth';
import {test} from '../actions/board';

const Home = ({navigation, idx, name}) => {
  const dispatch = useDispatch();
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
            <Button title="session" onPress={() => dispatch(getSession())} />
            <Button
              title="idx name"
              onPress={() => {
                console.log(idx, name);
            }} />
          </React.Fragment>
        ) : (
          <Button title="login" onPress={() => navigation.navigate('Login')} />
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state, props) => {
  return {idx: state.auth.user.idx, name: state.auth.user.name};
};

export default connect(mapStateToProps)(Home);
