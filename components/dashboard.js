import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import firebase from '../database/firebase';

export default class Dashboard extends Component {
  location = () => {
    this.props.navigation.navigate('Location')
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  render() {
    return (
      <View style={styles.container2}>
        <Text style = {styles.textStyle}>
          Permitir acesso
        </Text>
        <View  style={styles.logo}>
        <Image source={require('../src/img/icon2.png')} />
        </View>
        <Text style = {styles.textStyle2}>
        Para o funcionamento correto deste aplicativo, somente você deve usar este
        dispositivo móvel e você precisará permitir o acesso à localização GPS
        em seu celular.
      </Text>
      <View style={styles.btnStyle}>
       <Button
          color="#3740FE"
          title="Permitir acesso à localização"
          onPress={() => this.location()}
        />
        </View>
        <View style={styles.btnStyle}>
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 20,
  },
  textStyle: {
    color: '#3740FE',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 20
  },
  textStyle2: {
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 12,
  },
  btnStyle: {
    marginBottom: 12,
    marginTop: 12,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 12,
    },
});