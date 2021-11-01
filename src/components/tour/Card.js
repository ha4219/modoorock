import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';

import StarBar from './StarBar';

export const Card = ({props, onPress, cnt}) => {
  const {name, content, idx, photo, area} = props.item;
  console.log(name, cnt);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.img}
        source={
          photo === 'nothing'
            ? require('../../assets/noImage.png')
            : {uri: Config.IMG_URL + photo}
        }
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.content}>
          {content.length > 27 ? content.slice(0, 27) + '...' : content}
        </Text>
        <Text style={styles.size}>{cnt}개의 상품</Text>
      </View>
    </TouchableOpacity>
  );
};

export const CardTour = ({props, onPress}) => {
  const {title, reviews, price, uri} = props.item;
  const [star, setStar] = React.useState(0);
  React.useEffect(() => {
    let value = 0;
    reviews.forEach(element => {
      value += element.grade;
    });
    setStar(Math.ceil(value / reviews.length));
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.img} source={{uri: uri}} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <StarBar value={star} />
        <Text style={styles.price}>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 133,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  container: {
    flex: 1,
    margin: 5,
    // width: '40%',
    width: 150,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    marginBottom: 13,
    fontWeight: 'bold',
  },
  subContainer: {
    padding: 12,
    backgroundColor: '#F0F0F0',
  },
  content: {
    fontSize: 12,
    marginBottom: 8,
  },
  size: {
    fontSize: 10,
    color: '#008FFF',
  },
  price: {
    fontSize: 16,
    color: '#008fff',
  },
});
