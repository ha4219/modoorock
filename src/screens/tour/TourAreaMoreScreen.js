import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {connect, useDispatch} from 'react-redux';

import Header from '../../components/Header';
import {CardTour} from '../../components/tour/Card';

import {getExpDataByAtt} from '../../actions/tour';

const TourAreaMoreScreen = ({route, navigation}) => {
  const {idx} = route.params;
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const getExp = () => {
    dispatch(getExpDataByAtt({idx: idx})).then(res => setData(res));
  };

  React.useEffect(() => {
    getExp();
  }, []);

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
        <Text style={styles.subContainerTxt}>관광지명 미션 투어</Text>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={item => (
          <CardTour
            props={item}
            onPress={() => navigation.navigate('Detail', {idx: item.item.idx})}
          />
        )}
      />
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

const mapStateToProps = (state, props) => {
  return {data: state.tour.data};
};

export default connect(mapStateToProps)(TourAreaMoreScreen);
