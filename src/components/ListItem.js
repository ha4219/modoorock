import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
  const [view, setView] = React.useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={() => setView(!view)}>
      <View style={styles.touch}>
        <Text style={styles.idx}>{props.item.idx}</Text>
        <Text style={styles.title}>{props.item.title}</Text>
        {view ? (
          <Image source={require('../assets/downIcon.png')} />
        ) : (
          <Image source={require('../assets/upIcon.png')} />
        )}
      </View>
      {view ? (
        <View style={styles.content}>
          <Text>{props.item.content}</Text>
        </View>
      ) : <></>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 20,
    // height: 50,
  },
  idx: {
    color: '#008FFF',
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    width: '80%',
  }
});

export default ListItem;
