import React, {useCallback} from 'react';
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Linking,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';

import HomeProgram from '../../components/HomeProgram';
import HomeAdvertise from '../../components/HomeAdvertise';
import Footer from '../../components/Footer';

import {getAdList, getExpData} from '../../actions/tour';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [exp, setExp] = React.useState([]);
  const [adv, setAdv] = React.useState([]);
  const URL = 'https://www.youtube.com/channel/UCdTY_FXXLbtdNXXN9H3pXrg';
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(URL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(URL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${URL}`);
    }
  }, [URL]);

  const getExp = () => {
    dispatch(getExpData({exp: '전체'})).then(res => setExp(res));
  };

  const getAdv = () => {
    dispatch(getAdList()).then(res => setAdv(res));
  };
  React.useEffect(() => {
    getExp();
    getAdv();
  }, []);

  //TODO scroll+flatlist => sectionlist
  return (
    <ScrollView style={styles.main} nestedScrollEnabled={true}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
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
          source={require('../../assets/banner_image.png')}
        />
      </View>
      <View style={styles.programContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBlue}>미션투어!</Text>
          <Text style={styles.title}>액티비티 체험상품</Text>
        </View>
        <View style={styles.programList}>
          <FlatList
            nestedScrollEnabled={true}
            numColumns={2}
            data={exp}
            renderItem={item => <HomeProgram key={item.idx} item={{item}} />}
          />
        </View>
        <View style={styles.seeMoreButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.seeMoreButton}
            onPress={() => navigation.jumpTo('TourStack')}>
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
        <FlatList
          horizontal={true}
          data={adv}
          showsHorizontalScrollIndicator={false}
          renderItem={item => <HomeAdvertise item={item} />}
        />
        <View style={styles.seeMoreButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.seeMoreButton}
            onPress={handlePress}>
            <Text style={styles.seeMoreButtonText}>영상 더보기</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={12}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
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
    fontSize: 22,
    fontWeight: '500',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
  },
  programList: {
    marginTop: 20,
    flex: 1,
    // flexDirection: 'row',
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
