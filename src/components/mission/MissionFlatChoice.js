import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MissionFlatChoice = ({contents}) => {
  console.log(contents);
  const onHandleCheck = e => {
    console.log(e);
  };
  return (
    <View>
      {contents.map(item => {
        console.log(item);
        return (
          <View>
            <CheckBox value={true} onValueChange={onHandleCheck} />
            <Text>{item.content}</Text>
          </View>
         );
      })}
    </View>
  );
};

export default MissionFlatChoice;

const styles = StyleSheet.create({});
