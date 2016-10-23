
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({

registerbackground:  {
      backgroundColor : '#0184ba',
      flex : 1,

  },

  registeralign:{

        alignItems : 'center',
        marginTop : 0

  },

  title2:{

    fontSize : 40,
    color : 'white'

  },

  registerback:{
      marginTop : 30,
      //borderColor : 'black',
      //borderWidth : 1,
      flexDirection : 'row'

  },
  registeralignment:{
      flex : 1,
      marginRight : 5
  },

  registerbutton:{
    flexDirection : 'column',
    alignItems : 'center',
    //width: (window.width * 0.70/2),
    backgroundColor : 'white',
    height : 45,
    borderColor : 'white',
    borderWidth : 6,
    borderRadius : 0.5,
    justifyContent : 'center',
    marginBottom :10,
    marginTop : 10,
    flex : 1
  },
  registertext:{
              fontSize : 16,
              fontWeight : 'bold',
              color : 'black'
  }
});
