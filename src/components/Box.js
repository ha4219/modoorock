import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const Box = ({uri, content, onPress}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: uri}}
        imageStyle={{borderRadius: 10}}
        resizeMode="cover"
        style={styles.img}>
      <Text>{content}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 200,
    // shadowColor: 'black',
    // shadowOffset: {height: 10},
    // shadowOpacity: 0.3,
    elevation: 5,
    margin: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});

export default Box;
