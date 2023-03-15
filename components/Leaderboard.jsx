import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Leaderboard = () => {
  return (
    <View> 
    <View style={styles.leader}>
      <View style={styles.item}>
        <Text>1st</Text>
        <Image
          style={styles.image1}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png',
          }}
        />
        <Text>Okafor stephen</Text>
      </View>
      <View style={styles.item}>
        <Text>2nd</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png',
          }}
        />
        <Text>Abduljafar Umar</Text>
      </View>
      <View style={styles.item}>
        <Text>3rd</Text>
        <Image
          style={styles.image2}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png',
          }}
        />
        <Text>Abdul Ganiya</Text>
      </View>
    </View>
    <View style = {styles.otherleader}>
        <Text>Mustapha Aliyu</Text>
      </View>
      <View style = {styles.otherleader}>
        <Text>Roberto Carlos</Text>
      </View>
      <View style = {styles.otherleader}>
        <Text>Okesola Victor</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leader: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  item: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  image1: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  container: {
    backgroundColor: '#FFF',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  otherleader : {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Leaderboard;
