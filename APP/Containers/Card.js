import react,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
const window= Dimensions.get('window');

import StatusBar from '../Components/StatusBar'

class Card extends Component {

  render(){
    return(
      <View>
      <StatusBar leftIcon='chevron-left' title=" My card" StatusBarColor="#00BCD4" navigator={this.props.navigator} />
      <View style={{

        alignItems:'center',
        justifyContent:'center',
      }}>
      <Text style={{fontSize:30}}>
      Your Member Id Card
      </Text>
      </View>
      </View>

    );
  }
}

export default Card
