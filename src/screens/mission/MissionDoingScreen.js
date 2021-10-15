import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../../components/Button';
import StartModal from '../../components/mission/StartModal';

const MissionDoingScreen = ({route, navigation}) => {
  const [game, setGame] = React.useState(false);
  const onRead = scanResult => {
    console.log(scanResult);
  };

  return (
    <View>
      <StartModal
        visible={game}
        onRead={onRead}
        onRequestClose={() => setGame(false)}
        onPress={() => navigation.navigate('ShortAnswer')}
      />
      <Text>MissionDoingScreen</Text>
      <Text>{route.params.id}</Text>
      <Button name="게임시작" onPress={() => setGame(true)} />
      <Button name="점수확인" />
      <Button name="미션설명" />
      <Button name="지도" />
    </View>
  );
};

export default MissionDoingScreen;

const styles = StyleSheet.create({});
