import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
//테스트
const ListItem = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.title_container}>
        <Text numberOfLines={1} style={styles.title}>
          {`[${props.item.type}] ${props.item.title}`}
        </Text>
      </View>
      <View style={styles.data_container}>
        <Text style={styles.writer}>관리자</Text>
        <Text style={styles.date}>
          {props.item.date.slice(0, props.item.date.length - 3)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    height: 80,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title_container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
  },

  data_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  writer: {
    marginRight: 12,
    color: '#4d4d4d',
  },
  date: {
    color: '#4d4d4d',
  },
  touch: {
    flexDirection: 'row',
  },
});

export default ListItem;
