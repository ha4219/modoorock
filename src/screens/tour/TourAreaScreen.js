import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {useDispatch, connect} from 'react-redux';

import {getTourData, getExpData} from '../../actions/tour';
import Header from '../../components/Header';
import {Card, CardExp} from '../../components/tour/Card';
import Loading from '../../components/Loading';

const TourAreaScreen = ({navigation, exp}) => {
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
  const THEME = [
    '전체',
    '농촌체험',
    '액티비티',
    '단체',
    '친구',
    '가족',
    '연인',
  ];
  const [onArea, setOnArea] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState(0);
  const [expType, setExpType] = React.useState(0);
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const doGetList = () => {
    setLoading(true);
    dispatch(getTourData({tourType: AREA[selectedValue]})).then(res => {
      let arr = [];
      res.forEach(element => {
        let len = exp.filter(item => item.attractionIdx === element.idx);
        arr.push({...element, count: len.length});
      });
      setData(arr);
    });
    setLoading(false);
  };

  React.useEffect(() => {
    dispatch(getExpData({exp: '전체'}));
    doGetList();
  }, [selectedValue, expType]);

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

  const SmallBtn1 = ({item}) => {
    if (item.index === expType) {
      return (
        <TouchableOpacity
          style={styles.selecedBtn}
          onPress={() => setExpType(item.index)}>
          <Text style={{color:'#FFFFFF'}}>{item.item}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.nonSelecedBtn}
          onPress={() => setExpType(item.index)}>
          <Text>{item.item}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subHead}>
        <TouchableOpacity
          style={onArea ? styles.subHeadBtn1 : styles.subHeadBtn2}
          onPress={() => setOnArea(!onArea)}>
          <Text style={styles.subHeadTxt}>지역</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={onArea ? styles.subHeadBtn2 : styles.subHeadBtn1}
          onPress={() => setOnArea(!onArea)}>
          <Text style={styles.subHeadTxt}>테마</Text>
        </TouchableOpacity>
      </View>
      {onArea ? (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.subContainerTxt}>여행 어디로 가시나요?</Text>
            <FlatList
              numColumns={6}
              data={AREA}
              renderItem={item => <SmallBtn item={item} />}
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
                  onPress={() =>
                    navigation.navigate('AreaMore', {idx: item.item.idx})
                  }
                />
              )}
            />
          )}
        </>
      ) : (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.subContainerTxt}>여행 어디로 가시나요?</Text>
            <View style={styles.row}>
              <SmallBtn1 item={{index: 0, item: THEME[0]}} />
              <SmallBtn1 item={{index: 1, item: THEME[1]}} />
              <SmallBtn1 item={{index: 2, item: THEME[2]}} />
            </View>
            <View style={styles.row}>
              <SmallBtn1 item={{index: 3, item: THEME[3]}} />
              <SmallBtn1 item={{index: 4, item: THEME[4]}} />
              <SmallBtn1 item={{index: 5, item: THEME[5]}} />
              <SmallBtn1 item={{index: 6, item: THEME[6]}} />
            </View>
          </View>
          {isLoading ? (
            <Loading />
          ) : (
            <FlatList
              numColumns={2}
              data={exp}
              renderItem={item => (
                <CardExp
                  props={item}
                  onPress={() =>
                    navigation.navigate('Detail', {idx: item.item.idx})
                  }
                />
              )}
            />
          )}
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    idx: state.auth.user.idx,
    name: state.auth.user.name,
    exp: state.tour.exp,
  };
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
  row: {
    flexDirection: 'row',
  },
});

export default connect(mapStateToProps)(TourAreaScreen);
