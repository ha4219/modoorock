import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';

const TabBar = ({navigation, state}) => {
  const changeTab = idx => {
    const selectedTabRoute = state.routes[idx];
    navigation.navigate(selectedTabRoute.name);
  };
  const {idx: selectedIndex} = state;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.jumpTo('HomeStack')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.jumpTo('TestStack')}>
        <Text>test</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.jumpTo('LoginStack')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TabBar;
