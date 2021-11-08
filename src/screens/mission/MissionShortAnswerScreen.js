import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Loading from '../../components/Loading';
import {toast} from '../../components/Toast';

const MissionShortAnswerScreen = ({route, navigation}) => {
  const [value, setValue] = React.useState('');
  const [isSubmit, setSubmit] = React.useState(false);
  const [isCorrect, setCorrect] = React.useState(false);
  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);
  const [hints, setHints] = React.useState([]);
  const [idxHint, setIdxHint] = React.useState(0);
  const DATA = {
    uri: 'https://media.vlpt.us/images/wind1992/post/dbe3fb00-60d8-4fb5-808d-11281017fbd7/docker.png',
    title: 'Dolre magna aliqua',
    content:
      'ajsfkljsadfl;jklsadfl;asdjfkljsdasadfsadfsdafsdafsdafsdafsdafsdafsdafsdafsdafsdafsdafsdafsdafwerewrwerewrqeqwewqeqweqwl;jsasdfdsafasdfdsafdasfsadfdsafsadfsaddsafdsafsdafsdafsdafsadasdfsadfdaf',
    answer: 'dongha',
    hint: 'hi0#hi1#hi2#hi3#hi4',
  };

  React.useEffect(() => {
    setData(DATA);
    setHints(DATA.hint.split('#'));
    setLoading(false);
  }, []);

  const check = () => {
    setCorrect(value === data.answer);
    setSubmit(true);
  };

  const doHint = () => {
    if (idxHint >= hints.length) {
      toast('힌트가 없습니다.');
      return;
    }
    toast(hints[idxHint]);
    setIdxHint(idxHint + 1);
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
                  <Text style={styles.answerTxt}>{data.answer}</Text>
                </View>
                {isCorrect ? (
                  <Text style={styles.cor}>정답입니다!</Text>
                ) : (
                  <Text style={styles.incor}>틀렸습니다!</Text>
                )}
              </>
            ) : (
              <Text style={styles.title}>{data.title}</Text>
            )}
            <ScrollView style={styles.scroll}>
              <Text style={styles.content}>{data.content}</Text>
            </ScrollView>
            {isSubmit ? (
              <></>
            ) : (
              <>
                <TextInput
                  value={value}
                  onChangeText={setValue}
                  placeholder="정답을 입력해주세요"
                />
                <View style={styles.row}>
                  <TouchableOpacity style={styles.btn} onPress={doHint}>
                    <Image
                      source={require('../../assets/mission/searchIcon.png')}
                    />
                    <View style={styles.row}>
                      <Text>힌트보기</Text>
                      <Text style={{color: '#ff7700'}}>{idxHint}</Text>
                      <Text>/{hints.length}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={check}>
                    <Text>정답확인</Text>
                  </TouchableOpacity>
                </View>
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

export default MissionShortAnswerScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 16,
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  scroll: {
    height: 131,
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
  content: {
    fontSize: 16,
    lineHeight: 28,
  },
  row: {
    flexDirection: 'row',
  },
  btn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 4,
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
});
