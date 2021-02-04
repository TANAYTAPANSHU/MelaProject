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

export default function App() {
  return (
    <ScrollView style={{flexDirection:'column'}}>
    <App_header ></App_header>
     <App_part1></App_part1>
     <App_shopbypattern></App_shopbypattern>
     
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
