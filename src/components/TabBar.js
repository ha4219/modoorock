import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';

const TabBar = ({navigation, state}) => {
  const changeTab = idx => {
    const selectedTabRoute = state.routes[idx];
    navigation.navigate(selectedTabRoute.name);
  };
  const {idx: selectedIndex} = state;
  return (
    <BottomNavigation
      appearance="noIndicator"
      styles={styles.test}
      // selectedIndex={selectedIndex}
      selectedIndex={state.index}
      onSelect={changeTab}>
      <BottomNavigationTab title="Home" />
      <BottomNavigationTab title="Test" />
      <BottomNavigationTab title="Login" />
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default TabBar;
