import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  Button,  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import img1 from './assests/knock.png'

var styles = StyleSheet.create({ lineStyle: {fontSize:34,
    color:'#e53838',
    borderBottomWidth:4,
    borderBottomColor:'#F5CDAB',
    marginTop:'2%',
    marginRight:'auto'
}})


export default function App_topbrands() {
    return (
   <View style={{marginLeft:'3%',marginRight:'3%', marginBottom:'-15%'}} >
    <Text h3 style={styles.lineStyle} >Knock-out deals</Text>
    <View style={{flexDirection:'row' , marginTop:'8%' , justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'    }}>
     <View style={{margin:'1%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:220,width:120,position:'relative',borderColor:'black',borderWidth:0.6,borderRadius:10, shadowColor: 'blue',
    shadowOffset: { width: 10, height: 3  },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
 }}
      />
      <Text  h4 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'#A98C9A',marginTop:'2%',fontWeight:'bold'  }}>Under</Text>
            <Text  h3 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'white',marginTop:'2%',fontWeight:'bold'  }}>Rs 499</Text>
             <Text  h4 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'#A98C9A',marginTop:'2%',fontWeight:'bold'  }}>OFF</Text>
     </View>
         
<View style={{margin:'1%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:220,width:120,position:'relative',borderColor:'black',borderWidth:0.6,borderRadius:10, shadowColor: 'blue',
    shadowOffset: { width: 10, height: 3  },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
 }}
      />
      <Text  h4 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'#A98C9A',marginTop:'2%',fontWeight:'bold'  }}>Under</Text>
            <Text  h3 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'white',marginTop:'2%',fontWeight:'bold'  }}>Rs 999</Text>
             <Text  h4 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'#A98C9A',marginTop:'2%',fontWeight:'bold'  }}>OFF</Text>
     </View>

     <View style={{margin:'1%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:220,width:120,position:'relative',borderColor:'black',borderWidth:0.6,borderRadius:10, shadowColor: 'blue',
    shadowOffset: { width: 10, height: 3  },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
 }}
      />
      <Text  h4 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'#A98C9A',marginTop:'2%',fontWeight:'bold'  }}>Under</Text>
            <Text  h3 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'white',marginTop:'2%',fontWeight:'bold'  }}>Rs 299</Text>
             <Text  h4 style={{textAlign:'center' ,fontStyle:'italic' ,bottom:160, color:'#A98C9A',marginTop:'2%',fontWeight:'bold'  }}>OFF</Text>
     </View>

     </View>

      </View>
    )
}
