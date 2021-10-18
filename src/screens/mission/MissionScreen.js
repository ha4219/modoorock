import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Box from '../../components/Box';

const MissionScreen = ({navigation}) => {
  const [contents, setContents] = React.useState([1,]);
  return (
    <View style={styles.container}>
      {contents ? (
        <ScrollView style={styles.scroll}>
          <Box
            uri={
              'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
            content={'hi'}
            onPress={() => navigation.navigate('Doing', {id: 1})}
          />
          <Box
            uri={
              'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
            content={'hi'}
            onPress={() => navigation.navigate('Doing', {id: 2})}
          />
          <Box
            uri={
              'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
            content={'hi'}
            onPress={() => navigation.navigate('Doing', {id: 3})}
          />
          <Box
            uri={
              'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
            content={'hi'}
            onPress={() => navigation.navigate('Doing', {id: 4})}
          />
          <Box
            uri={
              'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
            content={'hi'}
            onPress={() => navigation.navigate('Doing', {id: 5})}
          />
          <Box
            uri={
              'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            }
            content={'hi'}
            onPress={() => navigation.navigate('Doing', {id: 6})}
          />
        </ScrollView>
      ) : (
        <>
        <Image style={styles.img} source={require('../../assets/logo.png')} />
        <Text>미션 결제 내역이 없습니다.</Text>
        <Text>결제 후 이용하시기 바랍니다.</Text>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: ,
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
});

export default MissionScreen;
