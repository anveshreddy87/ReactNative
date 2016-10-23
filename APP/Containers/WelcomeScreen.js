import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

//Importing custom made Native Module ToastAndroid
import ToastAndroid from './Toast/maketoast';

// refer to package.json for complete list of dependacies
// Importing ICON from react-native-vector-icons ;
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../Styles/welcomeScreenStyle'
import TabBarNavigator from '../Components/TabBarNavigator'

// Dimensions : gets dimenson of current screen
// window.height ; window.width
const window = Dimensions.get('window');
const wrapperheight = window.height -80
const bottomheight = window.height - wrapperheight
import StatusBar from '../Components/StatusBar'

//Welcome Screen class extending Component from react-native
// Displays Welcome Screen

class WelcomeScreen extends Component{
    render(){

      /****** returning JSX Component to render on the Screen ************/

        return(
           <View style={{flex :1}}>
            <StatusBar leftIcon='menu' title="Welcome Screen" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>

           <ScrollView>
           <View>
               <View style={styles.logoWrapper}>
                <View style={styles.logoTextContainer}>
                <Text style={styles.logo}>
                Florida Blue
                </Text>
                </View>
                </View>

            <Text style={styles.subtitle}>
            Welcom Back John!
            </Text>

            <View style={{borderBottomColor : 'grey',borderBottomWidth : 1}}>
            </View>
            <View>
                  <View>
                    <Text style={styles.yourbalance}>
                    Your Current Balanc is 47474 on Dec 2016
                    </Text>

                    <View style={styles.cardbackground}>
                    <View style={styles.paynowbackground}>
                    <TouchableOpacity style={styles.paynow}
                    onPress={()=>{this.props.navigator.push({name : 'paynow'})}} >
                    <Icon name= 'attach-money' size={40} color="white"/>
                    </TouchableOpacity>
                    <Text>Pay Now</Text>
                    </View>

                    <View style={styles.mycardbackground}>
                    <TouchableOpacity style={styles.mycard}
                    onPress={()=>{this.props.navigator.push({name : 'mycard'})}} >
                    <Icon name= 'credit-card' size={40} color="white" />
                    </TouchableOpacity>
                    <Text>My Card</Text>
                    </View>

                    <View style={styles.careplanbackground}>
                    <TouchableHighlight style={styles.careplan}
                    onPress={()=>{ToastAndroid.show('Super !!!', ToastAndroid.SHORT);}}>
                    <Icon name= 'healing' size={65} color="white" />
                    </TouchableHighlight>
                    <Text>Care Plan</Text>
                    </View>
                    </View>

                    <View>
                    <View style={styles.plandetailsbackground}>
                    <View style ={styles.deductablebackground}>
                    <TouchableHighlight onPress={()=>{this.props.navigator.push({name:'deductable'})}} >
                    <Text style={{fontSize : 30}}>$3220</Text>
                    </TouchableHighlight>
                    <Icon name= 'chevron-right' size={40} color="skyblue" />
                    <Text style = {{textAlign :'center'}}>Deductable Details</Text>
                    </View>

                    <View style ={styles.fsatransactionbackground}>
                    <Text style={{fontSize : 30}}>$3220</Text>
                    <Icon name= 'chevron-right' size={40} color="skyblue" />
                    <Text style = {{textAlign :'center'}}>FSA Transactions</Text>
                    </View>
                    </View>

                    <Image style = {styles.imagestyle}
                    source={require('./resources/weather.png')}
                    resizeMode = {Image.resizeMode.contain} />
                    </View>
                    </View>
                    </View>
                    </View>
           </ScrollView>

           <TabBarNavigator navigator={this.props.navigator}/>
           </View>
        )
    }
}

export default WelcomeScreen
