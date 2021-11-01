import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const MapScreen = () => {
  return (
    <WebView
      source={{uri: 'https://map.kakao.com/link/map/37.402056,127.108212'}}
    />
  );
};

export default MapScreen;
