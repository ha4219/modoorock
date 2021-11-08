import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import VideoRecorder from 'react-native-beautiful-video-recorder';

const VideoScreen = () => {
  const videoRef = React.useRef();

  const videoRecord = async () => {
    if (videoRef && videoRef.current) {
      videoRef.current.open({maxLength: 30}, data => {
        console.log('captured data', data);
      });
    }
  };

  return (
    <View>
      <VideoRecorder style={styles.video} ref={videoRef} />
      <Button title="hi" onPress={() => videoRecord()} />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  video: {
    width: 300,
    height: 200,
    backgroundColor: 'red',
  },
});
