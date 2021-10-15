import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';

import QrScanner from './QrScanner';
import TextInputField from '../TextInputField';
import Button from '../Button';

const StartModal = props => {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      transparent={false}
      onRequestClose={props.onRequestClose}>
      <View style={styles.container}>
        <QrScanner onRead={props.onRead} />
        <View style={styles.subContainer}>
          <TextInputField />
          <Text>미션 번호 혹은 qr코드를 입력해주세요.</Text>
          <Button name="START" onPress={props.onPress} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  subContainer: {
    paddingTop: 400,
  },
});

export default StartModal;
