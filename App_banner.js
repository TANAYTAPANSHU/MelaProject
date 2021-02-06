import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { ImageBackground } from "react-native";
import { Button } from 'react-native-paper';

export default function App_banner() {
    return (
           <View>
<ImageBackground source={require('./assests/bandage.png')} style={{ flex: 1,
    resizeMode: "cover",
    justifyContent: "center",height:230, }} >
    <View style={{position: 'absolute', top: 55, left: 10, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems:'center'}}>
     <Text style={{color: "white",
    fontSize: 18,
    fontWeight: 'bold',
   }}>Trending Products</Text>
   <Button mode="contained" uppercase='false' style={{backgroundColor:'#FE695E',top:8,paddingLeft:20,paddingRight:20,borderRadius:10,fontSize:10 }} onPress={() => console.log('Pressed')}>
    Shop Now
  </Button>
  <View style={{top:15,flexDirection:'row'}}>
    <Text style={{color: "white",
    fontSize: 35,
    fontWeight: 'bold'
   }}>Upto </Text>
    <Text style={{color: "#FFFD99",
    fontSize: 35,
    fontWeight: 'bold',
   }}>60% </Text>
   <Text style={{color: "white",
    fontSize: 35,
    fontWeight: 'bold'
   }}>Off</Text>
   </View>
   </View>
    </ImageBackground>
  </View>
    )
}
