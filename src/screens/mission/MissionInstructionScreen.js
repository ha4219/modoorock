import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../components/Loading';
import MissionDescription from '../../components/mission/MissionDescription';

const MissionInstructionScreen = ({route, navigation}) => {
  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);
  const [isSubmit, setSubmit] = React.useState(false);
  const DATA = {
    title: 'Dolore magna aliqua',
    content: 'Lorem ipsum dolor sit amet, ipsum labitur',
    uri: '/Exp/2021-11-09-91272_1.png',
  };

  const getData = () => {
    setData(DATA);
    setLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Image style={styles.img} source={{uri: Config.IMG_URL + data.uri}} />
          <View style={styles.subContainer}>
            <MissionDescription content={data.content} />
          </View>
        </>
      )}
      {isSubmit ? (
        <TouchableOpacity
          style={styles.submit}
          onPress={() => navigation.goBack()}>
          <Text style={styles.submitTxt}>다음</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.nonSubmit}
          onPress={() => setSubmit(!isSubmit)}>
          <Text style={styles.nonSubmitTxt}>다음</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MissionInstructionScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 320,
    height: 230,
    marginBottom: 20,
  },
  subContainer: {
    padding: 20,
    borderWidth: 0.2,
    width: 320,
    backgroundColor: '#ffffff',
  },
  submit: {
    width: 320,
    height: 44,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008fff',
    marginTop: 40,
    borderRadius: 24,
  },
  submitTxt: {
    color: '#ffffff',
    fontSize: 16,
  },
  nonSubmit: {
    width: 320,
    height: 44,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginTop: 40,
    borderRadius: 24,
  },
  nonSubmitTxt: {
    color: '#ffffff',
    fontSize: 16,
  },
});
