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

import ListItem from './ListItem';

const ListContainer = ({data, page}) => {
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
      return range(maxOffset - 4, maxOffset);
    }
    return range(offset - 2, offset + 2);
  };

  const generateBtns = () => {
    var items = getRange();
    return (
      <View style={styles.subBtns}>
        {items.map(item => (
          <TouchableOpacity onPress={()=>setOffset(item)}>
            <Text>{item + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView>
      {/* <FlatList
        data={show}
        renderItem={ListItem}
        keyExtractor={item => String(item.idx)}
      /> */}
      {show.map(item => (
        <ListItem item={item} />
      ))}
      <View style={styles.btns}>
        <TouchableOpacity onPress={()=>setOffset(0)}>
          <Text>{"<<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={doPrev}>
          <Text>{"<"}</Text>
        </TouchableOpacity>
        {generateBtns()}
        <TouchableOpacity onPress={doNext}>
          <Text>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setOffset(maxOffset)}>
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
