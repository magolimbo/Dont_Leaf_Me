import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}) {

    const pressHandler = () => {
        navigation.navigate('HomePage')
    }
    return(

        <View style={styles.container}>
            <Image source={require('./../../../assets/images/plantlogin.jpg')}  style={styles.loginImage}/> 
            <View style={styles.subcontainer}>
                <Text style={styles.text}>Start taking care of your plants today!</Text>
                <Text style={{color:Colors.WHITE, textAlign: 'center', fontSize: 18, marginTop: 40 }}>Login</Text>

                <TouchableOpacity onPress = {pressHandler}>
                    <View style={styles.button}>
                        <AntDesign name="google" size={24} color="white" style={{marginRight:20}} />
                        <Text style={{color:Colors.WHITE, textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Sign in with google</Text>
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

    loginImage:{
        height: "60%",
        width: "100%",
        resizeMode: 'cover',
        transform: [{ scale: 1.25 }]
    },

    subcontainer:{
        height: "40%",
        backgroundColor: Colors.DARKGREEN,
        position: 'absolute', // Posizionamento assoluto
        bottom: 0, // Allineamento in basso rispetto al contenitore genitore
        left: 0, // Allineamento a sinistra rispetto al contenitore genitore
        right: 0, // Allineamento a destra rispetto al contenitore genitore
        borderTopLeftRadius: 40, // Arrotondamento angoli in alto a sinistra
        borderTopRightRadius: 40, // Arrotondamento angoli in alto a destra
        padding: 30,
        paddingTop: 60,
    },

    text:{
        color: Colors.WHITE,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    button:{
        backgroundColor: Colors.ORANGE,
        padding: 10,
        margin: 40,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alighItems: 'center',
        borderRadius: 15,

    }
})



// import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Colors from '../../Utils/Colors'

// export default function Login() {
//   return (
//     <View style={styles.container}>
//         <View> 
//             <Image source={require('./../../../assets/images/plantlogin.jpg')} 
//             style={styles.loginImage}
//             />
//         </View>

//       {/* <View style={styles.subContainer}>
//         <Text style={{fontSize:24, color:Colors.WHITE, textAlign:'center'}}>
//             Start taking care of your plants today!
//         </Text> */}
        
//         {/*login button*/}
//         {/* <TouchableOpacity style={styles.button}>
//             <Text style={{textAlign:'center', fontSize:17, color:Colors.DARKGREEN, fontWeight: 'bold'}}>Login with Google</Text>
//         </TouchableOpacity>
//       </View> */}

//     </View>
//   )
// }

// const styles = StyleSheet.create({

//     container:{
//         flex: 1,
//         backgroundColor: Colors.DARKGREEN,
//         //justifyContent: 'center',
//         //alignItems: 'center',
//     },

//     loginImage:{
//         flex: 1,
//         height: "50%",
//         width: "100%",
//         marginTop: 0
//     },

//     subContainer:{
//         // position: 'absolute',
//         marginTop: 10
//     },


//     button:{
//         padding: 15,
//         backgroundColor: Colors.WHITE,
//         borderRadius: 99,
//         marginTop: 40
//     }

// })