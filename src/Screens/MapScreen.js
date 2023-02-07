import React, {useState,useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Header from '../Components/Header';


export default function MapScreen() {
  const mapRegion={
            latitude: 10.92828,
             longitude: 78.73805,
             latitudeDelta: 0.05,
             longitudeDelta: 0.02
  }
  return (
    <View>
            <Header></Header>

            <View style={styles.container}>
            
            <Text style={styles.text}>MAP</Text>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} region={mapRegion}>
                <Marker coordinate={mapRegion} title="marker"/>
                </MapView>
            </View>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 350,
    height: 450,
  },

  mapContainer: {
    padding: 30
  },

  text: {
    fontWeight: '900',
    fontSize: 45,
    paddingTop:25,
    fontStyle:'italic',
    
  }
});
