import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = () => {
  const types = [RNCamera.Constants.Type.back, RNCamera.Constants.Type.front];
  const [type, setType] = React.useState(0);
  const cameraRef = React.useRef(null);
  const take = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quiality: 1,
        exif: true,
      });
      console.log('hey !!!!', data);
    };
  }
  return (
    <View>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={types[type]}
        captureAudio={false}
      />
      <Text>hihisadfkljsadlfjs;dak;jflsd;ajfl;</Text>
      <Button title="ch" onPress={() => setType(type ^ 1)} />
      <Button title="save" onPress={take} />
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
