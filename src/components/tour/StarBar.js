import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const StarBar = ({value}) => {
  const [a, setA] = React.useState([]);
  React.useEffect(() => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(i < value ? 1 : 0);
    }
    setA(arr);
  }, [value]);

  return (
    <View style={styles.container}>
      {a.map((item, idx) =>
        item ? (
          <Image key={idx} source={require('../../assets/starIcon.png')} />
        ) : (
          <Image key={idx} source={require('../../assets/unstarIcon.png')} />
        ),
      )}
    </View>
  );
};

export default StarBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});
