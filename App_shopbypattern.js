import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  Button,  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import img1 from './assests/neklace.png'

var styles = StyleSheet.create({ lineStyle: {fontSize:34, textDecorationLine: "underline",
    textDecorationStyle: "double",
    textDecorationColor: 'blue' ,
    color:'#e53838',
    marginBottom:'2%',
    marginTop:'2%'
}})

export default function App_shopbypattern() {
    return (
      <View style={{marginLeft:'3%',marginRight:'3%',}} >
    <Text h3 style={styles.lineStyle} >Shop by Pattern</Text>
    <View style={{flexDirection:'row' , marginTop:'8%' , justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'    }}>
     <View style={{margin:'1%'}} >
 <Image
        
        source={img1}
      />
      <Text  h4 style={{textAlign:'center' , color:'#e53838',marginTop:'2%'  }}>A - Line</Text>
     </View>

       <View style={{margin:'4%'}} >
 <Image
        
        source={img1}
      />
      <Text  h4 style={{textAlign:'center' , color:'#e53838',marginTop:'2%'  }}>Anarkali</Text>
     </View>

        <View style={{margin:'1%'}} >
 <Image
        
        source={img1}
      />
      <Text  h4 style={{textAlign:'center' , color:'#e53838',marginTop:'2%'  }}>Angrakha</Text>
     </View>
     
        <View style={{margin:'1%'}} >
 <Image
        
        source={img1}
      />
      <Text  h4 style={{textAlign:'center' , color:'#e53838',marginTop:'2%'  }}>Flared</Text>
     </View>
     
        <View style={{margin:'1%'}} >
 <Image
        
        source={img1}
      />
      <Text  h4 style={{textAlign:'center' , color:'#e53838',marginTop:'2%'  }}>Long Straight</Text>
     </View>
     
        <View style={{margin:'1%'}} >
 <Image
        
        source={img1}
      />
      <Text  h4 style={{textAlign:'center' , color:'#e53838',marginTop:'2%'  }}>Overlay</Text>
     </View>

      
   
     </View>

      </View>
    )
}
