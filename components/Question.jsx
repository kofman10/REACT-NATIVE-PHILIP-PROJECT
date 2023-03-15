import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Nextbutton from './Nextbutton';

const Question = () => {
  return (
    <View style={styles.questionwrapper}>
      <Text>
        Which of the following is not a common protocol used for IOT
        communication
      </Text>
      <View style={styles.optioncontainer}>
        <View style={styles.optionwrapper}>
          <Text>Python</Text>
        </View>
        <View style={styles.optionwrapper1}>
          <Text>Docker</Text>
        </View>
        <View style={styles.optionwrapper1}>
          <Text>AI</Text>
        </View>
        <View style={styles.optionwrapper1}>
          <Text>Go</Text>
        </View>
        <View style={styles.optionwrapper1}>
          <Text>Ruby</Text>
        </View>
        <View style={styles.nextcontainer}> 
         <Nextbutton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionwrapper: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  optioncontainer: {
    padding: 10,
  },
  optionwrapper: {
    backgroundColor: '#A020F0',
    padding: 5,
    marginTop: 10,
  },
  optionwrapper1: {
    backgroundColor: '#f1f1f1',
    padding: 5,
    marginTop: 10,
  },
  nextcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
 
});

export default Question;
