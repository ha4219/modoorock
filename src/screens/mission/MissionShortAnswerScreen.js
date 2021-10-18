import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import MissionImage from '../../components/mission/MissionImage';
import MissionDescription from '../../components/mission/MissionDescription';

const MissionShortAnswerScreen = ({route, navigation}) => {
  const [value, setValue] = React.useState('');
  return (
    <View>
      <View>
        <Text>title</Text>
        <Text>score</Text>
      </View>
      <MissionImage />
      <MissionDescription content="content"/>
      <View>
        <TextInputField setValue={setValue} value={value} />
        <Button name="확인" />
        <Text>TODO힌트보기</Text>
      </View>
    </View>
  );
};

export default MissionShortAnswerScreen;

const styles = StyleSheet.create({});
