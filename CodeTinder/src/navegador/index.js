import React, { Component } from 'react';
import {
createSwotchNavigator,
createAppContainer,
SafeAreaView,
createSwitchNavigator,
 TabBarBottom}
from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Perfil } from './../componentes/perfil/Index.js';
import { PRe } from './../componentes/premiumn/index.js';
import { Busca } from './../componentes/busca/Index.js';
import { Conversas } from './../componentes/conversa/Index.js';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const Principal = createMaterialBottomTabNavigator(
{
  Perfil: {
    screen: Perfil,
    navigationOptions: {
      tabBarLabel: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name={'ios-person'} size={24} color={tintColor} />
    )
  }
},

  Cassando: {
    screen: Busca,
    navigationOptions: {
      tabBarLabel: 'Busca',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name={'ios-ice-cream'} size={24} color={tintColor} />
    )
  }
},
  Mensagens: {
    screen: PRe,
    navigationOptions: {
      tabBarLabel: 'Premium',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name={'ios-star'} size={24} color={tintColor} />
    )
  }
},
Algo: {
  screen: Conversas,
  navigationOptions: {
    tabBarLabel: 'Mensagens',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name={'ios-chatbubbles'} size={24} color={tintColor} />
  )
}
},
},
{
// defaultNavigationOptions: ({ navigation }) => ({
//   tabBarIcon: ({ tintColor }) => {
//     const { routeName } = navigation.state;
//     let iconName;
//     if (routeName === 'Perfil') {
//       iconName = 'ios-person';
//     } else if (routeName === 'Cassando') {
//       iconName = 'ios-ice-cream';
//     } else if (routeName === 'Mensagens') {
//       iconName = 'ios-chatbubbles';
//     }
//   },
// }),
activeColor: '#f0edf6',
inactiveColor: '#3e2465',
barStyle: {
  backgroundColor: 'orange',
    },


},
);
export const Veleiro = createAppContainer(
  Principal,
);
