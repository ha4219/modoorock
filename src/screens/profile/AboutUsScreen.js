import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AboutUsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.top_image}
        source={require('../../assets/about_us_top.png')}
        resizeMode="stretch"
      />
      <View style={styles.top_text_container}>
        <Text style={styles.top_text}>모두락은 기존 관광지를</Text>
        <Text style={styles.top_text_blue}>
          "관광게이미피케이션"을 결합하여 재창조{' '}
          <Text style={styles.top_text_inner}>하는</Text>
        </Text>
        <Text style={styles.top_text}>미션 투어 전문 기업 입니다.</Text>
      </View>
      <View style={styles.about_modoorock_container}>
        <Text style={styles.title}>ABOUT US</Text>
        <Image
          style={styles.about_modoorock_image}
          source={require('../../assets/about_modoorock.png')}
        />
        <Text style={styles.desc}>
          시설/콘텐츠의 과잉 투자, 기존 밋밋한 관광 자원에 게임화를 결합하여
          재미있고 액티비티 체험이 가능한 고부가가치 관광 자원으로 재 탄생
          시키고자 합니다.{'\n'}
          {'\n'}여행의 재미 문제 해결을 위해 ‘런닝맨’, ‘1박2일’ 과 같은 인기
          방송프로그램에 융합된 게이미피케이션(게임화)을 효과적으로 결합하여
          관광산업에 활력을 불어넣고자 합니다.{'\n'}
          {'\n'} 국내외 관광객의 이용 편리성을 높이기 위해 ICT를 도구로
          사용하며, 이용만족도를 높이기 위해 미션가이드를 투입하여 일자리 창출에
          기여 합니다.{'\n'}
          {'\n'}
          즐길거리+체험거리+먹거리 등을 결합하여 고부가가치 상품화 및 지속적인
          운영을 목적으로 합니다.
        </Text>
      </View>
      <View style={styles.history_container}>
        <Text style={styles.title}>HISTORY</Text>
        <Image
          style={styles.history_image}
          source={require('../../assets/history.png')}
        />
        <View style={styles.history_list}>
          <View style={styles.history_item}>
            <Text style={styles.history_year}>2015</Text>
            <View style={styles.history_content}>
              <Text style={styles.history_content_line}>
                서울시 북촌한옥마을 IoT 실증 (도심관광활성화 분야) 지원 사업
                선정
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history_list}>
          <View style={styles.history_item}>
            <Text style={styles.history_year}>2016</Text>
            <View style={styles.history_content}>
              <Text style={styles.history_content_line}>
                한국글로벌비즈협도조한 MOU 체결 ('또뷰' IoT 스마트 앨범 사업)
              </Text>
              <Text style={styles.history_content_line}>
                마포구 외국인 팸투어 미션팜&도뷰 플랫폼 지원
              </Text>
              <Text style={styles.history_content_line}>
                예산 윤봉길의사 매헌학교 체험관광 게이미피케이션
              </Text>
              <Text style={styles.history_content_line}>
                미션팜 &또뷰 플랫폼 공급
              </Text>
              <Text style={styles.history_content_line}>
                수제화 명장 전태수 작가 MOU 체결 ('Q-mode' 객체광고 사업)
              </Text>
              <Text style={styles.history_content_line}>
                서울시 자치구 IoT확대사업 참여 추진
              </Text>
              <Text style={styles.history_content_line}>
                백화마을 6차산업 체험관광 게이미피케이션 미션팜&또뷰 플랫폼 공급
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history_list}>
          <View style={styles.history_item}>
            <Text style={styles.history_year}>2017</Text>
            <View style={styles.history_content}>
              <Text style={styles.history_content_line}>
                관광게이미피케이션 ' 북촌런닝맨' 체험관광상품 런칭
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history_list}>
          <View style={styles.history_item}>
            <Text style={styles.history_year}>2018</Text>
            <View style={styles.history_content}>
              <Text style={styles.history_content_line}>
                KTO, 관광벤처기업 지정
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history_list}>
          <View style={styles.history_item}>
            <Text style={styles.history_year}>2019</Text>
            <View style={styles.history_content}>
              <Text style={styles.history_content_line}>
                KTO, MICE 육성기업 선정
              </Text>
              <Text style={styles.history_content_line}>
                문화체육관광부 DMZ투어 개발{' '}
              </Text>
              <Text style={styles.history_content_line}>
                '남산골 런닝맨' 직영, '청계천 진로 체험' 운영
              </Text>
              <Text style={styles.history_content_line}>
                수원 '전통시장' 미션투어 체험상품 개발 및 운영
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.history_list}>
          <View style={styles.history_item}>
            <Text style={styles.history_year}>2020</Text>
            <View style={styles.history_content}>
              <Text style={styles.history_content_line}>
                할로윈 축제 비대면 미션투어 개발 및 운영
              </Text>
              <Text style={styles.history_content_line}>
                생태관광거점 미션투어 상품 개발
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.map_container}>
        <Text style={styles.title}>ADDRESS MAP</Text>
        <Image
          style={styles.map_image}
          source={require('../../assets/map.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  top_image: {
    maxWidth: width,
    maxHeight: 280,
  },
  top_text_container: {
    paddingHorizontal: 10,
    paddingVertical: 50,
  },

  top_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 4,
  },

  top_text_blue: {
    color: '#008fff',
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
  },
  top_text_inner: {
    color: 'black',
    fontWeight: '400',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  about_modoorock_container: {
    marginTop: 50,
  },
  history_container: {
    marginTop: 100,
  },
  about_modoorock_image: {
    width: width - 20,
    height: 120,
    marginHorizontal: 10,
    marginVertical: 30,
    borderRadius: 8,
  },
  history_image: {
    width: width - 20,
    height: 120,
    marginHorizontal: 10,
    marginVertical: 30,
    borderRadius: 8,
  },
  desc: {
    width: width - 20,
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 18,
    lineHeight: 24,
  },
  history_item: {
    marginVertical: 20,
    width: width - 30,
    marginHorizontal: 15,
  },
  history_year: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },

  history_content: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
  },
  history_content_line: {
    marginVertical: 12,
    fontSize: 18,
    lineHeight: 26,
  },
  map_container: {
    marginTop: 100,
  },

  map_image: {
    width: width - 20,
    marginHorizontal: 10,
    borderRadius: 8,
    marginTop: 30,
  },
});

export default AboutUsScreen;
