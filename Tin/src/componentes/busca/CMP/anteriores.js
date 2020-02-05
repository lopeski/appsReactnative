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

const Img = '';
const Img1 = '';
const Img2 = '';
const Img3 = '';

const Ilu = require('./ilu.jpg');

export class Anteriores extends React.Component {
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
    <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{ width: 195, height: 150 }} source={Ilu} />
        <Text>Você ainda não encomendou nada</Text>
        <Text note style={{textAlign: 'center', fontSize: 16}}>Selecione Inicio para conhecer as melhores opções perto de você</Text>
    </View>
    );
  }
}
