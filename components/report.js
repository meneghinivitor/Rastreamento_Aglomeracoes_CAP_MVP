import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, SafeAreaView, Alert, AppRegistry, ignoredYellowBox } from 'react-native';
import firebase from '../database/firebase';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
console.disableYellowBox = true;

export default class Report extends Component  {
  constructor (props) {
    super(props);
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      text: '' }
    var db = firebase.firestore();
    this.ref = db.collection('Reports').doc('Usuário: ' + this.state.displayName);
  }
  
  buttonReport=()=>{
    var FieldValue = firebase.firestore.FieldValue;
    this.ref.set({
      Report: this.state.text,
      Horario_Report: FieldValue.serverTimestamp()})
        this.setState({
          text: ''
        })
        console.log( 'Report:', this.state.text );
    Alert.alert(
      'Muito Obrigado,',
      'report feito com sucesso!',
      [
        {text: 'OK', onPress: () => console.log('Report feito com sucesso!'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      },
    );
  }
  render() {
   return (
    <SafeAreaView style={styles.container}> 
    <KeyboardAvoidingView style={styles.background}>
    <Text style={styles.titulo}>Reportar Aglomerações </Text>
     <Text style={styles.textStyle}>
          Você pode nos ajudar a controlar as aglomerações no nosso Campus Alto
          Paraopeba. Caso tenha visto alguma forma de aglomeração, faça sua
          parte e nos avise
        </Text>
        <Text style={styles.textStyle2}>Como ajudar?</Text>
        <Text style={styles.textStyle}>
          Digite abaixo em qual lugar (salas ou escritórios ou biblioteca ou R.U
          ou corredores ou portarias) em que você avistou uma aglomeração e nos enviar:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Reportar lugares com aglomeração"
          autoCorrect={false}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={styles.btnStyle}>
        <Button
          color="#3740FE"
          title="Reportar"
          onPress={() => this.buttonReport()}
        /> 
        </View>
     </KeyboardAvoidingView>
     </SafeAreaView>
   );
 } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 22,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  textStyle: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 14,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'justify',
  },
  textStyle2: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#D3D3D3',
    width: '100%',
    marginTop: 20,
    marginBottom: 25,
    color: '#222',
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 12,
    padding: 10,
  },
  btnStyle: {
    marginBottom: 15,
    marginTop: 15,
  },
});

AppRegistry.registerComponent('clear-text', () => ChangeText)
