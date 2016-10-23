
/******Home.js is the main entry point of the application******/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Main from './main'
import ForgotPassword from './Containers/ForgotPassword'
import Register from './Containers/Register'
import WelcomeScreen from './Containers/WelcomeScreen'
import Deductable from './Containers/Deductables'
import PayNow from './Containers/PayNow'
import MyCard from './Containers/MyCard'
import MapView from './Containers/MapView'

//Home class extending Component from react-native

class Home extends Component {

/* renderscene: It Renders screen based on route name*/

renderScene(route,navigator){

if(route.name == 'paynow'){
return <PayNow  navigator={navigator} />
}

if(route.name == 'mainScreen'){
return <Main  navigator={navigator} />
}

if(route.name == 'forgotPassword'){
return <ForgotPassword  navigator={navigator} />
}

if(route.name == 'register'){
return <Register  navigator={navigator} />
}

if(route.name == 'welcomeScreen'){
return <WelcomeScreen  navigator={navigator} />
}

if(route.name == 'mycard'){
return <MyCard  navigator={navigator} />
}

if(route.name == 'deductable'){
return <Deductable  navigator={navigator} />
}
if(route.name == 'mapview'){
      return <MapView  navigator={navigator} />
}

}

/* configureScene : decides the screen pop up direction based on route name (Ex:from bottom, from top, from left ....)*/

configureScene(route){
    switch(route.name){

    case 'mainScreen':
      return Navigator.SceneConfigs.PushFromRight

    case 'forgotPassword':
      return Navigator.SceneConfigs.PushFromRight

    case 'welcomeScreen':
      return Navigator.SceneConfigs.PushFromRight

    case 'paynow':
      return Navigator.SceneConfigs.PushFromRight

    case 'mycard':
      return Navigator.SceneConfigs.PushFromRight

    default :
      return Navigator.SceneConfigs.PushFromRight

}
}

/*** Navigator Component is used to manage navigation between all the screens ****/
/**** initialRoute will decide which screen to show***/
render(){
    /****** returning JSX Component to render on the Screen ************/
    return(
            <Navigator
            initialRoute={{name: 'mainScreen'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={this.configureScene.bind(this)}
            />
    )
}

}

export default Home
