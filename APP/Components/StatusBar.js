import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  PixelRatio,
  TouchableOpacity

} from 'react-native';
const window = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';

  class StatusBar extends Component{
     constructor(props){
        super(props);
        this.state={
            StatusBarColor : this.props.StatusBarColor
        }
    }

    HandleleftButton(){
        var routeName = this.props.title
        //alert(routeName)
        switch(routeName){
            case 'Forgot Password':
            this.props.navigator.pop()
            break;

            case 'Register':
            this.props.navigator.pop()
            break;

            case 'Pay Now':
            this.props.navigator.pop()
            break;

            case 'My Card':
            this.props.navigator.pop()
            break;

            case 'Navigation':
            this.props.navigator.pop()
            break;

            //case 'Welcome Screen':
            //this.props.navigator.pop()
            //break;
            case 'Deductables':
            this.props.navigator.pop()
            break;

            case 'My Web':
            this.props.navigator.pop()
            break;

            default :
            console.log('menu button')
        }
    }

    render(){

        return(
        <View style={{
          backgroundColor : this.state.StatusBarColor,
          height: PixelRatio.getPixelSizeForLayoutSize(30),
          flexDirection : 'row'

        }}>

        <TouchableOpacity style={{
          flex : 1,
          flexDirection : 'column',
          justifyContent : 'center',
          padding : 15


        }}
        onPress={()=>{
           this.HandleleftButton()
        }}
        >
        <Icon name= {this.props.leftIcon} size={PixelRatio.getPixelSizeForLayoutSize(15)} color="white" />
        </TouchableOpacity>

        <View
        style={{
          flex : 8,
          justifyContent :'center',
          marginLeft : 30
      }}>
        <Text
        style={{
          fontSize : 30,
          color : '#ffffff',
          alignSelf : 'flex-start',
          fontWeight : 'bold',
          //fontStyle : 'italic'

        }}
        >{this.props.title}</Text>
        </View>

        </View>
            );
    }

}



export default StatusBar
