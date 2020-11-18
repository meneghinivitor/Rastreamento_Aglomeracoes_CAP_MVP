import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Boletim from './boletim';
import Report from './report';
import Protocol from './protocol';
import Rastrear from './rastrear';
import Foto from './foto';
import Noticia from './noticia';

const Tab = createMaterialBottomTabNavigator();

export default class Main extends Component  {
  render() {
   return (
<Tab.Navigator
      initialRouteName="Noticias"
      activeColor="#000"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Notícias"
        component={Noticia}
        options={{
          tabBarLabel: 'Notícias',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text" black ={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Protocol"
        component={Protocol}
        options={{
          tabBarLabel: 'Orientaçôes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alert-circle" black ={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Boletim"
        component={Boletim}
        options={{
          tabBarLabel: 'Boletim',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" black ={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Reportar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple-plus-outline" black ={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Foto"
        component={Foto}
        options={{
          tabBarLabel: 'Câmera',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" black ={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
   );
 } 
}