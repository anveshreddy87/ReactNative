import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


//Using airbnb maps
//make sure to react-native link and add keys to android manifest file
import MapView from 'react-native-maps'

class MapsSample extends Component {

  constructor(){
    super();
    this.state = {
      mapLocation : {
      latitude: 40.7127837,
      longitude: -74.00594130000002,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }
    }
  }


  render() {
    return (
      <View style={{flex : 1}}>
        <View style={{flex : 4}}>
        <View style={styles.Mapcontainer}>
        <MapView
        style={styles.map}
         showsUserLocation={true}
        region={this.state.mapLocation}
        />
        </View>
        </View>

        <View style={{flex : 2 }}>
        <TouchableHighlight
        onPress={()=>{

          this.setState({
            mapLocation : {
              latitude: 38.575764,
              longitude: -121.478851,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }

          })
        }}
        >
        <Text style={{padding: 30}}>
        Go To Client Location
        </Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={()=>{

          this.setState({
            mapLocation : {
            latitude: 40.7127837,
            longitude: -74.00594130000002,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }

          })
        }}
        >
        <Text style={{padding:3,paddingLeft:25}}>
        Go Back to Newyork
        </Text>
        </TouchableHighlight>
        </View>

      </View>


    );
  }
}


const styles = StyleSheet.create({
controllers : {
  flex : 1,
  backgroundColor : 'green'
},

 Mapcontainer: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   flex : 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default MapsSample
