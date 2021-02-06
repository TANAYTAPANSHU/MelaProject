import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  Button,  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { ImageBackground } from "react-native";

export default function App_part1() {
    return (
        <View >
<ImageBackground source={require('./assests/G1.png')} style={{ flex: 1,
    resizeMode: "cover",
    justifyContent: "center",height:300}} >
    <View style={{position: 'absolute', top: 95, left: 120, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems:'center'}}>
     <Text style={{color: "white",
    fontSize: 35,
    fontStyle:'italic',
    fontWeight: "normal",
   }}>Upto</Text>
     <Text style={{color: "white",
    fontSize: 38,
    fontWeight: "bold",
    left:30
   }}>25% Off</Text>
   </View>
    </ImageBackground>
  </View>


            
        
    )
}
