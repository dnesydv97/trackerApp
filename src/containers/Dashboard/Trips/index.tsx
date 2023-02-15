import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TRIPS} from './data';

const Trips = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Trip Listing</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {TRIPS.map(trip => (
            <View style={styles.card} key={trip.id}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    {trip.originAddress}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      marginTop: 4,
                      color: 'green',
                    }}>
                    {trip.startDatetime}
                  </Text>
                </View>
                <View>
                  <View>
                    <Text>{trip.total} USD</Text>
                    <Text>{trip.distance} miles</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View>
                  <Text>Origin</Text>
                  <Text>{trip.originAddress}</Text>
                </View>
                <View>
                  <Text>Destination</Text>
                  <Text>{trip.destinationAddress}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    margin: 10,
    backgroundColor: '#FAFAFA',
  },
  footer: {
    flex: Platform.OS === 'ios' ? 6 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
