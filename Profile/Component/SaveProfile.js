import {StyleSheet , View,Text,TextInput , TouchableOpacity , Alert} from 'react-native'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons';

const showTxt = (data) => {
    if(data.user == "" || data.email == "" ||data.Phone == ""){
        return Alert.alert(
            "Please insert blank data"
        )
        return(
            Alert.alert(
                "Save Profile",
                `Username : ${data.user}\nEmail : ${data.email} \nPhone : ${data.Phone}`,
                [
                    {
                        Text:"CANCEL",
                        onPress:() => {console.log('Cancel passed')}
                    },
                    {
                        Text:"SAVE",
                        onPress:() => {console.log('Confirm pass')}
                    }
                ]
            )
        )
    }
    
}

export const SaveProfile = () => {
    const [ name , setName ] = useState("")
    const [ mail,setMail ] = useState("")
    const [ phone , setPhone ] = useState("")
    const [visibleDialog,setVisibleDialog] = useState(false)
    

    return(
        <View style = {{flex:1}}>
            <View style = {{flex:1 , justifyContent:'space-evenly'}}>
                <View style = {styles.viewTxtInput}>
                <AntDesign name="user" size={40} color={"grey"} style={{position:'relative',left:15}} />
                    <TextInput style = {[styles.txtInput]} 
                        placeholder="Your Name"
                        value={name}
                        onChange={setName}
                    />
                </View>
                <View style = {styles.viewTxtInput}>
                <Fontisto name="email" size={40} color={"grey"} style={{position:'relative',left:13}} />
                    <TextInput style = {[styles.txtInput]} 
                        placeholder="E-mail"
                        value={mail}
                        onChange={setMail}
                    />
                </View>
                <View style = {styles.viewTxtInput}>
                <AntDesign name="phone" size={40} color={"grey"} style={{position:'relative',left:15}} />
                    <TextInput style = {[styles.txtInput]} 
                        placeholder="Phone"
                        value={phone}
                        onChange={setPhone}
                    />
                </View>
            </View>
            <View style = {{flex:1 , flexDirection:'column-reverse'}}>
                <TouchableOpacity style = {styles.button}
                    onPress={()=>{
                      const data =  {
                        user:name,
                        email:mail,
                        Phone:phone}
                        console.log(data)
                      
                        showTxt(data);
                    }
                    } 
                  
                >
                    <Text
                        style = {{color:'white' , fontSize : 30 , 
                            alignContent:'center' 
                        }}
                    >Save</Text>
                </TouchableOpacity>
                <View style = {{flex:1}}></View>
                <View style = {{flex:1}}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txtInput:{
        flex:1,
        color:'#3E3E40',
        fontSize:20,
        position:'static',left:30
    },
    viewTxtInput:{
        alignItems:'center',
        flexDirection:'row',
        height:60,
        borderWidth:2,
        borderColor:'gray',
        borderRadius:40
    },
    button:{
        flex:1 , 
        backgroundColor:'#2F80ED',
        justifyContent:'center',
        alignItems:'center' 
    }
})