import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TourThemeScreen = () => {
  return (
    <View>
      <View style={styles.subHead}>
        <TouchableOpacity>
          <Text>지역</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>테마</Text>
        </TouchableOpacity>
      </View>
      <Text></Text>
    </View>
  );
};

export default TourThemeScreen;

const styles = StyleSheet.create({
  subHead: {
    flex: 1,
    flexDirection: 'row',
  }
});
