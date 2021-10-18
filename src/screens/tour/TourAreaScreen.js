import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/tour/Card';

const TourAreaScreen = () => {
  const AREA = ['전체','서울','강원','부산','인천','충남','충북','대전','경북','대구','경남','전북','전남','광주','울산','제주'];
  const [selectedValue, setSelectedValue] = React.useState(0);
  const data = [
    {
      title: '월미도',
      area: '인천',
      uri: 'https://www.ilyosisa.co.kr/data/photos/201712/138179_74289_19.jpg',
      description:
        '월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적, 월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적,월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적',
      products: [
        {
          title: '2021 월림픽에 도전하라!',
          uri: 'https://www.ilyosisa.co.kr/data/photos/201712/138179_74289_19.jpg',          description:
            '월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠',
          price: 10000,
          reviews: [
            {
              name: 'dongha',
              comment: '노잼',
              grade: 1,
            },
            {
              name: 'jeongdong',
              comment: '꿀잼',
              grade: 5,
            },
            {
              name: 'jeongha',
              comment: '중간잼',
              grade: 3,
            },
          ],
        },
      ],
    },
    {
      title: '경복궁',
      area: '서울',
      uri: 'https://cdn.pixabay.com/photo/2015/02/14/08/26/gwanghwamun-636113__480.jpg',
      description:
        '월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적, 월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적,월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적',
      products: [
        {
          title: '2021 경림픽에 도전하라!',
          uri: 'https://cdn.pixabay.com/photo/2015/02/14/08/26/gwanghwamun-636113__480.jpg',
          description:
            '경미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠',
          price: 20000,
          reviews: [
            {
              name: 'dongha',
              comment: '씹꿀잼',
              grade: 5,
            },
          ],
        },
      ],
    },
    {
      title: '해운대',
      area: '부산',
      uri: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
      description:
        '월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적, 월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적,월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적',
      products: [
        {
          title: '2021 해림픽에 도전하라!',
          uri: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
          description:
            '경미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠',
          price: 20000,
          reviews: [
            {
              name: 'dongha',
              comment: '씹꿀잼',
              grade: 5,
            },
          ],
        },
        {
          title: '2020 해림픽에 도전하라!',
          uri: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
          description:
            '경미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠',
          price: 40000,
          reviews: [
            {
              name: 'dongha',
              comment: '씹꿀잼',
              grade: 5,
            },
            {
              name: 'dongha',
              comment: '씹꿀잼',
              grade: 4,
            },
          ],
        },
      ],
    },
    {
      title: '월미도',
      area: '인천',
      uri: 'https://www.ilyosisa.co.kr/data/photos/201712/138179_74289_19.jpg',
      description:
        '월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적, 월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적,월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적',
      products: [
        {
          title: '2021 월림픽에 도전하라!',
          uri: 'https://www.ilyosisa.co.kr/data/photos/201712/138179_74289_19.jpg',          description:
            '월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠',
          price: 10000,
          reviews: [
            {
              name: 'dongha',
              comment: '노잼',
              grade: 1,
            },
            {
              name: 'jeongdong',
              comment: '꿀잼',
              grade: 5,
            },
            {
              name: 'jeongha',
              comment: '중간잼',
              grade: 3,
            },
          ],
        },
      ],
    },
    {
      title: '해운대',
      area: '부산',
      uri: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
      description:
        '월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적, 월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적,월미도는 서울특별시 종로구 건되어 정궁으로 이용된 궁궐, 정궁, 사적',
      products: [
        {
          title: '2021 해림픽에 도전하라!',
          uri: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
          description:
            '경미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠',
          price: 20000,
          reviews: [
            {
              name: 'dongha',
              comment: '씹꿀잼',
              grade: 5,
            },
          ],
        },
        {
          title: '2020 해림픽에 도전하라!',
          uri: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
          description:
            '경미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠, 월미도를 소개합니다 짠짠짠',
          price: 40000,
          reviews: [
            {
              name: 'dongha',
              comment: '씹꿀잼',
              grade: 5,
            },
            {
              name: 'dongha',
              comment: '씹꿀잼',
              grade: 4,
            },
          ],
        },
      ],
    },
  ];

  const SmallBtn = ({item}) => {
    if (item.index === selectedValue) {
      return (
        <TouchableOpacity
          style={styles.selecedBtn}
          onPress={() => setSelectedValue(item.index)}>
          <Text style={{color:'#FFFFFF'}}>{item.item}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.nonSelecedBtn}
          onPress={() => setSelectedValue(item.index)}>
          <Text>{item.item}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subHead}>
        <TouchableOpacity style={styles.subHeadBtn1}>
          <Text style={styles.subHeadTxt}>지역</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subHeadBtn2}>
          <Text style={styles.subHeadTxt}>테마</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerTxt}>여행 어디로 가시나요?</Text>
        <FlatList
          numColumns={6}
          data={AREA}
          renderItem={item=><SmallBtn item={item} />}
          />
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={item => <Card props={item} />}
      />
    </View>
  );
};

export default TourAreaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  subHead: {
    flexDirection: 'row',
  },
  subHeadTxt: {
    fontSize: 16,
  },
  subHeadBtn1: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 5,
  },
  subHeadBtn2: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  subContainer: {
    padding: 20,
    paddingTop: 50,
  },
  subContainerTxt: {
    fontSize: 18,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    alignContent: 'stretch',
    padding: 20,
    paddingBottom: 100,
  },
  selecedBtn: {
    backgroundColor: '#008FFF',
    borderWidth: 0.2,
    borderRadius: 20,
    padding: 2,
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  nonSelecedBtn: {
    borderWidth: 0.2,
    borderRadius: 20,
    padding: 2,
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
});
