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

import styles from './Home.style';
import TabBar from '../components/TabBar';
import {doLogOut} from '../actions/auth';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [idx, setIdx] = React.useState(0);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <SafeAreaView>
      <View>
        <Text> Home</Text>
        {isLoggedIn ? (
          <React.Fragment>
            <Button title="Test" onPress={() => navigation.navigate('Test')} />
            <Button title="tab" onPress={() => navigation.navigate('Tab')} />
            <Button title="LOGOUT" onPress={() => dispatch(doLogOut())} />
          </React.Fragment>
        ) : (
          <Button title="login" onPress={() => navigation.navigate('Login')} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
