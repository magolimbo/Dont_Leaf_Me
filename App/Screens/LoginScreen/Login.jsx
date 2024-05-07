import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { AntDesign } from '@expo/vector-icons';
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";

export default function Login({navigation}) {

    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Raleway_800ExtraBold
      });

      if (!fontsLoaded) {
        return (
            <Text>Font not loaded</Text>
        )
      }

    const pressHandler = () => {
        navigation.navigate('HomePage')
    };
    return(

        <View style={styles.container}>
            <Image source={require('./../../../assets/images/plantlogin.jpg')}  style={styles.loginImage}/> 
            <View style={styles.subcontainer}>
                <Text style={styles.title}>Don't Leaf me</Text>
                <Text style={styles.text}>Start taking care of your plants today!</Text>

                <TouchableOpacity onPress = {pressHandler}>
                    <View style={styles.button}>
                        <AntDesign name="google" size={24} color="white" style={{marginRight:20}} />
                        <Text style={{color:Colors.WHITE, textAlign: 'center', fontSize: 16, fontFamily: "Raleway_400Regular"}}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    title: {
        fontSize: 24,
        color: Colors.WHITE,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'Raleway_800ExtraBold',
    },

    loginImage:{
        height: "60%",
        width: "100%",
        resizeMode: 'cover',
        transform: [{ scale: 1.25 }]
    },

    subcontainer:{
        height: "40%",
        backgroundColor: Colors.DARKGREEN,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        paddingTop: 60,
    },

    text: {
        color: Colors.WHITE,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: "Raleway_400Regular",
    },

    button:{
        backgroundColor: Colors.ORANGE,
        padding: 10,
        margin: 40,
        marginTop: 35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alighItems: 'center',
        borderRadius: 15,

    }
})