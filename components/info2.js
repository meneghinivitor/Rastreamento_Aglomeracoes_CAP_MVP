import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';

export default class Info2 extends Component {
    dash = () => {
      this.props.navigation.navigate('Dashboard')
    }
  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.logo}>
        <Image source={require('../src/img/logoufsj2.png')} />
        </View>
        <Text style = {styles.textStyle}>
         Este aplicativo usa a localização do seu telefone para rastrear automaticamente 
         com quem você entrou em contato dentro do CAP.
        </Text>
        <Text style = {styles.textStyle}>
         Você será alertado caso esteja em uma área de risco de contaminação devida uma aglomeração.
      </Text>
      <Text style = {styles.textStyle}>
        Todos os dados registrados permanecerão anônimos. O uso desse aplicativo 
        ajudará a retardar a disseminação do coronavírus.
      </Text>
        <View style={styles.btnStyle}>
           <Button
           color="#3740FE"
           title="Continuar"
           onPress={() => this.dash()}
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