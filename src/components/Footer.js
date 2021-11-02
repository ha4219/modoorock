import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Footer = props => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>주식회사 모두락 | 대표 김은주</Text>
      <Text style={styles.text}>사업자 등록번호 147-33-00122</Text>
      <Text style={styles.text}>
        통신판매업 신고번호 2021-인천연수구-0085호
      </Text>
      <Text style={styles.text}>
        인천광역시 연수구 센트럴로 263, IBS타워 23층 인천관광기업지원센터
      </Text>
      <Text style={styles.text}>상담문의 010-3126-2457</Text>
      <Text style={styles.text}>
        (주)모두락은 부득이한 사정에 의해 확정된 일정이 변경되는 경우 여행자의
        사전 동의를 받습니다.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>서비스 이용약관</Text>
        </TouchableOpacity>
        <Text style={styles.slash}>|</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>개인정보 처리방침</Text>
        </TouchableOpacity>
        <Text style={styles.slash}>|</Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>회사 소개</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  text: {
    marginVertical: 2.5,
    fontSize: 13,
    color: '#616161',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#616161',
  },
  slash: {
    marginHorizontal: 4,
  },
});

export default Footer;
