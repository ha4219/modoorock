import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MissionImage from '../../components/mission/MissionImage';
import MissionDescription from '../../components/mission/MissionDescription';
import MissionFlatChoice from '../../components/mission/MissionFlatChoice';

const MissionMultipleChoiceScreen = ({route, navigation}) => {
  const [value, setValue] = React.useState(0);
  return (
    <View>
      <View style={styles.sub}>
        <Text>title</Text>
        <Text>score</Text>
      </View>
      <MissionImage />
      <MissionDescription content="content" />
      <MissionFlatChoice
        contents={[{content: 1}, {content: 1}, {content: 1}, {content: 1}]}
        setValue={setValue}
      />
    </View>
  );
};

export default MissionMultipleChoiceScreen;

const styles = StyleSheet.create({
  sub: {
    flexDirection: 'row',
  },
});
