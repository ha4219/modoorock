import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TabBar = ({navigation, state}) => {
  console.log("show me the money!~!!@!!!!!!");
  const changeTab = idx => {
    const selectedTabRoute = state.routes[idx];
    navigation.navigate(selectedTabRoute.name);
  };
  const {idx: selectedIndex} = state;
  return (
    <View style={styles.test}>
      <Text>{state.toString()}</Text>
      <Text>{state.toString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default TabBar;
