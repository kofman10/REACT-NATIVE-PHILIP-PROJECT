import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import Question from './components/Question';
import WhiteItems from './components/WhiteItems';
import Summary from './components/Summary';
import Leaderboard from './components/Leaderboard';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.firsttext}>Profile</Text>
        <Text style={styles.firsttext}>Edit</Text>
      </View>
      <View style={styles.container1}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png',
          }}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <View>
            <Image
              style={styles.star}
              source={{
                uri: 'https://w7.pngwing.com/pngs/966/314/png-transparent-white-star-illustration-united-states-email-information-company-white-star-angle-service-rectangle-thumbnail.png',
              }}
            />
            <Text style={styles.secondtext}>13</Text>
            <Text style={styles.secondtext}>hfkajd</Text>
          </View>
          <View>
            <Image
              style={styles.star}
              source={{
                uri: 'https://w7.pngwing.com/pngs/966/314/png-transparent-white-star-illustration-united-states-email-information-company-white-star-angle-service-rectangle-thumbnail.png',
              }}
            />
            <Text style={styles.secondtext}>ajd</Text>
            <Text style={styles.secondtext}>#3</Text>
          </View>
        </View>
        <View style={styles.flexcon}>
          <WhiteItems />
          <WhiteItems />
          <WhiteItems />
          <WhiteItems />
        </View>
        <View style={styles.container2}>
          <View>
            <Text>strength</Text>
            <Text>31.60</Text>
          </View>
          <View>
            <CircularProgress
              value={80}
              activeStrokeWidth={12}
              progressValueColor={'#A020F0'}
              activeStrokeColor={'#A020F0'}
            />
          </View>
        </View>
      </View>
        <Question />
        <Summary />
        <Leaderboard />
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#A020F0',
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firsttext: {
    color: 'white',
    fontSize: 20,
  },
  secondtext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  wrapper: {
    padding: 40,
    backgroundColor: '#d5c8db',
    borderRadius: 30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#A020F0',
    borderRadius: 10,
  },
  star: {
    display: 'flex',
    justifyContent: 'center',
    height: 55,
    width: 55,
  },
  flexcon: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
});

export default App;
