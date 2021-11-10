import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';

import {getGameListByExp} from '../../actions/mission';
import Loading from '../../components/Loading';
import {toast} from '../../components/Toast';

const MissionDoingDetailScreen = ({route, navigation}) => {
  const {expIdx} = route.params;
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const getData = () => {
    dispatch(getGameListByExp({idx: expIdx})).then(res => {
      setData(res);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const Body = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => navigation.navigate('Doing', {idx: item.idx})}>
        <Text>{item.idx}</Text>
      </TouchableOpacity>
    );
  };

  const onCheck = () => {
    const filter = data.filter(el => el.password === value);
    if (filter.length === 1) {
      toast('MISSION START!');
      navigation.navigate('Doing', {idx: filter[0].idx});
    } else if (filter.length === 0) {
      Alert.alert('PASSWORD ERROR');
    } else {
      Alert.alert('상품 오류');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/mission/startLayout.png')}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Text style={styles.title}>MISSION START</Text>
            {/* camera */}
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={setValue}
              placeholder={'미션 번호 입력'}
            />
            <Text style={styles.description}>
              QR CODE를 스캔하거나{'\n'}미션 번호를 입력해주세요.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => onCheck()}>
              <Text style={styles.btnTxt}>START</Text>
            </TouchableOpacity>
          </>
        )}
      </ImageBackground>
    </View>
  );
};

export default MissionDoingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#57b5ff',
  },
  itemView: {
    flex: 1,
    borderWidth: 0.4,
    marginBottom: 40,
    borderRadius: 6,
  },
  sectionList: {
    padding: 21,
  },
  bg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#f8f8f8',
    fontSize: 24,
  },
  description: {
    color: '#f8f8f8',
    textAlign: 'center',
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#1371ff',
    borderRadius: 24,
    width: 290,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 21,
    color: '#f8f8f8',
  }
});
