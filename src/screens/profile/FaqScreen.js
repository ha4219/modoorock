import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {getFaqList} from '../../actions/board';
import ListContainer from '../../components/ListContainer';
import TextInputField from '../../components/TextInputField';

const FaqScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [select, setSelect] = React.useState(0);
  const selects = ['전체', '상품', '주문/배송/반품', '멤버쉽', '사이트이용'];

  const dofun = () => {
    dispatch(getFaqList({faqType: selects[select]}))
      .then(items => {
        setData(items.reverse());
      })
      .then(() => setLoading(false));
  };

  React.useEffect(() => {
    setLoading(true);
    dispatch(getFaqList({faqType: selects[select]}))
      .then(items => {
        setData(items.reverse());
      })
      .then(() => setLoading(false));
  }, [select]);

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.headtxt}>자주 묻는 질문</Text>
        <TextInputField
          defaultValue="검색어를 입력하세요."
          value={search}
          setValue={setSearch}
        />
        <View style={styles.select}>
          {selects.map((item, index) => (
            <TouchableOpacity onPress={() => setSelect(index)}>
              {index === select ? (
                <Text style={styles.selected}>{item}</Text>
              ) : (
                <Text>{item}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ListContainer data={data} page={10} type={1} />
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
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  selected: {
    borderBottomWidth: 4,
    borderBottomColor: '#008FFF',
    color: '#008FFF',
  },
});

export default FaqScreen;
