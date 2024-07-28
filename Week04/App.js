import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const test = () =>{
  let x = 1e3;
  x *=0.1;
  let arr = [1,2,3]
  let ans = arr.map(item => item*x)
  console.log(ans);

}

function simplefn(foo,bar = 'who are you?'){
  foo ??(foo = "foo ain't fool.")
  return foo+' '+bar
  +'this '+'is '+'how '+'to '+'return '+'long '+'expression \n'
  +'ใช้ในกรณีคืนค่าเป็น UI component'
}

const ExFn = function (){
  console.log("exress func is call");
  return(
    <Text style = {styles.basicText}>
      Express function
    </Text>
  )
}

const arrFn = () =>{
  console.log("arrow function");
  return(
    <Text style = {styles.basicText}>
      Arrow function
    </Text>
  )
}

const rootFn = (value , callBack1 , callBack2) =>{
  return value? callBack1():callBack2(); //true : false
}

const mixObj = {}
const BlendingObj = () => {
  if(Object.keys(mixObj).length != 0){
    return <Text>Object is not empty</Text>
  }else{
    mixObj.str = "String Example"
    mixObj.number = 10.55
    mixObj.double = () =>{
      let arr = [1,2,3]
      return (arr.map(item =>{
        return (<Text> {item *2} </Text>)
      }))
    
    }
   return (
    <>
      <Text style = {styles.basicText}>
      Blending peroperties here 
      {mixObj.double()} 
    </Text>
    </>
   )
  }
}

export default function App() {
  
  return (

    <View style={styles.container}>
      {/* <Text style = {styles.basicText}>Result from simplefn("Hello","it's me") = {simplefn("Hello","it's me")}</Text>
      <Text style = {styles.basicText}>Result from simplefn("Hello") = {simplefn("Hello")}</Text>
      <Text style = {styles.basicText}>Result froma simplefn() = {simplefn()}</Text>

      <Text>
          {rootFn(true , ExFn , arrFn)}
      </Text>
     */}
        <BlendingObj/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicText:{
    fontSize:25,
    fontWeight:'bold'
  }
});
