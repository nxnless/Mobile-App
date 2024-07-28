import { View, Text, ImageBackground ,Alert ,TextInput , StyleSheet,Platform , TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { Logo } from "./Logo";
import { useState } from "react";

const verifyInput = (data) =>{
    console.log(data)
    if(data.user == "" || data.pass == ""){
        return (
            Alert.alert('กรุณาใส่ชื่อผู้ใช้และรหัสผ่าน')
            

            
        )
    return(
        Alert.alert(
            "ข้อมูลการล็อกอิน",
            `Username:${data.user}\nPassword:${data.pass}`,
            [
                {
                    Text:"Cancel",
                    onPress:() => {console.log('Cancel passed')}
                },
                {
                    Text:"Confirm",
                    onPress:() => {console.log('Confirm pass')}
                }
            ]
            
        )
    )
}
}

export const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
  const BGIMG = { uri: "https://i.ibb.co/5MZg1Jp/13186366-5125962.jpg" };
  return (
    <ImageBackground style={{ flex: 1 }} source={BGIMG} resizeMode="cover">
      <View style = {{flex:1}}/>
      <View style = {{flex:4 ,backgroundColor:'white' , marginHorizontal:30, borderRadius:30}}>
            <Logo></Logo>
            <View style={{flex:3,borderColor:'blue',borderWidth:1 , justifyContent:'space-evenly' ,padding:10}}>
                
                {/* username area*/}
                <View  style={{flex:1,borderColor:'green',borderWidth:1, flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:3 ,borderColor:'green',borderWidth:0}}>
                       <Text style={[ styles.baseText , styles.LabelText,{alignSelf:'flex-end'}]}>Username</Text>
                    </View>
                    <View style={{flex:6,borderColor:'grey',borderWidth:1}}>
                        <AntDesign name="user" size={24} color={"grey"} style={{position:'absolute',left:1}} />
                        <TextInput style={[ styles.baseText , styles.LabelText ,{paddingLeft:25}]}
                            placeholder="Please Input username"
                            value={username}
                            onChangeText={setUsername}
                        >
                            

                        </TextInput>
                    </View>
                    <View style={{flex:1,borderColor:'blue',borderWidth:0,}}>
                        <Text style={[styles.baseText,{fontWeight:'bold' , color:'red'}]}>*</Text>
                    </View>
                </View>
                    
                {/* password area*/}
                <View style={{flex:1,borderColor:'green',borderWidth:1 ,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:3 ,borderColor:'green',borderWidth:0}}>
                       <Text style={[ styles.baseText , styles.LabelText,{alignSelf:'flex-end'}]}>Password</Text>
                    </View>
                    <View style={{flex:6,borderColor:'grey',borderWidth:1}}>
                        <AntDesign name="user" size={24} color={"grey"} style={{position:'absolute',left:1}} />
                        <TextInput style={[ styles.baseText , styles.LabelText ,{paddingLeft:25}]}
                            placeholder="Please Input Password"
                            value={password}
                            onChangeText={setPassword}
                        >
                        </TextInput>
                    </View>
                    <View style={{flex:1,borderColor:'blue',borderWidth:0}}>
                        <Text style={[styles.baseText,{fontWeight:'bold' , color:'red'}]}>*</Text>
                    </View>
                </View>
                {/* login button area*/}
                <View style={{flex:1,borderColor:'green',borderWidth:1 ,}}>
                    <TouchableOpacity
                        style = {{backgroundColor:'blue' , borderRadius:20,alignItems:'center'}}
                        onPress={()=>{
                            const data = {user:username , pass:password}
                            verifyInput(data);
                        }}
                    >
                        <Text style={{fontSize:30 ,fontWeight:'bold' , color:'white'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
            <View style={{flex:1,borderColor:'red',borderWidth:1 ,alignItems:'flex-end' , paddingRight:20}}>
                <Text style ={{fontSize:20,color:'blue',textDecorationLine:'underline'}}
                    onPress={()=>{
                        Alert.alert('สมัครสมาชิก Go Go Go')
                    }}
                >
                    Register
                </Text>
            </View>
      </View>
      <View style ={{flex:1}}/>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create(
    {
        baseText:{
            fontFamily: (Platform.OS ==='ios') ? 'AppleSDGothicNEo-Thin' : 'roboto'
        },
        LabelText:{
            color:'#3E3E40',
            fontSize:25
        }
    }
)