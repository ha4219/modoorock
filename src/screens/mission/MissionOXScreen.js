import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import MissionImage from '../../components/mission/MissionImage';
import MissionDescription from '../../components/mission/MissionDescription';

const MissionOXScreen = ({route, navigation}) => {
  const [value, setValue] = React.useState('');
  return (
    <View>
      <View>
        <Text>title</Text>
        <Text>score</Text>
      </View>
      <MissionImage />
      <MissionDescription content="content"/>
      <View style={styles.ox}>
        <TouchableOpacity style={{...styles.btn, backgroundColor: 'blue'}}>
          <Text style={styles.txt}>O</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.btn, backgroundColor: 'red'}}>
          <Text style={styles.txt}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MissionOXScreen;

const styles = StyleSheet.create({
  ox: {
    flexDirection: 'row',
  },
  btn: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 50,
    width: '50%',
    alignItems: 'center',
  },
  txt: {
    fontSize: 100,
    color: 'white',
  },
});
