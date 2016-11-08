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


class ForgotPassword extends Component{
  constructor(){
    super();
    this.state={
      Email:''


    }
  }
    render(){
        return(
        <View style={styles.container}>

        <StatusBar leftIcon='chevron-left' title="Forgot Password" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

        <View style={{justifyContent : 'center',marginTop : 50}}>
        <TextInput style={styles.userInput}
        placeholder="Enter Registered Email"
          onChangeText = {(text) => {
          this.setState({Email: text})
          }}
          value={this.state.Email} />

        <View style={{flexDirection : 'row'}}>

        <TouchableOpacity
        onPress={()=>{this.props.navigator.push({name:'MyWeb'})}}
                style={styles.ButtonStyle}>
                <Text style={styles.textstyle}>Submit</Text>
                </TouchableOpacity>
        </View>

        </View>

        </View>

        );
    }

}

export default ForgotPassword
