import React, {useCallback} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Linking,
} from 'react-native';

import Config from 'react-native-config';

const HomeAdvertise = ({item}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(item.item.content);

    if (supported) {
      await Linking.openURL(item.item.content);
    } else {
      Alert.alert(`Don't know how to open this URL: ${item.item.content}`);
    }
  }, [item.item.content]);
  return (
    <TouchableOpacity
      styles={styles.item}
      activeOpacity={0.7}
      onPress={() => handlePress()}>
      <Image
        style={styles.image}
        source={require('../assets/tempAdvertise.jpeg')}
      />
      <Text style={styles.title}>{item.item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200,
  },
  image: {
    flex: 1,
    width: 300,
    height: 200,
    borderRadius: 10,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    marginTop: 12,
  },
});

export default HomeAdvertise;
