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

import UserInput from '../Components/UserInput'
import Button from '../Components/Button'
import StatusBar from '../Components/StatusBar'
import styles from '../Styles/registerstyle'
const window = Dimensions.get('window');
class Register extends Component {




    render(){
      /* {...this.props is used to wrap all the props
          available in the Component into one
          props

          so which is available on child Component as {this.props.somevalue}



      }

      */

    return(
        <View style={styles.registerbackground}>

        <StatusBar leftIcon='chevron-left' title="Register" StatusBarColor="#00BCD4" {...this.props}/>

        <View style={styles.registeralign}>


        <View style={{marginTop : 20,marginBottom : 40}}>
        <Text style={styles.title2}>Florida Blue</Text>
        </View>


        <View>

        <UserInput displayText="First Name" check = ""{...this.props}/>
        <UserInput displayText="Last Name"  {...this.props}/>
        <UserInput displayText="Date Of Birth eg MM/DD/YYYY" secureText = {true} {...this.props}/>


        <View style ={styles.registerback}>
        <View style={styles.registeralignment}>
        <TouchableOpacity
        onPress={()=>{this.props.navigator.push({name:'welcomeScreen'})}}
                style={styles.registerbutton}>

                <Text style={styles.registertext}>Register</Text>
                </TouchableOpacity>
        </View>

        </View>

        </View>

        </View>



    </View>);

    }

}


export default Register
