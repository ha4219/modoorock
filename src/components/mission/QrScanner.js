import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QrScanner = ({onRead}) => {
  return (
    <QRCodeScanner
      cameraStyle={styles.qr}
      onRead={onRead}
      flashMode={RNCamera.Constants.FlashMode.torch}
    />
  );
};

const styles = StyleSheet.create({
  qr: {
    width: 200,
    height: 200,
  },
});

export default QrScanner;
