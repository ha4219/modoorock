import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../components/Loading';
import MissionDescription from '../../components/mission/MissionDescription';

const MissionSurveyScreen = ({route, navigation}) => {
  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);
  const [isSubmit, setSubmit] = React.useState(false);
  const [URL, setURL] = React.useState(false);
  const DATA = {
    title: 'Dolore magna aliqua',
    content: 'Lorem ipsum dolor sit amet, ipsum labitur',
    uri: '/Exp/2021-11-09-91272_1.png',
    url: 'https://www.panel.co.kr/user/join',
  };
  const getData = () => {
    setData(DATA);
    setURL(DATA.url);
    setLoading(false);
  };
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(URL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(URL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${URL}`);
    }
    setSubmit(true);
  }, [URL]);

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
            {isSubmit ? (
              <></>
            ) : (
              <TouchableOpacity style={styles.click} onPress={handlePress}>
                <Text style={styles.submitTxt}>설문조사 하러가기</Text>
              </TouchableOpacity>
            )}
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
        <TouchableOpacity style={styles.nonSubmit}>
          <Text style={styles.nonSubmitTxt}>다음</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MissionSurveyScreen;

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
  click: {
    height: 44,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008fff',
    marginTop: 40,
    borderRadius: 24,
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