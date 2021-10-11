import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = () => {
  return (
    <RNCamera
      style={styles.camera}
      type={RNCamera.Constants.Type.back}
      captureAudio={false}
    />
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%',
  },
});

export default CameraScreen;
