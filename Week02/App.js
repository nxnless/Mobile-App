import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RainBow = () =>{
  return (
    <View style = {{flex:1}}>
        <View style = {{flex:1 , backgroundColor :'red'}}></View>
        <View style = {{flex:2 , backgroundColor :'green'}}></View>
        <View style = {{flex:3 , backgroundColor :'blue'}}></View>
    </View>
  )
}

const ExFlexDirection = () =>{
  return(
    <View style = {{flex:1,flexDirection:'column'}}>
      <View style={{borderWidth:2 ,borderColor:'red',width:150,height:150}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>1</Text>
      </View>
      <View style={{borderWidth:2 ,borderColor:'blue',width:150,height:150}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>2</Text>
      </View>
      <View style={{borderWidth:2 ,borderColor:'green',width:150,height:150}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>3</Text>
      </View>

    </View>
  )
}

const ExJustifyContent = () =>{
  return(
    <View style = {{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
      <View style={{borderWidth:2 ,borderColor:'red',width:150,height:150}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>1</Text>
      </View>
      <View style={{borderWidth:2 ,borderColor:'blue',width:150,height:150}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>2</Text>
      </View>
      <View style={{borderWidth:2 ,borderColor:'green',width:150,height:150}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>3</Text>
      </View>

    </View>
  )
}

const ExAlignItem = () =>{
  return(
    <View style = {{flex:1,flexDirection:'column',justifyContent:'center' ,alignItems:'baseline'}}>
      <View style={{borderWidth:2 ,borderColor:'red',width:150,height:150}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>1</Text>
      </View>
      <View style={{borderWidth:2 ,borderColor:'blue',width:'50%'}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>2</Text>
      </View>
      <View style={{borderWidth:2 ,borderColor:'green'}}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>3</Text>
      </View>

    </View>
  )
}

const TextDemo = () =>{
    return (
        <View style = {{flex:1}}>
            <Text style ={styles.baseText}>Hello,
                <Text style ={styles.insideText} onPress={() =>{
                    Alert.alert('Good morning')
                }} >    
                it'me
                </Text>
                
            </Text>
        </View>
    )
}

function rederBox(){
  let boxs = []
  let i =1

  while(i <=10 ){
    boxs.push(
      <View style={{borderWidth:2 ,borderColor:'red',width:150,height:150} } key={i}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>{i}</Text>
      </View>
    )
    i++
  }
  return boxs
}

const ExWrapWithLoop = () =>{
  return(
    <View style={{flex:1,flexWrap:'wrap'}}>
      { 
        rederBox()
      }
    </View>
  )
}

const ButtonDemo = () =>{
    const [num,SetNum] = useState(0);
    const addNumber = ()=>{
        SetNum(num +1)
    }
    return (
    <View style = {{flex:1}}>
        <Text style ={[styles.baseText,{alignSelf:'center'}]}>
            {num}
        </Text>
        <Button disabled={false} color={'red'} title='Add Number' onPress={addNumber}></Button>
    </View>
    )
}

//touchable opalsity
const OpaDemo = () =>{
    const [num,SetNum] = useState(0);
    const addNumber = ()=>{
        SetNum(num +1)
    }
    return (
        <View style={{flex:1}}>
            <Text style ={[styles.baseText,{alignSelf:'center'}]}>
                {num}
            </Text>
            <TouchableOpacity onPress={addNumber}
                style={{backgroundColor:'AF33FF'}}
            >
                <Text style ={[styles.insideText,{alignSelf:'center'}]}>Click me</Text>
            </TouchableOpacity>

        </View>
    )
}

export default function App() {
  return (
   
   <OpaDemo></OpaDemo>
  );
}

const styles = StyleSheet.create({
    baseText:{
        fontSize:60,
        fontFamily:'Arial',
        justifyContent:'center'
    }
,
    insideText:{
        fontSize:40,
        
        },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainText:{
    fontSize:30,
    color:90
  }
  ,
  fixStyle:{
   width:600,
   height:300,
   backgroundColor:'green', 
  },
  flexStyle:{
    flex:1,
    backgroundColor:'yellow'
  },
  percentStyle:{
    width:'50%',
    height:'50%',
    backgroundColor:'red'
  }

});
