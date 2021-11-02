import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import HomeProgram from '../components/HomeProgram';
import HomeAdvertise from '../components/HomeAdvertise';

const HomeScreen = ({navigation}) => {
  const programList = React.useState([
    {
      idx: 0,
      title: '2001 월림픽 랭킹에 도전하라!',
      content: '월미도 월림픽에 도전해라',
      user_idx: 1,
      date: 'a',
      price: 20000,
      count: 'a',
      theme: '친구',
      photo: '../assets/tempProgram.webp',
      attraction_idx: 1,
    },
    {
      idx: 1,
      title: '2011 월림픽 랭킹에 도전하라!',
      content: '월미도 월림픽에 도전해라',
      user_idx: 1,
      date: 'a',
      price: 20000,
      count: 'a',
      theme: '친구',
      photo: '../assets/tempProgram.webp',
      attraction_idx: 1,
    },
    {
      idx: 2,
      title: '2021 월림픽 랭킹에 도전하라!',
      content: '월미도 월림픽에 도전해라',
      user_idx: 1,
      date: 'a',
      price: 20000,
      count: 'a',
      theme: '친구',
      photo: '../assets/tempProgram.webp',
      attraction_idx: 1,
    },
    {
      idx: 3,
      title: '2031 월림픽 랭킹에 도전하라!',
      content: '월미도 월림픽에 도전해라',
      user_idx: 1,
      date: 'a',
      price: 20000,
      count: 'a',
      theme: '친구',
      photo: '../assets/tempProgram.webp',
      attraction_idx: 1,
    },
    {
      idx: 4,
      title: '2041 월림픽 랭킹에 도전하라!',
      content: '월미도 월림픽에 도전해라',
      user_idx: 1,
      date: 'a',
      price: 20000,
      count: 'a',
      theme: '친구',
      photo: '../assets/tempProgram.webp',
      attraction_idx: 1,
    },
    {
      idx: 5,
      title: '2051 월림픽 랭킹에 도전하라!',
      content: '월미도 월림픽에 도전해라',
      user_idx: 1,
      date: 'a',
      price: 20000,
      count: 'a',
      theme: '친구',
      photo: '../assets/tempProgram.webp',
      attraction_idx: 1,
    },
  ]);
  const advertiseList = React.useState([
    {
      idx: 0,
      title: '북촌 한옥마을 미션투어',
      photo: 'd',
    },
    {
      idx: 1,
      title: '북촌 한옥마을 미션투어',
      photo: 'd',
    },
    {
      idx: 2,
      title: '북촌 한옥마을 미션투어',
      photo: 'd',
    },
    {
      idx: 3,
      title: '북촌 한옥마을 미션투어',
      photo: 'd',
    },
    {
      idx: 4,
      title: '북촌 한옥마을 미션투어',
      photo: 'd',
    },
  ]);
  {
    /*프로그램, 홍보영상 둘 다 임시데이터임, 서버요청해서 받아오는 법을 몰라서 일단 이렇게 해둠*/
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="검색" />
          <TouchableOpacity>
            <FontAwesomeIcon
              size={20}
              style={styles.searchIcon}
              icon={faSearch}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>보고, 맛보고, 만들고,</Text>
        <Text style={styles.bannerText}>즐기는 문화체험 여행</Text>
        <Image
          style={styles.bannerImage}
          source={require('../assets/banner_image.png')}
        />
      </View>
      <View style={styles.programContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBlue}>미션투어!</Text>
          <Text style={styles.title}>액티비티 체험상품</Text>
        </View>
        <View style={styles.programList}>
          {programList[0] &&
            programList[0].map(item => (
              <HomeProgram key={item.idx} item={item} />
            ))}
        </View>
        <View style={styles.seeMoreButtonContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.seeMoreButton}>
            <Text style={styles.seeMoreButtonText}>상품 더보기</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={12}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.advertiseContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBlue}>홍보영상</Text>
          <Text style={styles.title}>보러가기</Text>
        </View>
        <ScrollView
          style={styles.advertiseList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {advertiseList[0].map(item => (
            <HomeAdvertise key={item.idx} item={item} />
          ))}
        </ScrollView>
        <View style={styles.seeMoreButtonContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.seeMoreButton}>
            <Text style={styles.seeMoreButtonText}>상품 더보기</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={12}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    padding: '5%',
  },

  logo: {
    width: '25%',
    height: 80,
    resizeMode: 'contain',
    marginRight: 30,
  },
  searchContainer: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    backgroundColor: '#F8F8F8',
    zIndex: 1,
  },
  searchInput: {
    width: '85%',
    fontSize: 16,
    zIndex: 2,
  },
  searchIcon: {
    color: '#313131',
    zIndex: 2,
  },
  banner: {
    marginTop: 30,
    marginBottom: 300,
    zIndex: -999,
  },
  bannerText: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 6,
    paddingLeft: 18,
  },
  bannerImage: {
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: -110,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
  },
  titleBlue: {
    color: '#008FFF',
    marginRight: 8,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
  },
  programList: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '1%',
    justifyContent: 'center',
  },
  seeMoreButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeMoreButton: {
    borderWidth: 1.3,
    borderColor: '#2A9FDE',
    borderRadius: 32,
    width: 120,
    height: 35,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  seeMoreButtonText: {
    color: '#2A9FDE',
    fontSize: 16,
  },
  buttonIcon: {
    marginLeft: 4,
    color: '#2A9FDE',
  },
  advertiseContainer: {
    marginTop: 50,
    marginBottom: 100,
  },
  advertiseList: {
    margin: 20,
  },
});

export default HomeScreen;
