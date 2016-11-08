import React, { Component } from 'react';
import { WebView,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
const window = Dimensions.get('window');

import StatusBar from '../Components/StatusBar'

class MyWeb extends Component {
  render() {
    return (
        <View style = {{flex : 1 , backgroundColor : 'white'}}>
      <StatusBar leftIcon='chevron-left' title="My Web" StatusBarColor="#00BCD4" navigator={this.props.navigator}/>
      <WebView
        source={{uri: 'https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier'}}
        style={{marginTop: 20}}
      />

      </View>
    );
  }
}

export default MyWeb
