import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import MissionImage from '../../components/mission/MissionImage';
import MissionDescription from '../../components/mission/MissionDescription';

const ShortAnswerScreen = ({route, navigation}) => {
  return (
    <View>
      <View>
        <Text>title</Text>
        <Text>score</Text>
      </View>
      <MissionImage />
      <MissionDescription content="content"/>
      <View>
        <TextInputField />
        <Button name="확인" />
        <Text>TODO힌트보기</Text>
      </View>
    </View>
  );
};

export default ShortAnswerScreen;

const styles = StyleSheet.create({});
