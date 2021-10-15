import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MissionDescription = ({content}) => {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default MissionDescription;

const styles = StyleSheet.create({});
