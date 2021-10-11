import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = () => {
  return (
    <View>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <Text>hihisadfkljsadlfjs;dak;jflsd;ajfl;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: 200,
  },
});

export default CameraScreen;
