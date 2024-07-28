import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image , Switch} from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';

const ELECTRIC = (props) => {
  console.log(props)
  
  return (
    <View style = {{flex:1 , alignItems:'center'}}> 
      <Text style = {{flex:1 , fontSize:40}}>{props.brand} is {props.status ? "on" : "off"}</Text>
      <Image style = {{flex:5 , resizeMode:'contain' , width:'100%' , height:'100%'}}
        source={props.status ? props.onLED : props.offLED}
      />
    </View>
  )
}


export default function App() {
  const LED_on_img = {uri:'https://i.ibb.co/bBRDSZH/light-on.jpg'}
  const LED_off_img = {uri:'https://i.ibb.co/dgL8zqC/light-off.jpg'}
  const AC_on_img = require('./assets/20240607_173957.jpg');
  const AC_off_img = {uri:'https://i.ibb.co/fkB3dMj/air-off.jpg'}
  
  const [LED,setLED] = useState(false);
  const [AC,setAC] = useState(false);
  return (
    <View style = {{flex:1}}>
      {/* View for Image and text */}
      <View style={{flex:6, borderWidth:1 }}>
        <ELECTRIC onLED = {LED_on_img} offLED = {LED_off_img} 
        status = {LED} brand = "KU LED"
        
        />

      <ELECTRIC onLED = {AC_on_img} offLED = {AC_off_img} 
        status = {AC} brand = "KU AC"
        
        />
      </View>
      {/* Switch Button */}
      <View style={{flex:1,borderWidth:1 ,flexDirection:'row' ,justifyContent:'space-evenly',  alignContent:'flex-end'}}>
        {/* for LED Switch */}
        <View>
          <Text >Led Switch</Text>
          <Switch 
            trackColor={{false:'red' , true:'green'}}
            value = {LED} thumbColor={LED ? 'blue' : 'gray'}
            onValueChange={() =>
              {
                setLED(!LED)
              }}
           />
        </View>
        <View>
          <Text>AC Switch</Text>
          <Switch
            trackColor={{false:'red' , true:'green'}}
            value = {AC} thumbColor={AC ? 'orange' : 'purple'}
            onValueChange={() =>
              {
                setAC(!AC)
              }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingTop:Constants.statusBarHeight
  },
  Text:{
    fontSize:40
  }
});
