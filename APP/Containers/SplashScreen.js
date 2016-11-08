import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';


class SplashScreen extends Component{

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.push({name:'mainScreen'})
        },3000)
    }

    render(){
        return(
            <View style ={{
                flex : 1 ,
                backgroundColor : 'white',
                alignItems :'center',
                justifyContent : 'center'
            }}>
            <Text style={{fontSize:30, color:'blue'}}>Welcome To Florida Blue</Text>
            </View>

        );
    }


}

export default SplashScreen
