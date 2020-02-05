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
    <SafeAreaView style={{ flex: 1}}>
    <View style={{ paddingLeft: 10, paddingRight : 10}}>
      <DeckSwiper
        dataSource={this.state.lista}
        renderItem={item =>
            <ImageBackground style={{ width: '100%', height: 700}} imageStyle={{borderRadius: 15}} source={item.image}>
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
                <Title style={{ color: 'white', textShadowColor: 'black', fontSize: 35}}>Maluco, 23</Title>
                <Text style={{ color: 'white', textShadowColor: 'black', fontSize: 20}}>Um simple maluco que anda por ai de motoca</Text>
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
                  backgroundColor="orange"
                  color="orange"
                  icon="heart-multiple"
                  style={{ backgroundColor: 'white' }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ paddingBottom: 10}}>
                <TouchableOpacity onPress={() => alert('aqui')}>
                <Avatar.Icon
                  size={60}
                  backgroundColor="orange"
                  color="orange"
                  icon="skull-outline"
                  style={{ backgroundColor: 'white' }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => alert('aqui')}>
                <Avatar.Icon
                  size={60}
                  backgroundColor="orange"
                  color="orange"
                  icon="hexagram"
                  style={{ backgroundColor: 'white' }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            </View>
            </ImageBackground>
        }
      />
      </View>
    </SafeAreaView>
    );
  }
}
