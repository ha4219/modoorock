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
    width: 200,
    height: 200,
  },
});

export default CameraScreen;
