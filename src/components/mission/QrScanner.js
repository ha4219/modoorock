import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QrScanner = ({onRead, style}) => {
  return (
    <QRCodeScanner
      cameraStyle={style}
      onRead={onRead}
      flashMode={RNCamera.Constants.FlashMode.torch}
    />
  );
};

const styles = StyleSheet.create({});

export default QrScanner;
