import React, { Component } from 'react';
// import NavigationService from './Velas/NVGS.js';
//import { Login } from './Login/Login.js';
import { Veleiro } from './navegador/index.js';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';


export class App extends Component {
  render() {
    return (
        <Veleiro />
    );
  }
}
