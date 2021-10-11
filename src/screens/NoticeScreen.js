import React, { Component } from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {getNoticeList} from '../actions/board';
import ListContainer from '../components/ListContainer';

const NoticeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const dofun = () => {
    dispatch(getNoticeList('all'));
  };

  return (
    <View style={styles.container}>
      <ListContainer
        data={[
          {id: 1, value: 'hi'},
          {id: 2, value: 'hi'},
          {id: 3, value: 'hi'},
          {id: 4, value: 'hi'},
          {id: 5, value: 'hi'},
          {id: 6, value: 'hi'},
          {id: 7, value: 'hi'},
          {id: 8, value: 'hi'},
        ]}
      />
      <Button title="hi" onPress={dofun} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NoticeScreen;
