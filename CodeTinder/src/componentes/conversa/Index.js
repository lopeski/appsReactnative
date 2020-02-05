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
  Thumbnail,
  Header,
  Container,
} from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import {
  StyleSheet,
  Image,
  Scrollview,
  FlatList,
  View,
  ScrollView
} from 'react-native';

const Img = require('./images.jpeg');
const Img2 = require('./images-1.jpeg');
const Img3 = require('./images-2.jpeg');
const Img4 = require('./images-3.jpeg');
const Img5 = require('./skynews-solo-45-boy-better-know_4842641.jpg');
const Img6 = require('./skynews-anna-florence-reed_4635971.jpg');
const Img7 = require('./indoor-portrait-beautiful-brunette-young-260nw-640005220.jpg');
const Img8 = require('./41628849_1936796329719869_1432107955238469632_o.jpg');

class Mensagens extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      lista: [
        {
          image: Img,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Jay',
        },
        {
          image: Img2,
          text: 'BE',
          time: 'Jeniffer',
        },
        {
          image: Img3,
          text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
          time: 'Carla',
        },
        {
          image: Img4,
          text: 'BE',
          time: 'Ana',
        },
      ],
        lista1: [
          {
            image: Img5,
            text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
            time: 'Fernanda',
          },
          {
            image: Img6,
            text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
            time: 'Aline',
          },
          {
            image: Img7,
            text: 'What a fight! WHAT A RACE!! 🔥 @LewisHamilton wins his seventh #HungarianGP!! YES!! 🙌',
            time: 'Isadora',
          }],
      modal: false,
      });
  }

  render() {
    return (
      <View>
        <ScrollView horizontal style={{ paddingBottom: 10}}>
          {this.state.lista.map((item) => {
                return (
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}>
                    <Image
                      source={item.image}
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 150 / 2,
                      }}
                    />
                    <Text style={{ fontWeight: 'bold', paddingRight: 15}}>{item.time}</Text>
                  </View>
                );
              }
            )
          }
        </ScrollView>
          <Text style={{ paddingLeft: 10, paddingBottom: 10, paddingTop: 15, color: 'orange'}}>Mensagens</Text>
        <FlatList
          data={this.state.lista1}
          ListEmptyComponent={() => {
            return (
              <Content>
                <Body>
                  <Text style={{ size: 40 }}>
                    OPS!
                  </Text>
                  <Text style={{ Color: 'Gray' }}>
                    parece que
                    nao temos nada por aqui
                  </Text>
                </Body>
              </Content>
            );
          }
        }
          renderItem={({ item }) => {
            return (
              <Content>
                <List>
                  <ListItem
                   avatar
                   style={{ height: 95}}
                   onPress={() => this.props.navigation.navigate('Pain', {
                  Dono: item.Dono,
                  Nome: item.nomePrj,
                })}
                  >
                    <Left>
                      <Thumbnail source={item.image} />
                    </Left>
                    <Body>
                      <Text style={{ fontWeight: 'bold'}}>{item.time}</Text>
                      <Text note numberOfLines={2}>{item.text}</Text>
                    </Body>
                  </ListItem>
                </List>
              </Content>
            );
          }}
          keyExtractor={item => item.Key}
        />
      </View>
    );
  }
}
class Feed extends React.Component {
  render() {
    return (
      <Container>
        <Header transparent/>
      </Container>
    );
  }
}

export const Conversas = createMaterialTopTabNavigator(
  {
    Mensagens,
    Feed
  },
  {
    initialRouteName: 'Mensagens',
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
        textDecorationColor: 'red',
        textTransform: 'uppercase'
      },
      activeTintColor: 'orange',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: 'white',
          },
    }
  }
)
