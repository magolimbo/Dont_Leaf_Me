import { StyleSheet, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Colors from '../../Utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

export default function AddPlant() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            {/* button to go back to home screen */}
            <TouchableOpacity>
                <View style={styles.buttonBack}>
                    <Feather name="arrow-left" size={24} color={Colors.WHITE} />
                </View>     
            </TouchableOpacity>
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
    },
    buttonBack:{
        backgroundColor: Colors.ORANGE,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 50,
        radius: 4
    }
})