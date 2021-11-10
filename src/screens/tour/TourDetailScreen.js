import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';

import {getExpDetail, getExpReviews} from '../../actions/tour';
import StarBar from '../../components/tour/StarBar';

// TODO MainTourScreen 과  무조건 합쳐야함@!!!!!!
const TourDetailScreen = ({route, navigation}) => {
  const {idx} = route.params;
  const dispatch = useDispatch();
  const [photos, setPhotos] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [content, setContent] = React.useState('');
  const [reviews, setReviews] = React.useState([]);
  const [star, setStar] = React.useState(5);

  const [showPhoto, setShowPhoto] = React.useState(false);
  const [showReview, setShowReview] = React.useState(false);

  const getDetail = () => {
    dispatch(getExpDetail({idx: idx})).then(res => {
      setPhotos(res.photo.split('#'));
      setTitle(res.title);
      setContent(res.content);
      setPrice(res.price);
    });
  };

  const getReviews = () => {
    dispatch(getExpReviews({idx: idx})).then(res => {
      setReviews(res);
      let tmp = 0;
      res.forEach(element => {
        tmp += element.stars;
      });
      setStar(Math.ceil(tmp / res.length));
    });
  };

  React.useEffect(() => {
    getDetail();
    getReviews();
  }, []);

  const createPhoto = () =>
    photos.map((item, index) => (
      <Image
        style={styles.iimg}
        key={index}
        source={{uri: Config.IMG_URL + 'Exp/' + item}}
      />
    ));

  const createReview = () =>
    reviews.map((item, index) => (
      <View style={styles.reviewContainer} key={index}>
        <StarBar value={item.stars} />
        <Text>{item.comment}</Text>
      </View>
    ));
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.img}
        source={
          photos.length === 0
            ? require('../../assets/noImage.png')
            : {uri: Config.IMG_URL + 'Exp/' + photos[0]}
        }
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <StarBar value={star} />
          <Text style={styles.review}>{reviews.length} Reviews</Text>
        </View>
        <Text style={styles.price}>
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Text>
        <Text style={styles.label}>상품정보</Text>
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity
          style={styles.rowBetween}
          onPress={() => setShowPhoto(!showPhoto)}>
          <Text style={styles.label}>상세이미지</Text>
          {showPhoto ? (
            <Text style={styles.label}>-</Text>
          ) : (
            <Text style={styles.label}>+</Text>
          )}
        </TouchableOpacity>
        {showPhoto ? createPhoto() : <></>}
        <TouchableOpacity
          style={styles.rowBetween}
          onPress={() => setShowReview(!showReview)}>
          <Text style={styles.label}>리뷰({reviews.length})</Text>
          {showReview ? (
            <Text style={styles.label}>-</Text>
          ) : (
            <Text style={styles.label}>+</Text>
          )}
        </TouchableOpacity>
        {showReview ? createReview() : <></>}
      </View>
    </ScrollView>
  );
};

export default TourDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  img: {
    resizeMode: 'cover',
    width: 400,
    height: 300,
  },
  subContainer: {
    paddingTop: 23,
    paddingHorizontal: 23,
  },
  title: {
    fontSize: 18,
  },
  reviewContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 21,
    paddingVertical: 10,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  review: {
    fontSize: 12,
    color: '#616161',
    paddingLeft: 10,
  },
  label: {
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 10,
  },
  iimg: {
    resizeMode: 'contain',
    width: '100%',
    height: 400,
  },
});
