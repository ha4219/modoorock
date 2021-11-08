import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const MissionFlatChoice = ({contents, value, setValue}) => {
  const onHandleCheck = e => {
    console.log(e);
  };
  return (
    <View>
      {contents.map((item, idx) => {
        return (
          <>
            {value === idx ? (
              <TouchableOpacity
                key={idx}
                style={styles.containerselected}
                onPress={() => setValue(idx)}>
                <Text style={styles.txtselected}>{item}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={idx}
                style={styles.container}
                onPress={() => setValue(idx)}>
                <Text style={styles.txt}>{item}</Text>
              </TouchableOpacity>
            )}
          </>
        );
      })}
    </View>
  );
};

export default MissionFlatChoice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    borderRadius: 24,
    padding: 8,
    marginBottom: 12,
  },
  containerselected: {
    backgroundColor: '#ffab19',
    borderRadius: 24,
    padding: 8,
    marginBottom: 12,
  },
  txt: {
    fontSize: 13,
    color: '#313131',
  },
  txtselected: {
    fontSize: 13,
    color: '#ffffff',
  }
});
