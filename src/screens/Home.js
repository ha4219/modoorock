import React, { Component } from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';

import styles from './Home.style';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text> Home</Text>
        <Button title="login" onPress={() => navigation.navigate('Tab')} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
