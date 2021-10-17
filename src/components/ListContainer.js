import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {ListItem, FaqListItem} from './ListItem';

const ListContainer = ({data, page, type}) => {
  const [offset, setOffset] = React.useState(0);
  const [maxOffset, setMaxOffset] = React.useState(0);
  const [show, setShow] = React.useState([]);

  React.useEffect(() => {
    setMaxOffset(Math.ceil(data.length / page) - 1);
  }, [data, page]);

  React.useEffect(() => {
    setShow(data.slice(offset * page, (offset + 1) * page));
  }, [offset, page, data]);

  const doPrev = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 1);
    return;
  };

  const doNext = () => {
    if (offset === maxOffset) {
      return;
    }
    setOffset(offset + 1);
    return;
  };

  const range = (start, end) => {
    var res = [];
    for (var i = start; i <= end; i++) {
      res.push(i);
    }
    return res;
  };

  const getRange = () => {
    if (offset <= 2) {
      return range(0, maxOffset > 4 ? 4 : maxOffset);
    } else if (offset >= maxOffset - 2) {
      return range(maxOffset - 4>=0 ?maxOffset - 4:0, maxOffset);
    }
    return range(offset - 2, offset + 2);
  };

  const generateBtns = () => {
    var items = getRange();
    return (
      <View style={styles.subBtns}>
        {items.map(item => (
          <TouchableOpacity key={item} onPress={() => setOffset(item)}>
            <Text>{item + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const generateList = () => {
    if (type === 0) {
      return show.map(item => <ListItem key={item.idx} item={item} />);
    } else if (type === 1) {
      return show.map(item => <FaqListItem key={item.idx} item={item} />);
    } else {
      return show.map(item => <ListItem key={item.idx} item={item} />);
    }
  };

  return (
    <ScrollView>
      {generateList()}
      <View style={styles.btns}>
        <TouchableOpacity key={-999999} onPress={() => setOffset(0)}>
          <Text>{"<<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity key={-1} onPress={doPrev}>
          <Text>{"<"}</Text>
        </TouchableOpacity>
        {generateBtns()}
        <TouchableOpacity key={999999} onPress={doNext}>
          <Text>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity key={1000000} onPress={() => setOffset(maxOffset)}>
          <Text>{">>"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 2,
  },
  subBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 2,
  },
  test: {
    // height:200,
  }
});

export default ListContainer;
