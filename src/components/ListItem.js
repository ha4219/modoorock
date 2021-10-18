import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export const ListItem = props => {
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

export const FaqListItem = props => {
  const [view, setView] = React.useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={() => setView(!view)}>
      <View style={styles.touch}>
        <Text style={styles.idx}>{props.item.type}</Text>
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

export const QnaListItem = props => {
  const [view, setView] = React.useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={() => setView(!view)}>
      <View style={styles.touch}>
        {props.item.answer === null ? (
          <Text style={styles.qnaTitleFalse}>답변예정</Text>
        ) : (
          <Text style={styles.qnaTitleTrue}>답변완료</Text>
        )}
        <Text style={styles.title}>{props.item.title}</Text>
        {view ? (
          <Image source={require('../assets/downIcon.png')} />
        ) : (
          <Image source={require('../assets/upIcon.png')} />
        )}
      </View>
      {view ? (
        <View>
          <View style={styles.content}>
            <Text>{props.item.content}</Text>
          </View>
          {props.item.answer ? (
            <View style={styles.answer}>
              <Text>{props.item.answer}</Text>
            </View>
          ) : (
            <></>
          )}
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
  writer: {
    marginRight: 12,
    color: '#4d4d4d',
  },
  date: {
    color: '#4d4d4d',
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
    margin: 5,
  },
  answer: {
    backgroundColor: '#F8F8F0',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    width: '60%',
  },
  qnaTitleTrue: {
    backgroundColor: '#9DB4D6',
    padding: 5,
    color: 'white',
  },
  qnaTitleFalse: {
    backgroundColor: '#F2C5A6',
    padding: 5,
    color: 'white',
  },
});
