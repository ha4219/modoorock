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
        <Image style={styles.img} source={require('../assets/homeIcon.png')} />
        <Text style={styles.txt}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('TourStack')}>
        <Image style={styles.img} source={require('../assets/mapIcon.png')} />
        <Text style={styles.txt}>관광지</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('MapStack')}>
        <Image style={styles.img} source={require('../assets/gpsIcon.png')} />
        <Text style={styles.txt}>내근처</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('MissionStack')}>
        <Image
          style={styles.img}
          source={require('../assets/trophyIcon.png')}
        />
        <Text style={styles.txt}>미션</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.jumpTo('ProfileStack')}>
        <Image style={styles.img} source={require('../assets/heartIcon.png')} />
        <Text style={styles.txt}>내정보</Text>
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
    width: '20%',
    fontSize: 10,
  },
  txt: {
    fontSize: 10,
  },
  img: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default TabBar;
