import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QrScannerScreen = () => {
  const onBarCodeRead = scanResult => {
    if (scanResult !== null) {
      console.log(scanResult);
    }
    return;
  };
  return (
    <View>
      <QRCodeScanner
        cameraStyle={styles.camera}
        onRead={onBarCodeRead}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
      <Text>hihihi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: 400,
  },
});

export default QrScannerScreen;
