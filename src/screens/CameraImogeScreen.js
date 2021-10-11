import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';

const CameraImogeScreen = () => {
  const [show, setShow] = React.useState(true);
  const custom = face => {
    console.log(face);
  };
  return (
    <View>
      <Modal visible={show} animationType="slide" transparent={true}>
        <Text style={styles.txt}>foo</Text>
      </Modal>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
        onFacesDetected={custom}
        flashMode={RNCamera.Constants.FlashMode.on}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        captureAudio={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%',
  },
  txt: {
    color: 'red',
    fontSize: 20,
  },
});

export default CameraImogeScreen;
