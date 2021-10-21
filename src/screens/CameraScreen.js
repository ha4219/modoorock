import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = () => {
  const types = [RNCamera.Constants.Type.back, RNCamera.Constants.Type.front];
  const [type, setType] = React.useState(0);
  return (
    <View>
      <RNCamera style={styles.camera} type={types[type]} captureAudio={false} />
      <Text>hihisadfkljsadlfjs;dak;jflsd;ajfl;</Text>
      <Button title="ch" onPress={() => setType(type ^ 1)} />
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
