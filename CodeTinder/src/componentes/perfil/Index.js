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
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import {
  StyleSheet,
  FlatList
} from 'react-native';

const ImgPerfil = require('./gettyimages-589098830-612x612.jpg');

export class Perfil extends React.Component {
  static navigationOptions = {
      headerStyle: {
      backgroundColor: '#0096FF',
    },
  };
  render() {
    return (
    <Container>
      <View style={{
        flex: 1,
        justifyContent: 'space-around',
      }}>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',

      }}>
        <Avatar.Image size={120} source={ImgPerfil} />
        <Title style={{ fontSize: 25}}> Maluco, 32</Title>
        <Text style={{ fontSize: 15}}note> vagabundo desconhecido</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 150,
        }}>
            <TouchableOpacity onPress={() => alert('aqui')}>
              <Avatar.Icon
                size={60}
                backgroundColor="orange"
                color="white"
                icon="asterisk"
                style={{ backgroundColor: 'orange' }}
                 />
              <Text note style={{ fontSize: 15, paddingTop: 65, position: 'absolute'}}>Configuração</Text>
            </TouchableOpacity>
            <View style={{ paddingTop: 50}}>
            <TouchableOpacity onPress={() => alert('aqui')}>
              <Avatar.Icon
                size={60}
                backgroundColor="orange"
                color="white"
                icon="camera"
                style={{ backgroundColor: 'orange' }}
               />
               <Text note style={{ fontSize: 15, paddingTop: 65, position: 'absolute'}}>Adicionar Midia</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => alert('aqui')}>
              <Avatar.Icon
                size={60}
                color="white"
                backgroundColor="orange"
                icon="pencil"
                style={{ backgroundColor: 'orange' }}
              />
              <Text note style={{ fontSize: 15, paddingTop: 65, position: 'absolute'}}>Editar Informações</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Container>
    );
  }
}
