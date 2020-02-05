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
import { View, TouchableOpacity, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import {
  StyleSheet,
  FlatList
} from 'react-native';

const Img = require('./41628849_1936796329719869_1432107955238469632_o.jpg');
const Img1 = require('./images-1.jpeg');
const Img2 = require('./images-2.jpeg');
const Img3 = require('./images-3.jpeg');
const Img4 = require('./images.jpeg');
const Img5 = require('./skynews-solo-45-boy-better-know_4842641.jpg');
const Img6 = require('./skynews-anna-florence-reed_4635971.jpg');
const Img7 = require('./indoor-portrait-beautiful-brunette-young-260nw-640005220.jpg');
const Img8 = require('./132b8ec48549ac9355f882c1f14c68b6.png');

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
        },
        {
          image: Img4,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img5,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img6,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img7,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img8,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },
        {
          image: Img,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'time ago',
        },],
      modal: false,
      });
  }

  render() {
    return (
    <Container>
      <FlatList
        data={this.state.lista}
        numColumns={2}
        style={{ flexBasis: 0}}
        renderItem={({ item }) => {
            return (
            <View style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}>
              <ImageBackground style={{ width: '100%', height: 245, width: 187, flex:1}} imageStyle={{borderRadius: 15}} source={item.image}>
              <View style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                flex:1,
                alignItems: 'flex-end',}}>
                <View style={{
                  alignItems: 'flex-start',
                  paddingBottom: 10,
                  paddingLeft: 10,
                  flexDirection: 'column',
                  flex: 1,
          }}>
                </View>
              <View style={{
                flex: 1,
                paddingRight: 10,
                paddingBottom: 10,
                flexDirection: 'column',
                alignItems: 'flex-end'
              }}>
                <View style={{ paddingBottom: 10}}>
                  <TouchableOpacity onPress={() => alert('aqui')}>
                  <Avatar.Icon
                    size={60}
                    color="orange"
                    icon="heart-multiple"
                    style={{ backgroundColor: 'white' }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              </View>
              </ImageBackground>
            </View>
      );
      }}
      keyExtractor={item => item.nomePrj}
    />

    </Container>
    );
  }
}
