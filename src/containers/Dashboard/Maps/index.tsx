import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Card from '../../../common/card';
const Maps = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 27.670067,
    longitude: 85.348571,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        Alert.alert(
          'Error',
          'Unable to access device location. Please check your device settings.',
        );
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} />
      </MapView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Trips')}>
          <Card title={'Prev Journey'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NewJourney')}>
          <Card title={'Next Journey'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '50%',
  },
});

export default Maps;
