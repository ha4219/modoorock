import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const HomeProgram = ({item}) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.6}>
      <Image
        style={styles.image}
        source={require('../assets/tempProgram.webp')}
      />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.area}>서울</Text>
        {/*여기에 지역 넣는 것으로 되어있는데 지역은 attraction_idx로 찾아서 넣기*/}
        <Text style={styles.price}>{`${item.price.toLocaleString(
          'ko-KR',
        )}원`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexBasis: '45%',
    height: 340,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1.5%',
  },
  image: {
    width: '100%',
    flexBasis: '60%',
    resizeMode: 'contain',
  },
  dataContainer: {
    flexBasis: '40%',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  area: {
    fontSize: 15,
    color: '#313131',
    marginBottom: 8,
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FF7700',
  },
});

export default HomeProgram;
