import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <TextInput style={styles.input} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: '10%',
  },
  logo: {
    resizeMode: 'contain',
    width: '27%',
    marginRight: '10%',
  },
  input: {
    backgroundColor: '#F8F8F8',
    width: '70%',
  },
});
