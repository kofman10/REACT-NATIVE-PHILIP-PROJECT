import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Nextbutton = () => {
  return (
    <View style={styles.next}>
      <Text>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  next: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: '50%',
    backgroundColor: '#A020F0',
    padding: 10,
  },
});

export default Nextbutton;
