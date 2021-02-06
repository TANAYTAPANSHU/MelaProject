import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {  Image, ScrollView, TextInput } from 'react-native';
import {  Button,  SafeAreaView, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import img1 from './assests/products.png'

var styles = StyleSheet.create({ lineStyle: {fontSize:34,
    color:'#e53838',
    borderBottomWidth:4,
    borderBottomColor:'#F5CDAB',
    marginTop:'2%',
    marginRight:'auto'
}})

export default function App_bonanza() {
    return (
   <View style={{marginLeft:'3%',marginRight:'3%',}} >
    <Text h3 style={styles.lineStyle} >Beauty Bonanza</Text>
    <View style={{flexDirection:'row' , marginTop:'8%' , justifyContent:'space-around',alignItems:'center',flexWrap:'wrap'    }}>

        <View style={{margin:'1%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:240,width:170,position:'relative',
 }}
      />
      <View style={{flexDirection:'row'}}>
      <Text  h4 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold'  }}>Rs 299</Text>
      <Text  h5 style={{fontStyle:'italic' , color:'grey',marginTop:'1%',marginLeft:'5%',top:10,fontWeight:'bold',textDecorationLine:'line-through'  }}>Rs 399</Text>      
      </View>
       <Text  h5 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold' ,width:150  }}>Decorative designer table lamp</Text>
      </View>

         <View style={{margin:'1%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:240,width:170,position:'relative',
 }}
      />
      <View style={{flexDirection:'row'}}>
      <Text  h4 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold'  }}>Rs 299</Text>
      <Text  h5 style={{fontStyle:'italic' , color:'grey',marginTop:'1%',marginLeft:'5%',top:10,fontWeight:'bold',textDecorationLine:'line-through'  }}>Rs 399</Text>      
      </View>
       <Text  h5 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold' ,width:150  }}>Decorative designer table lamp</Text>
      </View>

      <View style={{margin:'1%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:240,width:170,position:'relative',
 }}
      />
      <View style={{flexDirection:'row'}}>
      <Text  h4 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold'  }}>Rs 299</Text>
      <Text  h5 style={{fontStyle:'italic' , color:'grey',marginTop:'1%',marginLeft:'5%',top:10,fontWeight:'bold',textDecorationLine:'line-through'  }}>Rs 399</Text>      
      </View>
       <Text  h5 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold' ,width:150  }}>Decorative designer table lamp</Text>
      </View>

      <View style={{margin:'1%' }} >
 <Image
        
        source={img1}
        style={{resizeMode:'cover' ,height:240,width:170,position:'relative',
 }}
      />
      <View style={{flexDirection:'row'}}>
      <Text  h4 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold'  }}>Rs 299</Text>
      <Text  h5 style={{fontStyle:'italic' , color:'grey',marginTop:'1%',marginLeft:'5%',top:10,fontWeight:'bold',textDecorationLine:'line-through'  }}>Rs 399</Text>      
      </View>
       <Text  h5 style={{fontStyle:'italic' , color:'#10193E',marginTop:'1%',fontWeight:'bold' ,width:150  }}>Decorative designer table lamp</Text>
      </View>


    
     </View>

     

      </View>
    )
}
