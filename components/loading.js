import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';

class Loading extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            this.props.navigation.navigate('Funciona');
            } else {
            this.props.navigation.navigate('Dashboard');
            }
        });
    }
    render() {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default Loading;