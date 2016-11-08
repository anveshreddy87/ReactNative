import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';

const window = Dimensions.get('window');
import StatusBar from '../Components/StatusBar'
//Using airbnb maps
//make sure to react-native link and add keys to android maniifest file
import MapView from 'react-native-maps'

class MapsSample extends Component {

  constructor(){
    super();
    this.state = {
      mapLocation : {
      latitude: 29.0408424,
      longitude: -81.7226113,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      },
      DoralDescription : ''
    }
  }


  render() {
    return (
      <View style={{flex : 1,backgroundColor : 'white'}}>
      <StatusBar leftIcon='chevron-left' title="Navigation" StatusBarColor="#00BCD4" navigator={this.props.navigator} />

        <View style={{flex : 10}}>

        <View style={styles.Mapcontainer}>
        <MapView
        style={styles.map}
         showsUserLocation={true}
         followsUserLocation={true}
        region={this.state.mapLocation}
        >
        <MapView.Marker
        coordinate = {{longitude:-84.3969412,latitude:30.4673607}}
        title = {"Tallahassee"}
        description = {"2116 Apalachee Parkway, Tallahassee, FL 32301, USA"}
        />

        <MapView.Marker
        coordinate = {{longitude:-81.6431618,latitude:30.4770802}}
        title = {"River City Marketplace"}
        description = {"13141 City Station Dr, Jacksonville, FL 32218 At River City Marketplace"}
        />

        <MapView.Marker
        coordinate = {{longitude:-80.389192,latitude:25.8187165}}
        title = {"Doral"}
        description = {"4855 Town Center Pkwy, Jacksonville, FL 32246"}
        />
        <MapView.Marker
        coordinate = {{longitude:-81.733584,latitude:28.5300238}}
        title = {"Clermont"}
        description = {"4855 Town Center Pkwy, Jacksonville, FL 32246"}
        />

        </MapView>
        </View>
        </View>

        <View style={{flex : 2 }}>
        <Text style={{color:'black', fontSize:30,paddingLeft:10}}>
        All Locations
        </Text>

        <TouchableHighlight
        onPress={()=>{
          //alert("Working !!")
          this.setState({
            mapLocation : {
              latitude: 30.4770802,
              longitude: -81.6431618,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }

          })
        }}
        >
        <Text style={{color : 'blue', fontSize : 20,paddingLeft :10}}>
        River City Marketplace
        </Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={()=>{
          //alert("Working !!")
          this.setState({
            mapLocation : {
            latitude: 28.5300238,
            longitude: -81.733584,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }

          })
        }}
        >
        <Text style={{color : 'blue', fontSize : 20,paddingLeft :10}}>
        Clermont
        </Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={()=>{
          //alert("Working !!")
          this.setState({
            mapLocation : {
            latitude: 25.8187165,
            longitude: -80.389192,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            },
            DoralDescription : "2000 NW 87th Avenue Suites 101 and 102, Doral, FL 33172 Located inside the Gateway Center, Doral"

          })
        }}
        >
        <View>
        <Text style={{color : 'blue', fontSize : 20,paddingLeft :10}}>
        Doral
        </Text>
        <Text>{this.state.DoralDescription}</Text>
        </View>
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
   width: window.width,
   flex : 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default MapsSample
