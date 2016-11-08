
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({
  container : {
            backgroundColor : '#0184ba',
            flex : 1,
            alignItems : 'center',
            //justifyContent : 'center'
            flexDirection : 'column'
    },
    userInput : {
    alignItems : 'center',
    alignSelf : 'center',
    width : windowSize.width*0.7,
    height : 40,
    backgroundColor : 'white',
    color : 'black'
  },
    ButtonStyle:{
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
    textstyle:{
                fontSize : 16,
                fontWeight : 'bold',
                color : 'black'
    }




});
