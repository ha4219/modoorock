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
          <ListContainer data={data} />
          <Button title="hi" onPress={dofun} />
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NoticeScreen;
