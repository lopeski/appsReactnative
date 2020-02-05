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
  Inicio: { screen: Perfil },
  Busca: { screen: PRe },
  Pedidos: { screen: Busca },
  Perfil: { screen: Conversas },
},
{
defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === 'Inicio') {
      iconName = 'ios-home';
    } else if (routeName === 'Busca') {
      iconName = 'ios-search';
    } else if (routeName === 'Pedidos') {
      iconName = 'ios-paper';
    } else if (routeName === 'Perfil') {
      iconName = 'ios-person';
    }
    return <Ionicons name={iconName} size={28} color={tintColor} />;
  },
}),
tabBarOptions: {
  activeTintColor: '#0096FF',
  inactiveTintColor: 'gray',
},
},
);
export const Veleiro = createAppContainer(
  Principal,
);
