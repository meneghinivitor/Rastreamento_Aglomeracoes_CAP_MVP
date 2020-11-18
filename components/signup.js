import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';
import Expo from 'expo';
import * as GoogleSignIn from 'expo-google-sign-in'

export default class Signup extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      displayName: '',
      name: '',
      signedIn: false,
      matricula: '',
      email: '', 
      password: '',
      isLoading: false,
      user: null,
      errorMessage: ''
    }
  }

  onLoginSuccess() {
    this.props.navigation.navigate('Dashboard');
  }
  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, isLoading: false });
  }
  renderLoading() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }
  
async signInWithGoogle() {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken,);
        const googleProfileData = await firebase.auth().signInWithCredential(credential);
        this.onLoginSuccess.bind(this);
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  }

 signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
      
        androidClientId: 212609824178-pbe1i47let56vtdp7pa49ffqf2lo5ea9.apps.googleusercontent.com,
        iosClientId: 212609824178-rommfgrpedjepi2evvgj2bg2lnm42phq.apps.googleusercontent.com,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
        })
        Alert.alert(
          'Logged in!',
          `Olá ${result.user.name}! \n  ${JSON.stringify(result.user)}`,
        );
        return result.accessToken;
      } else {
        Alert.alert(
          'Cancelled!',
          'Login was cancelled!',
        );
        console.log("cancelled")
        return { cancelled: true };
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
      console.log("error", e)
      return { error: true };
    }
  }
  
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Entre com os detalhes da conta!')
    } else {
      firebase.database().ref('Usuários/'+ this.state.displayName ).set({
        Matrícula: this.state.matricula,
        Email: this.state.email,
      }, function(error) {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
      });
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('Usuário logado com sucesso!')
        this.setState({
          isLoading: false,
          displayName: '',
          matricula: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }


  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
      <Text style={styles.titulo}>Faça seu cadastro</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Nome completo"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Matrícula"
          value={this.state.matricula}
          onChangeText={(val) => this.updateInputVal(val, 'matricula')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Senha (mais de 6 dígitos)"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />  
        <View style={styles.btnStyle}>
        <Button
          color="#3740FE"
          title="Registrar"
          onPress={() => this.registerUser()}
        />
        </View> 
        <View style={{marginTop:15}}>
        <Button
        title= "Entrar com conta Google"
        onPress={() => this.signInWithGoogle()}/>
        </View>          
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Já tem uma conta? Clique aqui para Login
        </Text>               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 2
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
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
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 30,
    marginBottom: 40,
    textAlign: 'center',
  },
});