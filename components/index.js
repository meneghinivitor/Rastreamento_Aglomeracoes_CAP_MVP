import React from 'react';
import { View } from 'react-native';

import { isSignedIn } from "./auth";

import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './routs';

export default class App extends React.Component {
  state = {
    signed: false,
    signLoaded: false,
  };

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signed: res, signLoaded: true }))
      .catch(err => alert("Erro"));
  }

  render() {
    const { signLoaded, signed } = this.state;

    if (!signLoaded) {
      return null;
    }

    const Layout = createRootNavigator(signed);
    return <Layout />;
  }
}