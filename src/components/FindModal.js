import React, { Component } from 'react';
import {Text, View, StyleSheet, Modal} from 'react-native';
import {useDispatch} from 'react-redux';

import TextInputField from './TextInputField';
import Button from './Button';

export const FindIdModal = props => {
  const dispatch = useDispatch();

  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const [viewResult, setViewResult] = React.useState(false);
  const [data, setData] = React.useState('');

  const getResult = () => {
    dispatch(props.onRequest(value2)).then(res => {
      if (res === 'IDNOTFOUND') {
        console.log('notfound');
      } else {
        setViewResult(true);
        setData(res);
      }
    });
  };

  return (
    <View>
      <Modal animationType="slide" visible={props.visible} transparent={true}>
        {viewResult ? (
          <View Style={styles.modalView}>
            <Text>{data}</Text>
            <Button name="Close" onPress={props.onClose} />
          </View>
        ) : (
          <View style={styles.modalView}>
            <TextInputField
              defaultValue="이름"
              value={value1}
              setValue={setValue1}
            />
            <TextInputField
              defaultValue="핸드폰 번호"
              value={value2}
              setValue={setValue2}
            />
            <Button name={props.name} onPress={getResult} />
            <Button name="닫기" onPress={props.onClose} />
          </View>
        )}
      </Modal>
    </View>
  );
};

export const FindPwModal = props => {
  const dispatch = useDispatch();

  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');

  const [viewResult, setViewResult] = React.useState(false);
  const [data, setData] = React.useState('');

  const getResult = () => {
    dispatch(props.onRequest({value1, value2, value3})).then(res => {
      if (res === 'IDNOTFOUND' || res === 'ERROR') {
        console.log('notfound');
      } else {
        setViewResult(true);
        setData(res);
      }
    });
  };

  return (
    <View>
      <Modal animationType="slide" visible={props.visible} transparent={true}>
        {viewResult ? (
          <View Style={styles.modalView}>
            <Text>{data}</Text>
            <Button name="Close" onPress={props.onClose} />
          </View>
        ) : (
          <View style={styles.modalView}>
            <TextInputField
              defaultValue="이름"
              value={value1}
              setValue={setValue1}
            />
            <TextInputField
              defaultValue="핸드폰 번호"
              value={value2}
              setValue={setValue2}
            />
            <TextInputField
              defaultValue="사용할 비밀번호"
              value={value3}
              setValue={setValue3}
            />
            <Button name={props.name} onPress={getResult} />
            <Button name="닫기" onPress={props.onClose} />
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
  },
});