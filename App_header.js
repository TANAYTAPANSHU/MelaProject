import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  Button,  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


export default function App_header() {
    return (
       <View className="header" style={{ flexDirection:'row', justifyContent:'space-between'  ,paddingTop:'10%',paddingLeft:'3%',paddingRight:'5%',paddingBottom:'5%' ,backgroundColor:'#4c102b'}} >

    <View className="header_components" style={{flexDirection:'row',flex:0.55 , justifyContent:'space-between',alignItems:'center'  }}>
       <IconButton
    icon="keyboard-backspace"
    color={Colors.white}
    size={20}
    onPress={() => console.log('Back is Pressed')}
  />
      <Text h4 style={{color:'white'}}>Kurti Store</Text>
   
    </View>
       <IconButton
    icon="magnify"
    color={Colors.white}
    size={25}
    onPress={() => console.log('Search is Pressed')}
  />
      
    </View>
    )
}
