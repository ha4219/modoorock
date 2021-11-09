import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {getMissionList} from '../../actions/mission';
import Button from '../../components/Button';
import StartModal from '../../components/mission/StartModal';

const MissionDoingScreen = ({route, navigation}) => {
  const {idx} = route.params;
  const [tab, setTab] = React.useState(true);
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const TITLE = [
    '',
    '단답형',
    'OX퀴즈',
    '4지선다',
    '지시미션',
    '설문',
    '사진',
    '동영상',
    '토퍼',
    '아이템',
  ];
  const IMAGE = [
    require('../../assets/mission/0.png'), // zero is none
    require('../../assets/mission/1.png'),
    require('../../assets/mission/0.png'),
    require('../../assets/mission/7.png'),
    require('../../assets/mission/6.png'),
    require('../../assets/mission/8.png'),
    require('../../assets/mission/3.png'),
    require('../../assets/mission/4.png'),
    require('../../assets/mission/2.png'),
    require('../../assets/mission/5.png'),
    require('../../assets/mission/9.png'),
  ];
  const ROUTING = [
    'Doing',
    'ShortAnswer',
    'OX',
    'Multi',
    'Instruction',
    'Survay',
    'Camera',
    'Video',
    'Filter',
    'Item',
    'Qr',
  ];
  const MISSION = [
    {idx: 0, title: 'OX퀴즈', point: 100},
    {idx: 1, title: '단답형', point: 100},
    {idx: 2, title: '필터미션', point: 100},
    {idx: 3, title: '카메라', point: 100},
    {idx: 4, title: '동영상', point: 100},
    {idx: 5, title: '아이템획득', point: 100},
    {idx: 6, title: '지시미션', point: 100},
    {idx: 7, title: '객관식', point: 100},
    {idx: 8, title: '설문', point: 100},
    {idx: 9, title: 'QR코드', point: 100},
  ];

  const getData = () => {
    dispatch(getMissionList({idx: idx})).then(res => setData(res));
  };
  React.useEffect(() => {
    getData();
  }, []);

  const fakeData = [
    {
      idx: 0,
      id: 'dongha',
      score: 10000,
      bonus: 3456,
    },
    {
      idx: 1,
      id: 'dongha',
      score: 9999,
      bonus: 3456,
    },
    {
      idx: 2,
      id: 'dongha',
      score: 9998,
      bonus: 3456,
    },
    {
      idx: 3,
      id: 'dongha',
      score: 9997,
      bonus: 3456,
    },
    {
      idx: 4,
      id: 'dongha',
      score: 9996,
      bonus: 3456,
    },
    {
      idx: 5,
      id: 'dongha',
      score: 9995,
      bonus: 3456,
    },
    {
      idx: 6,
      id: 'dongha',
      score: 9994,
      bonus: 3456,
    },
    {
      idx: 7,
      id: 'dongha',
      score: 9993,
      bonus: 3456,
    },
    {
      idx: 8,
      id: 'dongha',
      score: 9992,
      bonus: 3456,
    },
    {
      idx: 9,
      id: 'dongha',
      score: 9991,
      bonus: 3456,
    },
    {
      idx: 10,
      id: 'dongha',
      score: 9990,
      bonus: 3456,
    },
    {
      idx: 11,
      id: 'dongha',
      score: 9989,
      bonus: 3456,
    },
    {
      idx: 12,
      id: 'dongha',
      score: 9988,
      bonus: 3456,
    },
    {
      idx: 13,
      id: 'dongha',
      score: 9987,
      bonus: 3456,
    },
    {
      idx: 14,
      id: 'dongha',
      score: 9992,
      bonus: 3456,
    },
    {
      idx: 15,
      id: 'dongha',
      score: 9991,
      bonus: 3456,
    },
    {
      idx: 16,
      id: 'dongha',
      score: 9990,
      bonus: 3456,
    },
    {
      idx: 17,
      id: 'dongha',
      score: 9989,
      bonus: 3456,
    },
    {
      idx: 18,
      id: 'dongha',
      score: 9988,
      bonus: 3456,
    },
    {
      idx: 19,
      id: 'dongha',
      score: 9987,
      bonus: 3456,
    },
  ];

  const Card = ({item, onPress}) => {
    return (
      <TouchableOpacity style={styles.cardView} onPress={onPress}>
        <Image source={IMAGE[item.item.typeIdx]} />
        <Text style={styles.cardTitle}>{TITLE[item.item.typeIdx]}</Text>
        <View style={styles.row}>
          <Image source={require('../../assets/mission/point.png')} />
          <Text style={styles.cardPoint}>{item.item.point}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const Td = ({item}) => {
    if (item.item.idx === 0) {
      return (
        <View style={styles.tdView}>
          <View style={styles.rank}>
            <Image
              style={{width: 19.9, height: 24.8}}
              source={require('../../assets/mission/gold.png')}
            />
          </View>
          <Text style={styles.user}>{item.item.id}</Text>
          <Text style={styles.tdscore}>{item.item.score}</Text>
          <Text style={styles.bonus}>{item.item.bonus}</Text>
          <View style={styles.tdSubView}>
            <Image source={require('../../assets/mission/point.png')} />
            <Text style={styles.sum}>{item.item.bonus + item.item.score}</Text>
          </View>
        </View>
      );
    } else if (item.item.idx === 1) {
      return (
        <View style={styles.tdView}>
          <View style={styles.rank}>
            <Image
              style={{width: 19.9, height: 24.8}}
              source={require('../../assets/mission/silver.png')}
            />
          </View>
          <Text style={styles.user}>{item.item.id}</Text>
          <Text style={styles.tdscore}>{item.item.score}</Text>
          <Text style={styles.bonus}>{item.item.bonus}</Text>
          <View style={styles.tdSubView}>
            <Image source={require('../../assets/mission/point.png')} />
            <Text style={styles.sum}>{item.item.bonus + item.item.score}</Text>
          </View>
        </View>
      );
    } else if (item.item.idx === 2) {
      return (
        <View style={styles.tdView}>
          <View style={styles.rank}>
            <Image
              style={{width: 19.9, height: 24.8}}
              source={require('../../assets/mission/bronze.png')}
            />
          </View>
          <Text style={styles.user}>{item.item.id}</Text>
          <Text style={styles.tdscore}>{item.item.score}</Text>
          <Text style={styles.bonus}>{item.item.bonus}</Text>
          <View style={styles.tdSubView}>
            <Image source={require('../../assets/mission/point.png')} />
            <Text style={styles.sum}>{item.item.bonus + item.item.score}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.tdView}>
        <Text style={styles.rank}>{item.item.idx + 1}</Text>
        <Text style={styles.user}>{item.item.id}</Text>
        <Text style={styles.tdscore}>{item.item.score}</Text>
        <Text style={styles.bonus}>{item.item.bonus}</Text>
        <View style={styles.tdSubView}>
          <Image source={require('../../assets/mission/point.png')} />
          <Text style={styles.sum}>{item.item.bonus + item.item.score}</Text>
        </View>
      </View>
    );
  };

  const Th = () => (
    <View style={styles.tdView}>
      <Text style={styles.rank}>순위</Text>
      <Text style={styles.user}>아이디</Text>
      <Text style={styles.tdscore}>점수</Text>
      <Text style={styles.bonus}>보너스</Text>
      <Text style={styles.sum}>합계</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.Head}>
        <TouchableOpacity
          style={tab ? styles.select : styles.nonselect}
          onPress={() => setTab(true)}>
          <Text style={tab ? styles.selectTxt : styles.nonselectTxt}>
            내점수
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!tab ? styles.select : styles.nonselect}
          onPress={() => setTab(false)}>
          <Text style={!tab ? styles.selectTxt : styles.nonselectTxt}>
            전체점수
          </Text>
        </TouchableOpacity>
      </View>
      {tab ? (
        <>
          <FlatList
            numColumns={3}
            data={data}
            renderItem={(item, idx) => (
              <Card
                item={item}
                onPress={() => navigation.navigate(ROUTING[item.item.typeIdx])}
              />
            )}
          />
          <View style={styles.totalScoreView}>
            <View style={styles.totalScore}>
              <Text style={styles.score}>통합 점수</Text>
              <View style={styles.total}>
                <Image source={require('../../assets/mission/point.png')} />
                <Text style={styles.totalTxt}>
                  {data.reduce((sum, item) => sum + item.point, 0)}
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.flat}>
          <FlatList
            key={'_'}
            keyExtractor={item => '_' + item.idx}
            ListHeaderComponent={Th}
            data={fakeData}
            renderItem={item => <Td item={item} />}
          />
        </View>
      )}
    </View>
  );
};

export default MissionDoingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Head: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.1,
    borderRadius: 23,
    marginVertical: 20,
  },
  select: {
    backgroundColor: '#008fff',
    paddingHorizontal: 58,
    borderRadius: 23,
  },
  selectTxt: {
    color: '#ffffff',
  },
  nonselect: {
    paddingHorizontal: 58,
    borderRadius: 23,
  },
  nonselectTxt: {
    color: '#313131',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.2,
    borderRadius: 4,
    margin: 5,
    //android
    elevation: 7,

    //ios
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 8, height: 16},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardimg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 12,
  },
  cardPoint: {
    fontSize: 16,
    color: '#ff8e0b',
  },
  totalScoreView: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalScore: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#616161',
  },
  score: {
    color: '#ffffff',
    flex: 1,
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
  total: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalTxt: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  tdView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  tdSubView: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rank: {
    flex: 1,
    fontSize: 14,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  user: {
    flex: 1,
    fontSize: 14,
    padding: 1,
    color: '#008fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tdscore: {
    flex: 1,
    fontSize: 14,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  bonus: {
    flex: 1,
    fontSize: 14,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  sum: {
    flex: 1,
    fontSize: 14,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  flat: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
});
