import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const ProfileScreen = ({navigation}) => {
  console.log('nav', navigation);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={require('../../assets/personIcon.png')} />
        <View style={styles.subContainer1}>
          <Text>이름</Text>
          <Pressable>
            <Text>개인정보수정</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.subContainer2}>
        <TouchableOpacity style={styles.credit}>
          <Image source={require('../../assets/personIcon.png')} />
          <Text>모든 결제</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.credit}>
          <Image source={require('../../assets/personIcon.png')} />
          <Text>신규 결제</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.credit}>
          <Image source={require('../../assets/personIcon.png')} />
          <Text>리뷰 작성</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.txt}>고객센터</Text>
          <Image source={require('../../assets/label.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Notice')}>
          <Text style={styles.txt}>공지사항</Text>
          <Image source={require('../../assets/label.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.txt}>자주 묻는 질문 FAQ</Text>
          <Image source={require('../../assets/label.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.txt}>문의하기</Text>
          <Image source={require('../../assets/label.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.txt}>모두락 정보</Text>
          <Image source={require('../../assets/label.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.txt}>회사소개</Text>
          <Image source={require('../../assets/label.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.txt}>서비스 소개</Text>
          <Image source={require('../../assets/label.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },
  subContainer: {
    flexDirection: 'row',
    height: 120,
  },
  subContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  credit: {
    width: '33%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    // marginHorizontal: ,
  },
  subContainer1: {
    alignItems: 'center',
  },
  list: {},
  item: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderWidth: 0.3,
    borderRadius: 5,
    margin: 1,
  },
  txt: {
    fontSize: 15,
  },
});

export default ProfileScreen;
