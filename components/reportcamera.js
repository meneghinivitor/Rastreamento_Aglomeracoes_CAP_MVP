import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { ImagePicker } from 'expo';
import uuid from 'uuid';
import firebase from '../database/firebase';

console.disableYellowBox = true;

export default class ReportCamera extends Component {

  camera = null;

  state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      imageuri: "",
      url: "",
      image: null,
      uploading: false,
  };

  async componentDidMount() {
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      const hasCameraPermission = (camera.status === 'granted');

      this.setState({ hasCameraPermission });
  };

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      if (photo) {
        this.setState({ imageuri: photo.url });
      }
    }
    console.log('Foto tirada com sucesso!')
    this.props.navigation.navigate('Foto')
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
        return <View />;
    } else if (hasCameraPermission === false) {
        return <Text>Por favor permita o acesso à câmera.</Text>;
    }
    let { image } = this.state;
    return (
        <View>
            <Camera
                style={styles.preview}
                ref={camera => this.camera = camera}
            />
            <View style={styles.captureButtonView}>
                  <TouchableOpacity
                    style={styles.cameraButtons}
                    onPress={this.snap}
                  >
                    <Text
                      style={{ textAlign: 'center', fontSize: 18, marginBottom: 10, color: "white" }}
                    >
                      Tirar foto
                    </Text>
                  </TouchableOpacity>
                </View>
        </View>
        
    );
};
};

const { width: winWidth, height: winHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 36,
    marginBottom: 50,
    marginTop: 20,
    textAlign: 'center',
  },
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
},
 cameraButtons: {
   borderColor: "#fff",
   borderWidth: 2,
   padding: 7,
   borderRadius: 35,
   margin: 100,
   marginTop: 510,
},
 captureButtonView: {
   height: 200
},
});

