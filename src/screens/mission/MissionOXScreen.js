import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import MissionImage from '../../components/mission/MissionImage';
import MissionDescription from '../../components/mission/MissionDescription';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

const MissionOXScreen = ({route, navigation}) => {
  const [isSubmit, setSubmit] = React.useState(false);
  const [isCorrect, setCorrect] = React.useState(false);
  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);
  const DATA = {
    uri: 'https://media.vlpt.us/images/wind1992/post/dbe3fb00-60d8-4fb5-808d-11281017fbd7/docker.png',
    title: 'Dolre magna aliqua',
    content:
      'ajsfkljsadfl;jklsadfl;asdjfkljsdal;jsasdfdsafasdfdsafdasfsadfdsafsadfsaddsafdsafsdafsdafsdafsadasdfsadfdaf',
    answer: 0,
  };

  React.useEffect(() => {
    setData(DATA);
    setLoading(false);
  }, []);

  const check = ans => {
    setCorrect(ans === data.answer);
    setSubmit(true);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Image style={styles.img} source={{uri: data.uri}} />
          <View
            style={[
              styles.subContainer,
              isSubmit
                ? isCorrect
                  ? {backgroundColor: 'rgba(0,143,255,0.06)'}
                  : {backgroundColor: 'rgba(255,119,0,0.07)'}
                : {},
            ]}>
            <>
              {isSubmit ? (
                <>
                  {data.answer ? (
                    <View style={styles.subSubContainer}>
                      <Image
                        source={require('../../assets/mission/OIcon.png')}
                      />
                      {isCorrect ? (
                        <Text style={styles.isCorrect}>정답입니다!</Text>
                      ) : (
                        <Text style={styles.isNotCorrect}>틀렸습니다!</Text>
                      )}
                    </View>
                  ) : (
                    <View View style={styles.subSubContainer}>
                      <Image
                        source={require('../../assets/mission/XIcon.png')}
                      />
                      {isCorrect ? (
                        <Text style={styles.isCorrect}>정답입니다!</Text>
                      ) : (
                        <Text style={styles.isNotCorrect}>틀렸습니다!</Text>
                      )}
                    </View>
                  )}
                </>
              ) : (
                <Text style={styles.title}>{data.title}</Text>
              )}
            </>
            <Text style={styles.content}>{data.content}</Text>
            {isSubmit ? (
              <></>
            ) : (
              <View style={styles.ox}>
                <TouchableOpacity
                  style={{marginRight: 40}}
                  onPress={() => check(1)}>
                  <Image source={require('../../assets/mission/OIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => check(0)}>
                  <Image source={require('../../assets/mission/XIcon.png')}/>
                </TouchableOpacity>
              </View>
            )}
          </View>
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
        </>
      )}
    </View>
  );
};

export default MissionOXScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  subContainer: {
    padding: 20,
    borderWidth: 0.2,
    width: 320,
    backgroundColor: '#ffffff',
  },
  img: {
    width: 320,
    height: 230,
    marginBottom: 20,
  },
  ox: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
  btn: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 50,
    width: '50%',
    alignItems: 'center',
  },
  txt: {
    fontSize: 100,
    color: 'white',
  },
  title: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 28,
  },
  content: {
    fontSize: 16,
    lineHeight: 28,
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
  subSubContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  isCorrect: {
    fontSize: 18,
    color: '#008fff',
    marginVertical: 20,
  },
  isNotCorrect: {
    fontSize: 18,
    color: '#ff7700',
    marginVertical: 20,
  },
});
