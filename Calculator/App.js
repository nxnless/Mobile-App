import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

const Layout = (n ,arr , a ) =>{
  let boxs = []
  let i = 0;
  let cal = [
    ["AC" , "+/-" , "%" , "÷"],
    [7,8,9,"x"],
    [4,5,6,"-"],
    [1,2,3,"+"],
    [0,".","=","*"]
  ]

  let buttonColor = [
    ["#A5A5A5" ,"#A5A5A5" , "#A5A5A5" , "#FD9F0B"],
    ["#343434" , "#343434" , "#343434" ,"#FD9F0B"],
    ["#343434" , "#343434" , "#343434" ,"#FD9F0B"],
    ["#343434" , "#343434" , "#343434" ,"#FD9F0B"],
    ["#343434" , "#343434" , "#FD9F0B"],
  ]

  let fontColor = [
    ["black" , "black" ,"black" ,"white"],
    ["white" , "white" ,"white" ,"white"],
    ["white" , "white" ,"white" ,"white"],
    ["white" , "white" ,"white" ,"white"],
    ["white" , "white" ,"white" ,"white"]
  ]
  let widthButt = [250 , 100 ,100]
  if(n == 4){
    for(i ; i<n ; i++){
      boxs.push(
        <View style = {{flex:arr[i], alignItems:'center' , justifyContent:'space-evenly'}}>
          <View style = {{height:100 ,width:100}}>
            <TouchableOpacity style ={[styles.button ,{backgroundColor:buttonColor[a][i]} ]}>
              <Text style = {[styles.number , {color:fontColor[a][i]}]}>{cal[a][i]}</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      )
    }
  }
  if(n == 3){
    for(i ; i<n ; i++){
      boxs.push(
        <View style = {{flex:arr[i], alignItems:'center' , justifyContent:'space-evenly'}}>
          <View style = {{height:100 ,width:widthButt[i]}}>
            <TouchableOpacity style ={[styles.button , {backgroundColor:buttonColor[a][i]}]}>
              <Text style = {styles.number}>{cal[a][i]}</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      )
    }
  }
  
  return (
    <View style = {{flex:1,flexDirection:'row'}}>
        {boxs}
    </View>
    
  );
}

const show = () =>{
  let arrs = [1,1,1,1]
  let arrl = [2,1,1]
  let boxs = []
 
  for (let i = 0; i < 4; i++) {
    let a = i;
    boxs.push(
      <View key={i} style={{ flex: 1 }}>
        {Layout(4, arrs, a)}
      </View>
    );
  }
  boxs.push(
    <View style = {{flex:1}}>
    {Layout(3,arrl,4)}
    </View>
  )
  return(
    boxs
   
  )
}

export default function App() {
  return (
    <View style={styles.container}>
       <View style = {[styles.bigPart , {flexDirection:'column-reverse' , alignItems:'flex-end' ,flex:3}]}>
          <Text style = {styles.number}>20.10</Text>
       </View>
       <View style = {[styles.bigPart , {flex:4}]}>
          {show()}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'#A5A5A5',
    borderRadius:360,
    height:110,
    width:'100%'
  },
  bigPart:{
    backgroundColor:'black',
    // borderWidth:2 , borderColor:'red'
  },
  number:{
    fontSize:60,
    color:'white',
    fontWeight:'bold'
  }
});
