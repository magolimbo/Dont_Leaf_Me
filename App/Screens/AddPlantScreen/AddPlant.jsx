import { Button, StyleSheet, Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Colors from '../../Utils/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AddPlant({navigation}) {



  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            
            {/* button to go back to home screen </TouchableOpacity>*/}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.buttonBack}>
                    <Feather name="arrow-left" size={24} color={Colors.WHITE} />
                </View>     
            </TouchableOpacity>

            {/* title on top */}
            <View style={{marginBottom: 30, marginTop: 20,borderColor: 'black', borderWidth:1}}>
            <Text style={styles.title}>Add a new plant</Text>
            <Text>Be as detailed as possible to let our AI help you!</Text>
            </View>

             {/* weather and AI suggestion */}
            <View style={{backgroundColor: 'red'}}>
                <Text style={{color:Colors.WHITE}}>Plant ID</Text>
                <Text>AI suggestion</Text>
            </View>

        </View>        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.WHITE,
        padding: 25,
        borderColor: 'green',
        borderWidth: 1
    },
    buttonBack:{
        backgroundColor: Colors.ORANGE,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        width: 50,
        justifyContent: 'center', // Aggiungi questa linea
        alignItems: 'center',
    },
     //title text like hello Rose
    title:{
        fontSize: 24,
        color: Colors.DARKGREEN,
        fontWeight: 'bold',
        textAlign: 'left',
  }
})