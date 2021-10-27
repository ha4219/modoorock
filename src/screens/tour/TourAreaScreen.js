import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {getTourData} from '../../actions/tour';
import Header from '../../components/Header';
import {Card} from '../../components/tour/Card';
import Loading from '../../components/Loading';

export const TourAreaScreen = ({navigation}) => {
  const AREA = [
    '전체',
    '서울',
    '강원',
    '부산',
    '인천',
    '충남',
    '충북',
    '대전',
    '경북',
    '대구',
    '경남',
    '전북',
    '전남',
    '광주',
    '울산',
    '제주',
  ];
  const [selectedValue, setSelectedValue] = React.useState(0);
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const doGetList = () => {
    setLoading(true);
    dispatch(getTourData({tourType: AREA[selectedValue]})).then(res => {
      setData(res);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    doGetList();
  }, [selectedValue]);

  const SmallBtn = ({item}) => {
    if (item.index === selectedValue) {
      return (
        <TouchableOpacity
          style={styles.selecedBtn}
          onPress={() => setSelectedValue(item.index)}>
          <Text style={{color:'#FFFFFF'}}>{item.item}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.nonSelecedBtn}
          onPress={() => setSelectedValue(item.index)}>
          <Text>{item.item}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subHead}>
        <TouchableOpacity style={styles.subHeadBtn1}>
          <Text style={styles.subHeadTxt}>지역</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subHeadBtn2}>
          <Text style={styles.subHeadTxt}>테마</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerTxt}>여행 어디로 가시나요?</Text>
        <FlatList
          numColumns={6}
          data={AREA}
          renderItem={item=><SmallBtn item={item} />}
        />
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          renderItem={item => (
            <Card
              props={item}
              onPress={() => navigation.navigate('AreaMore', {idx: item.idx})}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subHead: {
    flexDirection: 'row',
  },
  subHeadTxt: {
    fontSize: 16,
  },
  subHeadBtn1: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 5,
  },
  subHeadBtn2: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  subContainer: {
    padding: 20,
    paddingTop: 50,
  },
  subContainerTxt: {
    fontSize: 18,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    alignContent: 'stretch',
    padding: 20,
    paddingBottom: 100,
  },
  selecedBtn: {
    backgroundColor: '#008FFF',
    borderWidth: 0.2,
    borderRadius: 20,
    padding: 2,
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  nonSelecedBtn: {
    borderWidth: 0.2,
    borderRadius: 20,
    padding: 2,
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
});
