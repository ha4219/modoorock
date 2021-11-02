import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Config from 'react-native-config';

const HomeAdvertise = ({item}) => {
  return (
    <TouchableOpacity styles={styles.item} activeOpacity={0.7}>
      <Image
        style={styles.image}
        source={require('../assets/tempAdvertise.jpeg')}
      />
      <Text style={styles.title}>{item.item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200,
  },
  image: {
    flex: 1,
    width: 300,
    height: 200,
    borderRadius: 10,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 12,
  },
});

export default HomeAdvertise;
