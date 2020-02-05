import React, { Component } from 'react';
// import NavigationService from './Velas/NVGS.js';
//import { Login } from './Login/Login.js';
import { Veleiro } from './navegador/index.js';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

function myFunction() {
  setInterval(function(){ console.log("Hello"); }, 30000);
}
export class App extends Component {
  componentDidMount() {
    {myFunction()}
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <Veleiro />
      </SafeAreaView>
    );
  }
}
