import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal, Button, Image } from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraImogeScreen = ({navigation}) => {
  const [show, setShow] = React.useState(true);
  const custom = face => {
    console.log(face);
  };
  return (
    <View style={styles.container}>
      <Modal
        style={styles.container}
        visible={show}
        animationType="slide"
        transparent={true}>
        <Image style={styles.imoge} source={require('../assets/frame.png')} />
        <Button title="test" onPress={() => navigation.goBack()} />
      </Modal>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
      />
      <Button title="test"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  txt: {
    color: 'red',
    fontSize: 20,
  },
  imoge: {
    aspectRatio: 1,
    marginTop: '40%',
    width: '50%',
    height: '60%',
    resizeMode: 'cover',
  },
});

export default CameraImogeScreen;
