import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MissionScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/logo.png')} />
      <Text>미션 결제 내역이 없습니다.</Text>
      <Text>결제 후 이용하시기 바랍니다.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});

export default MissionScreen;
