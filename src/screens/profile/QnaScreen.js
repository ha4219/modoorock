import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useDispatch, connect} from 'react-redux';

import {getQnaList, insertQng} from '../../actions/board';
import Button from '../../components/Button';
import ListContainer from '../../components/ListContainer';
import TextInputField from '../../components/TextInputField';

const QnaScreen = ({navigation, idx, name}) => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  const [writer, setWriter] = React.useState(name);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const dofun = () => {
    dispatch(getQnaList({idx: idx}))
      .then(items => {
        console.log(items);
        setData(items.reverse());
      })
      .then(() => setLoading(false));
  };

  const insert = () => {
    dispatch(insertQng({idx: idx, title: title, content: content}))
      .then(res => {
        if (res) {
          setWriter(name);
          setTitle('');
          setContent('');
          setVisible(false);
          dofun();
        }
      });
  };

  React.useEffect(() => {
    dofun();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.insert}>
          <Text>작성자</Text>
          <TextInputField value={writer} setValue={setWriter} />
          <Text>제목</Text>
          <TextInputField value={title} setValue={setTitle} />
          <Text>문의내용</Text>
          <TextInputField
            defaultValue="내용을 입력해주세요."
            value={content}
            setValue={setContent}
          />
          <View style={styles.btns}>
            <Button name="취소" onPress={() => setVisible(false)} />
            <Button name="작성하기" onPress={() => insert()} />
          </View>
        </View>
      </Modal>
      <View style={styles.border}>
        <Text style={styles.headtxt}>문의하기 내역</Text>
      </View>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <ListContainer data={data} page={10} type={2} />
          <Button name="문의하기" onPress={() => setVisible(true)} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headtxt: {
    fontSize: 20,
    padding: 20,
  },
  border: {
    borderBottomWidth: 0.2,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  selected: {
    borderBottomWidth: 4,
    borderBottomColor: '#008FFF',
    color: '#008FFF',
  },
  insert: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 60,
  },
});

const mapStateToProps = (state, props) => {
  return {idx: state.auth.user.idx, name: state.auth.user.name};
};

export default connect(mapStateToProps)(QnaScreen);
