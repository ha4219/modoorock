import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
