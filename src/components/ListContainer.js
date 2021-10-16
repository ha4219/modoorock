import React, {Component, useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import ListItem from './ListItem';

const sixtyFivePercent = '65%';

const ListContainer = props => {
  const reverseData = props.data.sort((a, b) => {
    return b.idx - a.idx;
  });
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header_title}>공지사항</Text>
        <View style={styles.search_container}>
          <TextInput
            style={styles.search}
            placeholder="검색"
            placeholderTextColor="white"
          />
          <FontAwesomeIcon
            style={styles.search_icon}
            icon={faSearch}
            size={24}
          />
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={reverseData}
        renderItem={ListItem}
        keyExtractor={item => String(item.idx)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: 120,
    backgroundColor: '#008FFF',
    shadow: {
      shadowOffset: {width: 0, height: 10},
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 3,
      backgroundColor: '#0000',
    },
  },
  header_title: {
    textAlign: 'center',
    lineHeight: 65,
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  search_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    width: sixtyFivePercent,
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 10,
    marginLeft: 14,
    paddingLeft: 8,
    paddingRight: 8,
    color: 'white',
    borderRadius: 4,
    fontSize: 20,
    fontWeight: '500',
  },
  search_icon: {
    marginLeft: 14,
    marginBottom: 6,
    color: 'white',
  },
  list: {
    marginBottom: 65,
  },
});

export default ListContainer;
