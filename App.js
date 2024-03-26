import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './App/Screens/LoginScreen/Login'
import Navigator from './Routes/homeStack'


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <Navigator />
      </View>
    </SafeAreaView>
  )
}