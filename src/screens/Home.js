import React, { Component } from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
import {Tab, TabView} from '@ui-kitten/components';

import styles from './Home.style';
import TabBar from '../components/TabBar';

const Home = ({navigation}) => {
  const [idx, setIdx] = React.useState(0);
  return (
    <SafeAreaView>
      <View>
        <Text> Home</Text>
        <Button title="login" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
