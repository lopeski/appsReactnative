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
  Card,
  CardItem,
  Title,
} from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

export class Conversas extends React.Component {

  render() {
    return (
    <SafeAreaView style={{ flex: 1}}>
      <Container>
        <Card>
          <CardItem>
            <Left>
              <Image style={{ borderRadius: 180/2, width: 60, height: 60}} source={Img} />
            </Left>
            <Body>
              <Title>Julia Andrade</Title>
              <Text note>Editar perfil</Text>
            </Body>
            <Right />
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Ionicons name={'ios-american-football'} size={28} color={'red'} />
            </Left>
            <Body>
              <Text>
                Ganhe Cupons
              </Text>
            </Body>
            <Right>
            </Right>
          </CardItem>
        </Card>
        <List>
          <ListItem>
            <Text>Notificações</Text>
          </ListItem>
          <ListItem>
            <Text>Carteira</Text>
          </ListItem>
          <ListItem>
            <Text>Cupons</Text>
          </ListItem>
          <ListItem>
            <Text>Favoritos</Text>
          </ListItem>
          <ListItem>
            <Text>Pagamento</Text>
          </ListItem>
          <ListItem>
            <Text>Endereços</Text>
          </ListItem>
          <ListItem>
            <Text>Ajuda</Text>
          </ListItem>
          <ListItem>
            <Text>Configurações</Text>
          </ListItem>
          <ListItem>
            <Text>Segurança</Text>
          </ListItem>
          <ListItem>
            <Text>Sugerir restaurantes</Text>
          </ListItem>
          <ListItem>
            <Text>Seja parceiro</Text>
          </ListItem>
        </List>
      </Container>
    </SafeAreaView>
    );
  }
}
