import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';

import {getNoticeList} from '../../actions/board';
import ListContainer from '../../components/ListContainer';

const NoticeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const dofun = () => {
    dispatch(getNoticeList({notiType: '전체'})).then(items => {
      setData(items);
    });
    setLoading(false);
  };

  React.useEffect(() => {
    setLoading(true);
    dofun();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
          <Button title="hi" onPress={dofun} />
        </View>
      ) : (
        <React.Fragment>
          <View style={styles.border}>
            <Text style={styles.headtxt}>공지사항</Text>
          </View>
          <ListContainer data={data} page={10} />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headtxt: {
    fontSize: 20,
    padding: 20,
  },
  border: {
    borderBottomWidth: 0.2,
  }
});

export default NoticeScreen;
