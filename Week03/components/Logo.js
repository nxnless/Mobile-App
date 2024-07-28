import {Image,View} from 'react-native'

export const Logo = () =>{
    const logo = {uri : 'https://i.ibb.co/yyzQ43h/KU-Logo-PNG.png' }
    return (
        <View style={{flex:2,alignItems:'center' , justifyContent:'center',
            borderWidth:2,
            borderColor:'green'
        }}>
            <Image style ={{flex:1,width:'30%'}}
               source ={logo}
            >
            </Image>
        </View>
    )
}