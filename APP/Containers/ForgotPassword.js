import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';
const window = Dimensions.get('window');
import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
import StatusBar from '../Components/StatusBar'

import styles from '../Styles/ForgotPasswordStyle';


class ForgotPasword extends Component{
    render(){
        return(
        <View style={styles.container}>

        <StatusBar leftIcon='chevron-left' title="Forgot Pasword" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

        <View style={{justifyContent : 'center',marginTop : 50}}>

        <UserInput displayText="Enter Your Registered Email" check = ""{...this.props}/>


        <View style={{flexDirection : 'row'}}>


        <TouchableOpacity style={styles.ButtonStyle} >

                <Text style={styles.textstyle}>Submit</Text>
                </TouchableOpacity>

        </View>

        </View>

        </View>

        );
    }

}

export default ForgotPasword
