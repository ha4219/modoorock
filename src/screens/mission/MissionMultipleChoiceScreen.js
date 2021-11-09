import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import MissionDescription from '../../components/mission/MissionDescription';
import MissionFlatChoice from '../../components/mission/MissionFlatChoice';
import Loading from '../../components/Loading';

import {toast} from '../../components/Toast';

const MissionMultipleChoiceScreen = ({route, navigation}) => {
  const [value, setValue] = React.useState(0);
  const [ptry, setpTry] = React.useState(0);
  const [isSubmit, setSubmit] = React.useState(false);
  const [isCorrect, setCorrect] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const [contents, setContents] = React.useState([]);

  const DATA = {
    uri: 'https://media.vlpt.us/images/wind1992/post/dbe3fb00-60d8-4fb5-808d-11281017fbd7/docker.png',
    title: 'Dolre magna aliqua',
    content:
      'ajsfkljsadfl;jklsadfl;asdjfkljsdal;jsasdfdsafasdfdsafdasfsadfdsafsadfsaddsafdsafsdafsdafsdafsadasdfsadfdaf',
    selected: '1.jeongdongha#2.donghadongha#3.donghajeong#4.jeonghadong',
    answer: 0,
    answerTry: 2,
  };

  React.useEffect(() => {
    setData(DATA);
    setContents(DATA.selected.split('#'));
    setLoading(false);
  }, []);

  const submit = () => {
    if (ptry >= data.answerTry) {
      toast('정답 입력을 초과했습니다. 다음 문제로 넘어가주세요.');
      setSubmit(true);
      setCorrect(false);
      return;
    }
    if (value === data.answer) {
      setSubmit(true);
      setCorrect(true);
    } else {
      setpTry(ptry + 1);
      if (ptry === data.answerTry) {
        setSubmit(true);
        setCorrect(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Image style={styles.img} source={{uri: data.uri}} />
          <View style={styles.subContainer}>
            {isSubmit ? (
              <>
                <View style={styles.answerCon}>
                  <Text style={styles.answerTxt}>{contents[data.answer]}</Text>
                </View>
                {isCorrect ? (
                  <Text style={styles.cor}>정답입니다!</Text>
                ) : (
                  <Text style={styles.incor}>틀렸습니다!</Text>
                )}
                <Text>{data.title}</Text>
                <MissionDescription content={data.content} />
              </>
            ) : (
              <>
                <View style={styles.sub}>
                  <Text>{data.title}</Text>
                </View>
                <MissionDescription content={data.content} />
                <MissionFlatChoice
                  contents={contents}
                  value={value}
                  setValue={setValue}
                />
                <View style={styles.sub}>
                  <Text>정답 입력 횟수</Text>
                  <Text style={{color: '#008fff'}}>{ptry}</Text>
                  <Text>/{data.answerTry}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={submit}>
                  <Text style={styles.btnTxt}>제출</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </>
      )}
      {isSubmit ? (
        <TouchableOpacity style={styles.submit}>
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

export default MissionMultipleChoiceScreen;

const styles = StyleSheet.create({
  answerCon: {
    backgroundColor: '#ffab19',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  answerTxt: {
    fontSize: 16,
    color: '#ffffff',
  },
  cor: {
    textAlign: 'center',
    color: '#ff7700',
    fontSize: 18,
  },
  incor: {
    textAlign: 'center',
    color: '#ff7700',
    fontSize: 18,
    paddingVertical: 2,
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
  sub: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008fff',
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 16,
    color: '#ffffff',
  },
});
