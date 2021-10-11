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
    <QRCodeScanner
      onRead={onBarCodeRead}
      flashMode={RNCamera.Constants.FlashMode.torch}
    />
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%',
  },
});

export default QrScannerScreen;
