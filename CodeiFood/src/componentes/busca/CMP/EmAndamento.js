import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
  List,
  ListItem,
  Body,
  Text,
  Content,
  Right,
  Left,
  CardItem,
  Thumbnail,
  Header,
  Card,
  Title,
  DeckSwiper,
  Icon,
  Container,
} from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { Avatar } from 'react-native-paper';
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const Ilu = require('./ilu.jpg');

export class EmAndamento extends React.Component {
  static navigationOptions = {
      headerStyle: {
      backgroundColor: '#0096FF',
    },
  };


  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image style={{ width: 195, height: 150 }} source={Ilu} />
          <Text>Você ainda não encomendou nada</Text>
          <Text note style={{textAlign: 'center', fontSize: 16}}>Selecione Inicio para conhecer as melhores opções perto de você</Text>
      </View>
    );
  }
}
