import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const WhiteItems = () => {
  return (
    <View style={styles.container}>
      <Text>joytu</Text>
      <Text>ello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default WhiteItems;
