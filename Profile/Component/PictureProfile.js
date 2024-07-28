import { StyleSheet,Image,View , Text , TouchableOpacity , Dimensions, Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState} from 'react'
import DialogInput from 'react-native-dialog-input'
import * as ImagePicker from 'expo-image-picker'

export const PictureProfile = () =>{
    const [username ,setUsername ] = useState('User Name');
    const [img , setImg] = useState({uri:'https://i.ibb.co/y4n8n20/user.jpg'});
    const [visibleDialog,setVisibleDialog] = useState(false)

    const openImage = async () => {
        console.log("Open image work")
        let perm = await ImagePicker.requestCameraPermissionsAsync()

        if(perm.granted === false){
            Alert.alert('Require permission')
            return
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        if(!pickerResult.canceled){
            setImg({uri:pickerResult.assets[0].uri})
        }

    }

    return (
        <View style={{flex:1}}>
            <LinearGradient colors={['#2F80ED','#56CCF2']} style = {{flex:1}}>
                <TouchableOpacity 
                style = {[{flex:3 , justifyContent:'flex-end'},styles.contain]}
                onPress={() => {
                    openImage()
                }}
                >
                    <Image 
                        source={{uri:img.uri}}
                        style = {styles.Circle}
                        /> 
                </TouchableOpacity>
                <DialogInput 
                    isDialogVisible ={visibleDialog}
                    title={"Edir Username"}
                    message={"Pleases insert your username"}
                    hintInput="Username"
                    submitInput={(inputText)=>{
                        if(inputText == ""){
                            setUsername("User Name")
                            setVisibleDialog(false)
                        }else{
                            setUsername(inputText)
                            setVisibleDialog(false)
                        }
                       
                    }}
                    closeDialog={()=>{setVisibleDialog(false)}}
                    />

                <TouchableOpacity 
                    style = {[{flex:1},styles.contain]}
                    onPress={()=>{
                        setVisibleDialog(true)
                    }}
                >
                    <Text style = {styles.text}>{username}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    Circle:{
        borderRadius:Dimensions.get('window').width*0.5,
        width:Dimensions.get('window').width*0.5,
        height:Dimensions.get('window').width*0.5,
        borderWidth:2,
        borderColor:'#FFD700'
    },
    contain:{
        alignSelf:'center'
    },
    text:{
        fontSize:25,
        color:'white'
    }
    
})