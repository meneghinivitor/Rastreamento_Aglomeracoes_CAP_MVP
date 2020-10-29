import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Swiper from "react-native-web-swiper";

export default class Boletim extends Component  {
  render() {
   return (
    <View style={{flex:1}}>
    <View style={{flex:1}}>
      <Swiper
       from={0}
       minDistanceForAction={0.1}
       controlsProps={{
         dotsTouchable: true,
         prevPos: 'left',
         nextPos: 'right',
         nextTitle: '>',
         nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
          PrevComponent: ({ onPress }) => (
          <TouchableOpacity onPress={onPress}>
            <Text style={{ color: 'red', fontSize: 24, fontWeight: '500' }}>
              {'<'}
            </Text>
          </TouchableOpacity>
          ),
        }}
      >
      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
   <Text style = {styles.titulo}>
     Boletim de Informações
   </Text>
     <View  style={styles.logo}>
     <Image source={require('../src/img/b1.png')} />
     </View>
   </View>
     <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
       <Text style = {styles.titulo}>
         Boletim de Informações
       </Text>
     <View  style={styles.logo}>
      <Image source={require('../src/img/b2.png')} />
      </View>
   </View>
   <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
     <Text style = {styles.titulo}>
      Boletim de Informações
     </Text>
      <View  style={styles.logo}>
        <Image source={require('../src/img/b3.png')} />
      </View>
      </View>
      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
     <Text style = {styles.titulo}>
      Boletim de Informações
     </Text>
      <View  style={styles.logo}>
        <Image source={require('../src/img/b4.png')} />
      </View>
      </View>
      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
     <Text style = {styles.titulo}>
      Boletim de Informações
     </Text>
      <View  style={styles.logo}>
        <Image source={require('../src/img/b5.png')} />
      </View>
      </View>
  </Swiper>
 </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
  alignItems: 'center',
  backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 20,
    padding: 20,
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  subTitulo: {
    color: '#3201a8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
});