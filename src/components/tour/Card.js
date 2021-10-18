import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Card = ({props}) => {
  const {title, products, uri, description} = props.item;
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.img} source={{uri: uri}} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>
          {description.length > 27
            ? description.slice(0, 27) + '...'
            : description}
        </Text>
        <Text style={styles.size}>{products.length}개의 상품</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

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
});
