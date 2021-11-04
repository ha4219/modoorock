import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';

import Box from '../../components/Box';
import Loading from '../../components/Loading';

const MissionScreen = ({navigation}) => {
  const [contents, setContents] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [isEmpty, setEmpty] = React.useState(true);
  const [mergeData, setMergeData] = React.useState({});

  const usable = [
    {
      idx: 0,
      title: 'Dolore magna aliqua',
      img: '../../assets/about_us_top.png',
      content:
        'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
      user_idx: 0,
      data: '2011-11-22',
      price: 10000,
      attraction_id: 0,
    },
    {
      idx: 1,
      img: '../../assets/about_us_top.png',
      title: 'donghadongha',
      content: 'asdfasdfasdfasdf',
      user_idx: 0,
      data: '2011-11-22',
      price: 22222000,
      attraction_id: 0,
    },
  ];

  const complete = [
    {
      idx: 3,
      img: '../../assets/about_us_top.png',
      title: 'Dolore magna aliqua',
      content:
        'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
      user_idx: 0,
      data: '2011-11-22',
      price: 10000,
      attraction_id: 0,
    },
    {
      idx: 4,
      img: '../../assets/about_us_top.png',
      title: 'asdfasdfdonghadongha',
      content: 'aqqqqqqqqqqqqsdfasdfasdfasdf',
      user_idx: 0,
      data: '2011-11-22',
      price: 22222000,
      attraction_id: 0,
    },
  ];

  React.useEffect(() => {
    if (usable || complete) {
      setMergeData(doMerge());
      setEmpty(false);
    }
    setLoading(false);
  }, []);

  const doMerge = () => {
    return [
      {
        title: '이용 가능한 미션 내역',
        data: usable,
      },
      {
        title: '완료한 미션 내역',
        data: complete,
      },
    ];
  };

  const Body = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Image
          style={styles.itemImg}
          source={require('../../assets/about_us_top.png')}
        />
        <View style={styles.itemSubContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemContent}>{item.content}</Text>
          <TouchableOpacity
            style={styles.itemRowRight}
            onPress={() => navigation.navigate('Doing')}>
            <Text style={styles.itemBlue}>점수확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <View>
          {isEmpty ? (
            <View>
              <Image
                style={styles.img}
                source={require('../../assets/noMissionIcon.png')}
              />
              <Text>미션 결제 내역이 없습니다.</Text>
              <Text>결제 후 이용하시기 바랍니다.</Text>
            </View>
          ) : (
            <SectionList
              style={styles.sectionList}
              sections={mergeData}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <Body item={item} />}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.head}>{title}</Text>
              )}
            />
          )}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: ,
  },
  sectionList: {
    padding: 21,
  },
  itemBlue: {
    fontSize: 16,
    color: '#008fff',
  },
  img: {
    marginHorizontal: 20,
  },
  itemView: {
    flex: 1,
    borderWidth: 0.4,
    marginBottom: 40,
    borderRadius: 6,
  },
  itemRowRight: {
    alignItems: 'flex-end',
  },
  itemSubContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  itemImg: {
    height: 180,
    width: 340,
    flex: 1,
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  itemTitle: {
    fontSize: 16,
    marginBottom: 12,
  },
  itemContent: {
    fontSize: 14,
    marginBottom: 12,
  },
  head: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default MissionScreen;
