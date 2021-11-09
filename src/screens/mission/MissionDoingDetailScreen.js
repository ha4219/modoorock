import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';

import {getGameListByExp} from '../../actions/mission';
import Loading from '../../components/Loading';

const MissionDoingDetailScreen = ({route, navigation}) => {
  const {expIdx} = route.params;
  const dispatch = useDispatch();
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
    console.log(item);
    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => navigation.navigate('Doing', {idx: item.idx})}>
        <Text>{item.idx}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FlatList
            data={data}
            style={styles.sectionList}
            renderItem={({item}) => <Body item={item} />}
          />
        </>
      )}
    </View>
  );
};

export default MissionDoingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
