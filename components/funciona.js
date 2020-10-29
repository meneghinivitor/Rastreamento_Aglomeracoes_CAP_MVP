import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Swiper from "react-native-web-swiper";

export default class Funciona extends Component {

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
         nextTitleStyle: { color: 'blue', fontSize: 24, fontWeight: '500' },
          PrevComponent: ({ onPress }) => (
          <TouchableOpacity onPress={onPress}>
            <Text style={{ color: 'blue', fontSize: 24, fontWeight: '500' }}>
              {'<'}
            </Text>
          </TouchableOpacity>
          ),
        }}
      >
     <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
     <Text style = {styles.titulo}>
        Rastreamento
     </Text>
     <Text style = {styles.titulo2}>
        Aglomerações CAP
     </Text>
     <Text style = {styles.subTitulo}>
        Como funciona o aplicativo?
     </Text>
     <Text style = {styles.textStyle}>
        Este aplicativo é um protótipo de rastreamento de algomerações e contatos em 
        estágio inicial para alunos do Campus Alto Paraopeba da Universidade Federal de 
        São João del Rei. Todos os dados registrados permanecerão anônimos. O uso desse aplicativo 
        ajudará a retardar a disseminação do coronavírus.
      </Text>
      </View>
     <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#4682B4"}}>

      <Text style = {styles.subTitulo}>
       LOCALIZAÇÃO AUTOMÁTICA
      </Text>
      <Text style = {styles.textStyle2}>
       Usando o GPS nós rastreamos automaticamente sua localização para que 
       possamos alertá-lo se você tiver entrado em uma zona de algomerações 
       com risco de contato com alguém com COVID-19.
     </Text>
     <View  style={styles.logo}>
        <Image source={require('../src/img/acessoinicio.png')} />
      </View>
   </View>
   <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#1E90FF", }}>
   <Text style = {styles.subTitulo3}>
      BOLETIM DE INFORMAÇÕES E ORIENTAÇÕES
   </Text>
   <Text style = {styles.textStyle3}>
     Você também poderá conferir um boletim semanal de informações sobre a 
     quantidade de casos confirmados, de pacientes recuperados e internados 
     nas cidades em que a UFSJ está presente.
   </Text>
   <View  style={styles.logo}>
        <Image style={styles.alinhaEsquerda} source={require('../src/img/boletiminicio.png')} />
      </View>
      <View  style={styles.logo}>
        <Image style={styles.alinhaDireita} source={require('../src/img/protocolinicio.png')} />
      </View>
   </View>
   <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
     <Text style = {styles.subTitulo4}>
        REPORTAR AGLOMERAÇÕES
     </Text>
     <Text style = {styles.textStyle4}>
        Você pode nos ajudar e reportar aglomerções enviando o local em que você 
        avistou a aglomeração ou você pode tirar uma foto do local e iremos analisar 
        se há aglomerações em qualquer parte 
        do nosso Campus Alto Paraopeba - UFSJ.
      </Text>
      
        <View  style={styles.logo}>
        <Image style={styles.alinhaEsquerda} source={require('../src/img/reportarinicio2.png')} />
      </View>
      <View  style={styles.logo}>
        <Image style={styles.alinhaDireita} source={require('../src/img/reportarcamerainicio.png')} />
      </View>   
      <Text 
          style={styles.ctnText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          ENTRAR
        </Text>
      </View>
  </Swiper>
 </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
  justifyContent: 'flex-end',
  alignContent: 'flex-end',
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
    padding: 40,
    lineHeight: 26,
  },
  textStyle2: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 0,
    padding: 40,
    lineHeight: 26,
  },
  textStyle3: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 250,
    padding: 40,
    lineHeight: 26,
  },
  textStyle4: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 200,
    padding: 40,
    lineHeight: 26,
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
  titulo2: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 25,
    textAlign: 'center',
  },
  subTitulo: {
    color: '#3201a8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitulo2: {
    color: '#3201a8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 90,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitulo3: {
    color: '#3201a8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitulo4: {
    color: '#3201a8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
    marginBottom: 0,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ctnText: {
    color: '#3740FE',
    marginTop: 0,
    fontSize: 18,
    marginBottom: 0,
    fontWeight: 'bold',
    justifyContent: 'center',
    position: 'relative',
  },
  alinhaDireita: {
    marginLeft: -150,
    position: 'absolute',
  },
  alinhaEsquerda: {
    marginLeft: 0,
    position: 'absolute'
  }
});