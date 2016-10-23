import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Dimensions,
TextInput,
TouchableHighlight,
TouchableOpacity
} from 'react-native';

import Button from './Components/Button'
import StatusBar from './Components/StatusBar'
import styles from './Styles/mainStyle'

// Dimensions : gets dimenson of current screen
// window.height ; window.width
const window = Dimensions.get('window');

//main class extending Component from react-native
// Displays Login screen
class Main extends Component {
    constructor(){
    super();
    this.state={
    userName : '',
    password : '',
    isLoggedIn : false,
    error : ''
    }
    }

render(){
  /****** returning JSX Component to render on the Screen ************/
    return(
    <View style={styles.container}>

    <View style={{
    alignItems : 'center',
    marginTop : 0
    }}>

    <View style={{marginTop : 20,marginBottom : 40}}>
    <Text style={styles.logo}>Florida Blue</Text>
    </View>

    <View>
    <View style={styles.userInputWrapper}>
    <TextInput style={styles.userInput}
    placeholder="User Name"
    onChangeText = {(text) => {
    this.setState({userName:text})
    }}
    value={this.state.userName} />
    </View>

    <View style={styles.userInputWrapper}>
    <TextInput
    secureTextEntry={true}
    style={styles.userInput}
    placeholder="Password"
    onChangeText = {(text) => {
    this.setState({password:text})
    }}
    value={this.state.password} />
    </View>

    <View>
    <Text style={styles.errorMessage}>{this.state.error}</Text>
    </View>

    <View
    style ={{
    marginTop : 30,
    flexDirection : 'row'
    }} >

    <TouchableOpacity onPress={()=>{
    if(!this.state.userName | !this.state.password){
    this.setState({error: "Please Enter User Name and Password"})
    }else{
    if(this.state.userName == 'member' && this.state.password == '1234'){
    this.props.navigator.push({name : 'welcomeScreen'})
    }else{
    this.setState({error: "Invalid User Name Or Password"})
    }
    }
    }}
    style={styles.leftbutton}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    <View style={{
    flex : 1
    }}>
    <TouchableOpacity onPress={()=>{this.setState({userName : '', password : ''})}}
    style={styles.rightbutton} >
    <Text style={styles.buttonText}>Clear</Text>
    </TouchableOpacity>
    </View>
    </View>

    <View style={{flexDirection : 'row',marginTop :10}}>
    <Text style={styles.register}
    onPress={()=>{this.props.navigator.push({name : 'register'})}}>Register</Text>

    <TouchableHighlight
    onPress={()=>{this.props.navigator.push({name : 'forgotPassword'})}}>
    <Text style={styles.forgotPassword}>Forgot Password ?</Text>
    </TouchableHighlight>
    </View>
    </View>

    </View>
    </View>);
    }
}

export default Main
