import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {StyleSheet, View, Text} from 'react-native';
import WhiteItems from './WhiteItems';

const Summary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.toptext}>
        You have completed this quiz succesfully
      </Text>
      <View style={styles.circular}>
        <CircularProgress
          value={50}
          activeStrokeWidth={12}
          progressValueColor={'#A020F0'}
          activeStrokeColor={'#A020F0'}
        />
      </View>
      <View style={styles.overviewcon}>
        <View style={styles.overview}>
          <Text>Quiz Overview</Text>
        </View>
      </View>
      <View style={styles.flexcon}>
          <WhiteItems />
          <WhiteItems />
          <WhiteItems />
          <WhiteItems />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d5c8db',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  toptext: {
    textAlign: 'center',
  },
  circular: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
    marginTop: 10,
    backgroundColor: '#A020F0',
    padding: 10,
  },
  overviewcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexcon: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
});

export default Summary;
