import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TabBar = ({navigation, state}) => {
  // console.log(state);
  const changeTab = idx => {
    const selectedTabRoute = state.routes[idx];
    navigation.navigate(selectedTabRoute.name);
  };
  const {idx: selectedIndex} = state;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('HomeStack')}>
        <Text>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('TestStack')}>
        <Text>관광지</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('TestStack')}>
        <Image source={require('../assets/locationIcon.png')} />
        <Text>내근처</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('MissionStack')}>
        <Text>미션</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('ProfileStack')}>
        <Image source={require('../assets/personIcon.png')} />
        <Text>내정보</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    width: '20%',
    backgroundColor: 'gray',
  },
});

export default TabBar;
