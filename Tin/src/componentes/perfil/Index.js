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
  Form,
  Picker,
  Card,
  CardItem
} from 'native-base';
import { Avatar } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Searchbar } from 'react-native-paper';
import {
  StyleSheet,
  FlatList,
  Image,
  ScrollView
} from 'react-native';

const Img = require('./depositphotos_169372520-stock-photo-diet-fat-man-makes-choice.jpg');
const Doces = require('./Comida/Doces.jpg');
const Feijuca = require('./Comida/feijoada.jpg');
const Hamburger = require('./Comida/Hamburger.jpg');
const Japonesa = require('./Comida/Japonesa.jpg');
const Pizza = require('./Comida/Pizza.jpeg');
const Promo = require('./Comida/Promo.jpg');
const Salada = require('./Comida/salada.jpg');

export class Perfil extends React.Component {
  static navigationOptions = {
      headerStyle: {
      backgroundColor: '#0096FF',
    },
  };
  constructor(props) {
    super(props);
    this.state = ({
      estado1: true,
      onValueChange: null,
      firstQuery: null,
      selected: null,
      lista: [
        {
          Img: Pizza,
          titulo: 'pizza',
          time: '5/3',
        },
        {
          Img: Feijuca,
          titulo: 'Bufe',
          time: '5/5',
        },
        {
          Img: Salada,
          titulo: 'Melancia',
          time: '1/5',
        },
        {
          Img: Promo,
          titulo: 'Caseiro',
          time: '2/5',
        },
      ],
      });
  };
  bt1() {
    if (this.state.estado1 === true) {
      return(
        <View style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          padding: 10,
          flex:1,}}>
          <TouchableOpacity style={{ paddingRight: 10,}} transparent onPress={() => this.setState({ estado1: !this.state.estado1})}>
            <Text style={{ fontSize: 20, color: 'black'}}>Entrega</Text>
          </TouchableOpacity>
          <TouchableOpacity transparent>
              <Text style={{ fontSize: 20, color: 'blue'}}>Retirada</Text>
          </TouchableOpacity>
        </View>
        );
    }
    return(
      <View style={{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        flex:1,}}>
        <TouchableOpacity style={{ paddingRight: 10,}} transparent>
          <Text style={{ fontSize: 20, color: 'blue'}}>Entrega</Text>
        </TouchableOpacity>
        <TouchableOpacity transparent onPress={() => this.setState({ estado1: !this.state.estado1})}>
            <Text style={{ fontSize: 20, color: 'black'}}>Retirada</Text>
        </TouchableOpacity>
      </View>
    );
  }
  corpo() {
    return(
      <ScrollView>
        <View style={{ padding: 10}}>
          <Title style={{
            textAlign: 'auto',
          }}>R. Das Amelias, 79</Title>
        </View>
        <View style={{ padding: 10 }}>
          <Searchbar
            placeholder="Prato ou restaurante"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={this.state.firstQuery}
          />
        </View>
        <View style={{ padding: 10}}>
        <Image
          style={{ height: 200, width: 396}}
          source={Img}/>
        </View>
        <Title style={{paddingLeft: 10, textAlign: 'left'}}>Catigoria</Title>
          <FlatList
            horizontal
            data={this.state.lista}
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
                <View style={{ padding: 10}}>
                  <Image
                    style={{ height: 72, width: 99, borderRadius: 5}}
                    source={item.Img}
                  />
                    <Text note style={{ textAlign: 'center'}}>{item.titulo}</Text>
                </View>
            );
          }}
          keyExtractor={item => item.Key}
        />
        <Title style={{paddingLeft:10, textAlign: 'left'}}>Restaurantes</Title>
        <ScrollView horizontal style={{ flexDirection: 'row', flex:1 }}>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Filtros"
            selectedValue={this.state.selected}
            onValueChange={this.state.selected}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Ordenar"
            selectedValue={this.state.selected}
            onValueChange={this.state.selected}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Entrega grátis"
            selectedValue={this.state.selected}
            onValueChange={this.state.selected}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Distancia"
            selectedValue={this.state.selected}
            onValueChange={this.state.selected}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
        <Form>
          <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Entrega iFood"
            selectedValue={this.state.selected}
            onValueChange={this.state.selected}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
        </ScrollView>
        <FlatList
          data={this.state.lista}
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
              <Content style={{ paddingRight: 10, paddingLeft: 10}}>
                  <Card>
                    <CardItem>
                      <Left>
                        <Image
                          style={{ height: 72, width: 99}}
                          source={item.Img}
                        />
                      </Left>
                      <Body>
                        <Title>
                          {item.titulo}
                        </Title>
                        <Text note>
                          {item.time}
                        </Text>
                        <Text note>
                          a milhões de quilometros
                        </Text>
                      </Body>
                      <Right />
                    </CardItem>
                  </Card>
                </Content>

            );
          }}
          keyExtractor={item => item.Key}
        />
      </ScrollView>
    )
  }
  render() {
    return (
    <Container>
      <Header transparent>
        {this.bt1()}
      </Header>
        {this.corpo()}
    </Container>
    );
  }
}
