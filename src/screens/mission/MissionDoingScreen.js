import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import Button from '../../components/Button';
import StartModal from '../../components/mission/StartModal';

const MissionDoingScreen = ({route, navigation}) => {
  const [tab, setTab] = React.useState(true);
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
  const IMAGE = [
    require('../../assets/mission/0.png'),
    require('../../assets/mission/1.png'),
    require('../../assets/mission/2.png'),
    require('../../assets/mission/3.png'),
    require('../../assets/mission/4.png'),
    require('../../assets/mission/5.png'),
    require('../../assets/mission/6.png'),
    require('../../assets/mission/7.png'),
    require('../../assets/mission/8.png'),
    require('../../assets/mission/9.png'),
  ]
  const Card = ({item, onPress}) => {
    return (
      <TouchableOpacity style={styles.cardView} onPress={onPress}>
        <Image source={IMAGE[item.item.idx]} />
        <Text style={styles.cardTitle}>{item.item.title}</Text>
        <View style={styles.row}>
          <Image source={require('../../assets/mission/point.png')} />
          <Text style={styles.cardPoint}>{item.item.point}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
            data={MISSION}
            renderItem={item => (
              <Card item={item} onPress={() => console.log('hi')} />
            )}
          />
          <View style={styles.totalScoreView}>
            <View style={styles.totalScore}>
              <Text style={styles.score}>통합 점수</Text>
              <View style={styles.total}>
                <Image source={require('../../assets/mission/point.png')} />
                <Text style={styles.totalTxt}>
                  {MISSION.reduce((sum, item) => sum + item.point, 0)}
                </Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <></>
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
});
