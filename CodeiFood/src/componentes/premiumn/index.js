import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {
  List,
  ListItem,
  Body,
  Text,
  Content,
  Right,
  Icon,
  Left,
  Thumbnail,
  Header,
  Button,
  Title,
  Container,
} from 'native-base';
import { Avatar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { View, TouchableOpacity, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import {
  StyleSheet,
  FlatList
} from 'react-native';

const Doces = require('./Comida/Doces.jpg');
const Feijuca = require('./Comida/feijoada.jpg');
const Hamburger = require('./Comida/Hamburger.jpg');
const Japonesa = require('./Comida/Japonesa.jpg');
const Pizza = require('./Comida/Pizza.jpeg');
const Promo = require('./Comida/Promo.jpg');
const Salada = require('./Comida/salada.jpg');

export class PRe extends React.Component {
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
          image: Doces,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Doces e Bolo',
          key: 6

        },
        {
          image: Feijuca,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Comida Brasileira',
          key: 5

        },
        {
          image: Hamburger,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Hamburger',
          key: 4

        },
        {
          image: Japonesa,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Temakis',
          key: 3

        },
        {
          image: Pizza,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Pizza',
          key: 2

        },
        {
          image: Promo,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Promoções',
          key: 1
        },
        {
          image: Salada,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Salada',
          key: 7

        },],
      modal: false,
      firstQuery: null,
      });
  }

  render() {
    return (
    <Container style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Header transparent/>
        <Searchbar
          placeholder="Pesquisar um prato"
          onChangeText={query => { this.setState({ firstQuery: query }); }}
          value={this.state.firstQuery}
        />
      <Title style={{ paddingTop: 10, paddingBottom: 10, textAlign: 'left'}}>Categorias</Title>
      <FlatList
        data={this.state.lista}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 10 }}>
            <ImageBackground  style={{ width: 180, height: 97, flex: 1,     backgroundColor: 'rgba(0, 0, 0, .5)'}} imageStyle={{borderRadius: 15}} source={item.image}>
              <View style={{ padding: 10}}>
                <Title style={{ textAlign: 'left', color: 'white', textShadowColor: 'black', textShadowRadius: 500, fontSize: 25}}>{item.time}</Title>
              </View>
            </ImageBackground>
            </View>
          )
        }}
        keyExtractor={item => item.key}
      />
    </Container>
    );
  }
}
