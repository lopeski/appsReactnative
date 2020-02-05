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
import { Veleiro } from './navegador.js';


const Img = require('./Foto.jpg');
const Img1 = require('./beautiful-blur-blurred-background-733872.jpg');
const Img2 = require('./katiebouman.jpg');
const Img3 = require('./the-naked-woman-main.jpg');

export class Busca extends React.Component {
  static navigationOptions = {
      headerStyle: {
      backgroundColor: '#0096FF',
    },
  };
  constructor(props) {
    super(props);
    this.state = ({
      lista: [
        {
          image: Img1,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img2,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img3,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        }],
      modal: false,
      });
  }

  render() {
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <Title style={{ fontSize: 13}}>PEDIDOS</Title>
      <Veleiro />
    </SafeAreaView>
    );
  }
}
