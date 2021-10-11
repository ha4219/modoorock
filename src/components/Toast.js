import React from 'react';
import {Platform, AlertIOS, ToastAndroid} from 'react-native';
import Toast from 'react-native-simple-toast';

export const toast = msg => {
  // if (Platform.OS === 'android') {
  //   ToastAndroid.show(msg, ToastAndroid.SHORT);
  // }else{
  //   AlertIOS.alert(msg);
  // }
  Toast.show(msg);
};
