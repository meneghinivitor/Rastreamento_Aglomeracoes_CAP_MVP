import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './components/loading';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Main from './components/main';
import Boletim from './components/boletim';
import Report from './components/report';
import Rastrear from './components/rastrear';
import Protocol from './components/protocol';
import Funciona from './components/funciona';
import Location from './components/location';
import Foto from './components/foto';
import Noticia from './components/noticia';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Funciona"
          component={Funciona}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Boletim"
          component={Boletim}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Protocol"
          component={Protocol}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rastrear"
          component={Rastrear}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Foto"
          component={Foto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Noticia"
          component={Noticia}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;