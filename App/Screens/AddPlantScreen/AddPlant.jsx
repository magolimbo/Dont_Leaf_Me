import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function AddPlant() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text>AddPlant</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.WHITE,
        padding: 25,
        borderColor: 'red',
        borderWidth: 1
    }
})