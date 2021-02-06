import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  Button,  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import img1 from './assests/mela1.png'

var styles = StyleSheet.create({ lineStyle: {fontSize:34,
    color:'#e53838',
    borderBottomWidth:4,
    borderBottomColor:'#F5CDAB',
    marginTop:'2%',
    marginRight:'auto'
}})


export default function App_topbrands() {
    return (
   <View style={{marginLeft:'3%',marginRight:'3%',}} >
    <Text h3 style={styles.lineStyle} >Top Brands</Text>
    <View style={{flexDirection:'row' , marginTop:'8%' , justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'    }}>
     <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' , color:'#778299',marginTop:'2%',fontWeight:'bold'  }}>7 seasons</Text>
     </View>
         <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' , color:'#778299',marginTop:'2%' ,fontWeight:'bold'  }}>Ajmera Fashion</Text>
     </View>
      <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' , color:'#778299',marginTop:'2%' ,fontWeight:'bold'  }}>Kinjovilla Fashion</Text>
     </View>
      <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' ,  fontWeight:'bold' ,color:'#778299',marginTop:'2%'  }}>Meet Fashion</Text>
     </View>
      <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100}}
      />
      <Text  h5 style={{textAlign:'center' ,  fontWeight:'bold' , color:'#778299',marginTop:'2%'  }}>Radhika Fashion</Text>
     </View>
      <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' , fontWeight:'bold' , color:'#778299',marginTop:'2%'  }}>Mannat Fashion</Text>
     </View>
      <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' ,  fontWeight:'bold' , color:'#778299',marginTop:'2%'  }}>Mela</Text>
     </View>
      <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' ,  fontWeight:'bold' , color:'#778299',marginTop:'2%'  }}>D to D Lifestyle</Text>
     </View>
      <View style={{margin:'2%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:100,width:100
 }}
      />
      <Text  h5 style={{textAlign:'center' ,  fontWeight:'bold' ,color:'#778299',marginTop:'2%'  }}>AD collection</Text>
     </View>
      

     

    
     
    
   
     </View>

      </View>
    )
}
