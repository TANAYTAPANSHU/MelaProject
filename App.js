import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  Button,  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import App_header from './App_header.js'
import App_part1 from './App_part1.js'
import App_shopbypattern from './App_shopbypattern'
import App_banner from './App_banner.js'
import App_topbrands from './App_topbrands.js'
import App_knockout  from './App_knockout.js'
import App_bonanza from './App_bonanza.js'

export default function App() {
  return (
    <ScrollView style={{flexDirection:'column'}}>
    <App_header ></App_header>
     <App_part1></App_part1>
     <App_shopbypattern></App_shopbypattern>
     <App_banner  />
       <App_topbrands />
       <App_knockout />
       <App_bonanza />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
