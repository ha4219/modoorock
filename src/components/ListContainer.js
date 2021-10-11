import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import ListItem from './ListItem';

const ListContainer = props => {
  return (
    <FlatList
      data={props.data}
      renderItem={ListItem}
      keyExtractor={item => String(item.id)}
    />
  );
};

export default ListContainer;
