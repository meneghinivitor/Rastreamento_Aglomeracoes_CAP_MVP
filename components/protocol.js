import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Linking, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import firebase from '../database/firebase';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

export default class Protocol extends Component  {
  constructor(props){
    super(props);
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      ready: false,
      where: {lat:null, lng:null},
      error: null,
    }
 }
 componentDidMount = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }

  let token = await Notifications.getExpoPushTokenAsync();
  console.log( token );
  firebase.database().ref('Usuários/'+ this.state.displayName ).update({
    token: token,
  }, function(error) {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });
}
  render() {
   return (
     <SafeAreaView style={styles.container}>
       <ScrollView style={styles.containerScroll}>
         <Text style={styles.tituloPrincipal}>Protocolos e Orientações</Text>
         <Text style={styles.titulo}>Protocolos em Minas Gerais</Text>
         <Text style={styles.subTitulo} onPress={() => Linking.openURL('http://coronavirus.saude.mg.gov.br/protocolos')}>
           http://coronavirus.saude.mg.gov.br/protocolos
         </Text>
         <Text style={styles.titulo}>Orientações</Text>
         <View style={styles.alinha}>
           <Image  style={styles.alinhaDireita} source={require('../src/img/distancia.png')} />
             <View style={styles.textoEsquerda}>
               <Text style={styles.texto}>Mantenha uma distância de 2 metros em locais públicos</Text>
             </View>
          </View>
          <View style={styles.alinha}>
           <Image  style={styles.alinhaEsquerda} source={require('../src/img/mascara.png')} />
             <View style={styles.textoDireita}>
               <Text style={styles.texto}>Lembre-se de usar máscara quando sair de casa</Text>
            </View>
          </View>
          <View style={styles.alinha}>
            <Image  style={styles.alinhaDireita} source={require('../src/img/lenco.png')} />
             <View style={styles.textoEsquerda}>
               <Text style={styles.texto}>
                 Cubra seu nariz e boca com o braço dobrado ou um lenço ao tossir ou expirar
               </Text>
             </View>
         </View>
         <View style={styles.alinha}>
          <Image  style={styles.alinhaEsquerda} source={require('../src/img/lavarmao.png')} />
           <View style={styles.textoDireita}>
             <Text style={styles.texto}>
               Lave suas mãos com frequência. Use água e sabão ou álcool em gel 70%{' '}
             </Text>
           </View>
         </View>
         <View style={styles.alinha}>
           <Image  style={styles.alinhaDireita} source={require('../src/img/desinfeta.png')} />
             <View style={styles.textoEsquerda}>
               <Text style={styles.texto}>
                 Desinfete seu celular, chaves e cartôes bancáros com álcool em 70%
                 cuidadosamente{' '}
               </Text>
             </View>
          </View>
         <View style={styles.alinha}>
           <Image  style={styles.alinhaEsquerda} source={require('../src/img/medico.png')} />
             <View style={styles.textoDireita}>
               <Text style={styles.texto}>
                 Procure atendimento médico em caso de febre, tosse e dificuldades
                 respiratórias{' '}
              </Text>
            </View>
         </View>
         <View style={styles.alinha}>
           <Image  style={styles.alinhaDireita} source={require('../src/img/casa.png')} />
             <View style={styles.textoEsquerda}>
               <Text style={styles.texto}>
                 Fique em casa se você estiver com sintomas e se sentir indisposto
               </Text>
             </View>
          </View>
          <View style={styles.textoCentro}>
          <Text style={styles.texto}>
           CUIDE- SE
         </Text>
        </View>
     </ScrollView>
   </SafeAreaView>
   );
 } 
}
const styles = StyleSheet.create({
  container: {

    marginTop: Constants.statusBarHeight,
    width: '100%',
    height: '100%',
  },
  containerScroll: {

    marginHorizontal: 10,
  },
  tituloPrincipal: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 18,
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
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  texto: {
    color: '#000',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    textAlign: 'justify',
    width: '43%',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,

  },
  textoDireita: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'flex-end',
  },
  textoEsquerda: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'flex-start',
  },
  textoCentro: {
    marginBottom: 50,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  alinha: {
    alignContent: 'stretch',
  },
  alinhaDireita: {
    marginLeft: 180,
    position: 'absolute'
  },
  alinhaEsquerda: {
    marginLeft: 20,
    position: 'absolute'
  }
});