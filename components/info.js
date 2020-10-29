import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';
import firebase from '../database/firebase';

export default class Info extends Component {
    Info2 = () => {
      this.props.navigation.navigate('Info2')
    }
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
    }    
    return (
      <View style={styles.container}>
        <View  style={styles.logo}>
        <Image source={require('../src/img/logoufsj2.png')} />
        </View>
        <Text style = {styles.textStyle}>
          Olá {this.state.displayName}.
        </Text>
        <Text style = {styles.textStyle}>
        Este aplicativo é um protótipo de rastreamento de algomerações e contatos em 
        estágio inicial no Campus Alto Paraopeba da Universidade Federal de
         Sao Joao del Rei e está sujeito a alterações.
        </Text>
        <Text style = {styles.textStyle}>
        Ao usar este aplicativo, você pode ajudar a reduzir a disseminação do coronavírus.
      </Text>
        <View style={styles.btnStyle}>
           <Button
           color="#3740FE"
           title="Continuar"
           onPress={() => this.Info2()}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
  alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 20,
  },
  textStyle: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 20
  },
  btnStyle: {
    marginBottom: 20,
    marginTop: 20,
  },
});