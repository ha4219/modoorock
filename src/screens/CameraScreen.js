import React, { Component } from 'react';
import {Text, View, StyleSheet, Button, PermissionsAndroid} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';
import CameraRoll from '@react-native-community/cameraroll';

import {uploadImage} from '../actions/mission';

const CameraScreen = () => {
  const types = [RNCamera.Constants.Type.back, RNCamera.Constants.Type.front];
  const [type, setType] = React.useState(0);
  const [image, setImage] = React.useState({});
  const cameraRef = React.useRef(null);
  const dispatch = useDispatch();
  const checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };
  checkAndroidPermission();

  const take = async () => {
    console.log('cameraRef', cameraRef);
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quiality: 1,
        exif: true,
      });
      console.log('hey !!!!', data);
      if (data) {
        setImage({
          filename: 'donghahahahaha.jpg',
          // uri: data.uri.replace('file://', ''),
          uri: data.uri,
        });
        console.log(image);
        const res = await CameraRoll.save(data.uri);
        console.log('result', res);
      }
    };
  };

  const sendDataToServer = () => {
    dispatch(uploadImage(image.onRecordingStart));
  };
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
      <Button title="test" onPress={() => console.log(image)} />
      <Button title="toServer" onPress={() => sendDataToServer()} />
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
