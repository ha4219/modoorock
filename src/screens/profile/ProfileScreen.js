import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faShoppingBasket,
  faCoins,
  faPenSquare,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = ({navigation, name}) => {
  console.log('nav', navigation);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require('../../assets/profile_default.png')}
          style={styles.profileImage}
        />
        <View style={styles.subContainer1}>
          <Text style={styles.name}>dlwhd990</Text>
          {/* 원래 {name} 들어가야되는데 아무것도 안나와서 임시로 씀*/}
          <Pressable style={styles.editInfoContainer}>
            <Text style={styles.editInfo}>개인정보수정</Text>
            <FontAwesomeIcon size={10} icon={faChevronRight} />
          </Pressable>
        </View>
      </View>
      <View style={styles.subContainer2}>
        <TouchableOpacity style={styles.credit}>
          <FontAwesomeIcon
            size={28}
            style={styles.creditIcon}
            icon={faShoppingBasket}
          />
          <Text>결제내역</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.credit}>
          <FontAwesomeIcon size={28} style={styles.creditIcon} icon={faCoins} />
          <Text>포인트내역</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.credit}>
          <FontAwesomeIcon
            size={28}
            style={styles.creditIcon}
            icon={faPenSquare}
          />
          <Text>리뷰작성</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.txtTitle}>고객센터</Text>
        </View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Notice')}>
          <Text style={styles.txt}>공지사항</Text>
          <FontAwesomeIcon size={10} icon={faChevronRight} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Faq')}>
          <Text style={styles.txt}>자주 묻는 질문 FAQ</Text>
          <FontAwesomeIcon size={10} icon={faChevronRight} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Qna')}>
          <Text style={styles.txt}>문의하기</Text>
          <FontAwesomeIcon size={10} icon={faChevronRight} />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.txtTitle}>모두락 정보</Text>
        </View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.txt}>회사소개</Text>
          <FontAwesomeIcon size={10} icon={faChevronRight} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.txt}>서비스 소개</Text>
          <FontAwesomeIcon size={10} icon={faChevronRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 50,
  },
  subContainer: {
    width: '100%',
    paddingHorizontal: 26,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 120,
    paddingTop: 20,
    backgroundColor: 'white',
  },

  profileImage: {
    width: 100,
    height: 100,
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    paddingVertical: 30,
    backgroundColor: 'white',
  },
  credit: {
    width: '33%',
    alignItems: 'center',

    // marginHorizontal: ,
  },
  creditIcon: {
    color: '#008FFF',
    marginBottom: 10,
  },
  subContainer1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 24,
  },
  editInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editInfo: {
    fontSize: 15,
    marginRight: 4,
  },

  list: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 5,
  },
  item: {
    height: 64,
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: '#e9e9e9',
    marginVertical: -0.3,
  },
  txt: {
    fontSize: 15,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
});

const mapStateToProps = (state, props) => {
  return {idx: state.auth.user.idx, name: state.auth.user.name};
};

export default connect(mapStateToProps)(ProfileScreen);
