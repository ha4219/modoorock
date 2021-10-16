import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const Test = ({navigation}) => {
  return (
    <WebView
      source={{uri: 'https://modoorock.kro.kr/modoorock/'}}
      style={styles.webview}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Test;
