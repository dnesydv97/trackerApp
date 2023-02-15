import React from 'react';
import MapView, {Polyline, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        origin={{latitude: 37.7749, longitude: -122.4194}}
        destination={{latitude: 37.8024, longitude: -122.4074}}
        apikey="AIzaSyBiK4VUdMFZtcOPKkIv-hnD2wQjeerXzoI}&package=WS25"
        strokeWidth={3}
        strokeColor="#000"
      />
    </MapView>
  );
};

export default Map;
