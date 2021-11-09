import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, connect} from 'react-redux';
import Config from 'react-native-config';

import {getUserExpList} from '../../actions/mission';
import {getExpDetail} from '../../actions/tour';

import Box from '../../components/Box';
import Loading from '../../components/Loading';

const MissionScreen = ({navigation, idx, exp}) => {
  const dispatch = useDispatch();
  const [usable, setUsable] = React.useState([]);
  const [complete, setComplete] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [isEmpty, setEmpty] = React.useState(true);
  const [mergeData, setMergeData] = React.useState({});

  const doAPI = () => {
    return dispatch(getUserExpList({idx: idx})).then(res => {
      res.forEach((element, index) => {
        const tmp = exp.filter(item => item.idx === element.expIdx);
        var uri = '';
        try {
          uri = tmp[0].photo.split('#')[0];
        } catch (e) {
          uri = '';
        }
        if (element.clearDate) {
          let box;
          try {
            box = [...complete];
          } catch (e) {
            console.log(e);
          }
          box[index] = {
            ...element,
            uri: uri,
            title: tmp[0].title,
            content: tmp[0].detailContent,
          };
          setComplete(box);
        } else {
          let box;
          try {
            box = [...usable];
          } catch (e) {
            console.log(e);
          }
          box[index] = {
            ...element,
            uri: uri,
            title: tmp[0].title,
            content: tmp[0].detailContent,
          };
          setUsable(box);
        }
        setLoading(false);
      });
    });
  };
  React.useEffect(() => {
    if (usable || complete) {
      setMergeData(doMerge());
      setEmpty(false);
    }
    if (isLoading) {
      doAPI();
    }
  },[isLoading]);

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
          source={{uri: Config.IMG_URL + '/Exp/' + item.uri}}
        />
        <View style={styles.itemSubContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemContent}>{item.content}</Text>
          <TouchableOpacity
            style={styles.itemRowRight}
            onPress={() => navigation.navigate('Doing', {idx: item.idx})}>
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

const mapStateToProps = (state, props) => {
  return {
    idx: state.auth.user.idx,
    name: state.auth.user.name,
    exp: state.tour.exp,
  };
};

export default connect(mapStateToProps)(MissionScreen);
