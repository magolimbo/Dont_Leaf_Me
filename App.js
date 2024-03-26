import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './App/Screens/LoginScreen/Login'


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <Login/>
      </View>
    </SafeAreaView>
  )
}