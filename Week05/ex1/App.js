import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions , Image , TouchableOpacity , Alert  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import DialogInput from 'react-native-dialog-input'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [selectImg , setSelectImg] = useState({localURI:'https://i.ibb.co/y4n8n20/user.jpg'})
  const [username , setUsername] = useState("Username")
  const [visibleDialog , setVisibleDialog] = useState(false)

  const openImage = async () => {
    console.log("Async function is active")
    let perm = await ImagePicker.requestCameraPermissionsAsync()
    if(perm === false){
      Alert.alert('Require permission')
      return
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync(
      {
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        allow:true,
        aspect:[4,3],
        quality:1
      }
      
    )
    console.log(pickerResult)
    if(!pickerResult.canceled){
      setSelectImg({localURI:pickerResult.assets[0].uri})
    }
  }


  return (
    <View style = {{flex:1}}>
      
      <LinearGradient colors={['#2F80ED' , '#56CCF2']} style = {{flex:1}}>
        {/*avatar IMG */}
        <TouchableOpacity style = {{flex:2 , justifyContent:'flex-end' , alignItems:'center'}}
          onPress={()=>{
            console.log("Image is Press")
            openImage()
          }}
        >
          <Image style = {styles.circle}
            source={{uri:selectImg.localURI}}
          /> 
        </TouchableOpacity >
        {/* Dialog input */}
        <DialogInput
          isDialogVisible = {visibleDialog}
          title={"Edit username"}
          message={"Please insert your username"}
          hintInput="Don't you know your name ?"
          submitInput={(inputText) => {
            if(inputText == null){
              setUsername("Username")
              setVisibleDialog(false)
            }else{
              setUsername(inputText)
              setVisibleDialog(false)
            }
            
          }}
          closeDialog={() =>{
            setVisibleDialog(false)
          }}
        />

        

        {/* Text */}
        <TouchableOpacity style = {{flex:1, alignItems:'center'}} 
          onPress={()=>{
            console.log("Text is press")
            setVisibleDialog(true)
          }}
        >
          <Text style={{fontSize:40 , color:'white' , fontWeight:'bold'}}>
            {username}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      
      <LinearGradient colors={['rgba(212,175,55,0.8)' , 'transparent']} style = {{flex:1}}>

      </LinearGradient>
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
  circle:{
    flex:1,
    borderRadius: Dimensions.get('window').width*0.5, 
    width:Dimensions.get('window').width*0.5,
    width:Dimensions.get('window').width*0.5,
    borderWidth:2,
    borderColor:'#FFD700'
  }
});
