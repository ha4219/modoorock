import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';

import {getNoticeList} from '../../actions/board';
import ListContainer from '../../components/ListContainer';

const NoticeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const dofun = () => {
    dispatch(getNoticeList({notiType: '전체'})).then(items => {
      setData(items.reverse());
    }).then(()=>setLoading(false));
  };

  React.useEffect(() => {
    setLoading(true);
    dofun();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.headtxt}>공지사항</Text>
      </View>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ListContainer data={data} page={10} />
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
