import React, { Component } from 'react';
import { Text } from 'react-native';
import { createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Icon, Root } from 'native-base';
import { Anteriores } from './CMP/anteriores.js';
import { EmAndamento } from './CMP/EmAndamento.js';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const Principal = createMaterialTopTabNavigator(
{
  Andamento: { screen: EmAndamento },
  Anteriores: { screen: Anteriores },
},
{
tabBarOptions: {
  activeTintColor: '#0096FF',
  inactiveTintColor: 'gray',
  style: {
    backgroundColor: 'white',
  },
  labelStyle: {
  fontSize: 12,
},
  margin: 12
},
  tabBarPosition: 'top',
},
)
export const Veleiro = createAppContainer(
  Principal,
);
