import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';
import firebase from '../database/firebase';

export default class Location extends Component  {
  constructor(props){
    super(props);
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      ready: false,
      where: {lat:null, lng:null},
      error: null,
    }
    var db = firebase.firestore();
    this.ref = db.collection('Localizações').doc('Usuário: ' + this.state.displayName);
 }
 
 componentDidMount(){
    let geoOptions = {
     enableHighAccuracy: true,
     timeOut: 20000,
     maximumAge: 60 * 60 * 24
    };
    this.setState({ready:false, error: null });
    navigator.geolocation.getCurrentPosition( this.geoSuccess, 
    this.geoFailure,
    geoOptions);
 }
 geoSuccess = (position) => {
  var FieldValue = firebase.firestore.FieldValue;
  this.ref.set({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,})
      this.setState({
        text: ''
      })
  firebase.database().ref('Usuários/'+ this.state.displayName ).update({
    
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  }, function(error) {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });
    this.setState({
      ready:true,
      where: {lat: position.coords.latitude,lng:position.coords.longitude }
    })
    this.props.navigation.navigate('Main')
 }
 geoFailure = (err) => {
    this.setState({error: err.message});
 }
  render() {
   return (
   <View style={styles.preloader}>
     <ActivityIndicator size="large" color="#9E9E9E"/>
   </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#3740FE',
    fontSize: 22,
    fontWeight: 'bold',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});