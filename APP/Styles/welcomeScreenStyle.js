
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({

  logoWrapper : {
    marginTop : 20,
    alignItems : 'center',
    flexDirection : 'row'
  },
  logoTextContainer : {
    alignItems : 'center',
    flex : 8,
    justifyContent : 'center'
  },
  logo : {
    fontSize : 40,
    fontWeight:'bold',
    fontStyle:'italic',
    color : '#2196F3'

  },
  helpBubble : {
      flex : 1,
      alignItems :'flex-end',
      paddingRight : 10,

  },
  subtitle : {
    fontSize : 20,
    textAlign : 'center',
     marginBottom : 10

  },

  yourbalance : {
    textAlign : 'center',
    //backgroundColor : '#eff1f4',
    //height : 20,
    margin :10,
    borderColor : '#eff1f4',
    borderRadius : 2
},

cardbackground: {
  backgroundColor : '#eff1f4',
  height : 150,
  margin :10,
  borderColor : '#eff1f4',
  borderRadius : 2,

  flexDirection : 'row'

},

paynowbackground :{
  backgroundColor : '#eff1f4',
  //height : 150,
  //margin :10,
  borderColor : '#eff1f4',
  borderRadius : 2,
  padding : 20,
  flex : 1,
  alignItems :'center'

},

 paynow :{
   backgroundColor : 'green',
   width : 70,
   height : 70,
   borderRadius : 70/2,
   alignItems : 'center',
   justifyContent : 'center'
 },

mycardbackground :{
  backgroundColor : '#eff1f4',
  //height : 150,
  //margin :10,
  borderColor : '#eff1f4',
  borderRadius : 2,
  padding : 20,
  flex : 1,
  alignItems :'center'
},

 mycard :{
   backgroundColor : 'purple',
   width : 70,
   height : 70,
   borderRadius : 70/2,
   alignItems : 'center',
   justifyContent : 'center',
   borderColor : 'purple'
 },

careplanbackground:{
  backgroundColor : '#eff1f4',
  //height : 150,
  //margin :10,
  borderColor : '#eff1f4',
  borderRadius : 2,
  padding : 20,
  flex : 1,
  alignItems :'center'
},

careplan: {
    backgroundColor : '#c1077a',
    width : 70,
    height : 70,
    borderRadius : 70/2,
    alignItems : 'center',
    justifyContent : 'center',
    borderColor : 'purple'

},
plandetailsbackground:{
  flexDirection : 'row',
  justifyContent : 'center'
},

deductablebackground:{
  flex : 1,
  alignItems : 'center'
},

fsatransactionbackground:{
  flex : 1,
  alignItems : 'center'
}

//imagestyle:{
//width : window.width,
//height : 400,
//alignSelf:'center'
//}

});
