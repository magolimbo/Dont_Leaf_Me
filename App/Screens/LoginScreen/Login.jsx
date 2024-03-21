import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('./../../../assets/images/login_plants.jpg')} 
      style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text style={{fontSize:24, color:Colors.WHITE, textAlign:'center'}}>
            Start taking care of your plants today!
        </Text>
        
        {/*login button*/}
        <TouchableOpacity style={styles.button}>
            <Text style={{textAlign:'center', fontSize:17, color:Colors.DARKGREEN, fontWeight: 'bold'}}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width: 350,
        height: 450,
        borderTopLeftRadius: 45, // Radius in alto a sinistra
        borderTopRightRadius: 45, // Radius in alto a destra
        marginTop: 60,
        alignSelf: 'center', // Centra l'immagine orizzontalmente
    },

    subContainer:{
        width: '100%',
        height: '70%',
        backgroundColor: Colors.DARKGREEN,
        marginTop: -20,
        borderTopLeftRadius: 45, // Radius in alto a sinistra
        borderTopRightRadius: 45, // Radius in alto a destra
        padding: 40
    },

    container:{
        backgroundColor: Colors.PURPLE,
    },

    button:{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 40
    }

})
