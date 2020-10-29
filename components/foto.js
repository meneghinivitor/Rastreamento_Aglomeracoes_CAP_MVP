import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import firebase from '../database/firebase';
import uuid from 'uuid';

console.disableYellowBox = true;

export default class Foto extends Component {
  state = {
    image: null,
    uploading: false,
  };
  
  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Reportar Aglomerações por FOTO</Text>
        <Text style={styles.textStyle}>
          Você pode nos ajudar a controlar as aglomerações no nosso Campus Alto
          Paraopeba. Caso tenha visto alguma forma de aglomeração, faça sua
          parte e nos avise. (Usaremos uma tecnologia de reconhecimento facial e iremos 
          contar quantas pessoas estão presentes na foto)
        </Text>
        <Text style={styles.textStyle2}>Como ajudar?</Text>
        <Text style={styles.textStyle}>
          Você pode tirar uma foto de um local com aglomeração em qualquer parte
          do nosso campus ( Todos dados permaneceram anônimos e só iremos avisar a quantidade
          de pessoas que estão na foto para os usuários)
        </Text>
        <View style={styles.btnStyle}>
        <Button 
          color="#3740FE"
          onPress={this._takePhoto}
          title="Tirar foto" />
        </View>
        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }
  };

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    
    this._handleImagePicked(pickerResult);
    
  };

  _handleImagePicked = async pickerResult => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ uploading: false });
      
    }
  };
}

async function uploadImageAsync(uri) {
  Alert.alert(
      'Muito Obrigado,',
      'foto tirada com sucesso!',
      [
        {text: 'OK', onPress: () => console.log('Foto tirada com sucesso!'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      },
    );
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  blob.close();

  return await snapshot.ref.getDownloadURL();
  
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
  btnStyle: {
    marginBottom: 15,
    marginTop: 15,
  },
});