import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'

import { PictureProfile } from './Component/PictureProfile';
import { SaveProfile } from './Component/SaveProfile';
export default function App() {
  return (
    <View style={[styles.container , {  paddingTop:Constant.statusBarHeight}]}>
      <View style={styles.container}>
        <PictureProfile/>
      </View>
      <View style={styles.container}>
        <SaveProfile/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:2,
    borderColor:'red',
  
  },
});
