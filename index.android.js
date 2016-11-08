/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid
} from 'react-native';

import Home from './APP/Home'

BackAndroid.addEventListener('hardwareBackPress', () => {
  return true;
});

AppRegistry.registerComponent('UserLogin', () => Home);
