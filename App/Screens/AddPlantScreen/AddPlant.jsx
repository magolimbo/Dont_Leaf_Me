import { Button, StyleSheet, Text, View} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '../../Utils/Colors'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import { AntDesign } from '@expo/vector-icons';
import { Camera, CameraType, requestCameraPermissionsAsync } from 'expo-camera';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export default function AddPlant({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraVisible, setCameraVisible] = useState(false);
    const cameraRef = useRef(null);
    const [profilePictureUri, setProfilePictureUri] = useState(null);
    const [selectedValue, setSelectedValue] = useState("option1");
    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Raleway_800ExtraBold
    });

    const toggleCamera = async () => {
        // Capture image and save to device storage
        if (!hasPermission) {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        }
        if (!cameraVisible) {
            setCameraVisible(true);
        }
        else {
            setCameraVisible(false);
        }
    };

    const capturePhoto = async () => {
        try {
            if (cameraRef.current) {
                const photo = await cameraRef.current.takePictureAsync();
                if (photo.uri) {
                    setCapturedImageUri(photo.uri);
                    await AsyncStorage.setItem('profilePictureUri', photo.uri);
                    console.log('Profile picture URI saved successfully:', photo.uri);
                } else {
                    console.error('Failed to capture photo: URI is undefined');
                }
            } else {
                console.error('Camera reference is not defined');
            }
        } catch (error) {
            console.error('Error capturing photo:', error);
        }
    };

    const toggleCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };


    useEffect(() => {
        (async () => {
            // Controlla i permessi della fotocamera
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');

            // Recupera l'URI dell'immagine salvata dall'AsyncStorage
            try {
                const uri = await AsyncStorage.getItem('profilePictureUri');
                if (uri) {
                    setProfilePictureUri(uri);
                }
            } catch (error) {
                console.error('Error retrieving profile picture URI:', error);
            }
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    
    if (!fontsLoaded) {
    return (
        <Text>Font not loaded</Text>
    )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>

                {/* button to go back to home screen </TouchableOpacity>*/}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.buttonBack}>
                        <Feather name="arrow-left" size={24} color={Colors.WHITE} />
                    </View>
                </TouchableOpacity>

                {/* title on top */}
                <View style={{ marginBottom: 30, marginTop: 20}}>
                    <Text style={styles.title}>Add a new plant</Text>
                    <Text style={{fontFamily: 'Raleway_400Regular', color: Colors.DARKGREEN}}>Be as detailed as possible to let our AI help you!</Text>
                </View>

                <Text style={[styles.title, {color: Colors.DARKGREEN, paddingBottom: 10}] }>Plant ID</Text>

                {/* plant id */}
                <View style={styles.block}>

                    {/* PROFILE PICTURE */}
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.propic}>
                            {/* Se è presente un'immagine come profile picture, mostra l'immagine */}
                            {profilePictureUri && (
                                <TouchableOpacity onPress={() => { uri }}>
                                    <Image source={{ uri: profilePictureUri }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                </TouchableOpacity>
                            )}
                            {/* Messaggio di fallback nel caso in cui non ci sia una foto profilo */}
                            {!profilePictureUri && (
                                <Text>No profile picture found</Text>
                            )}
                        </View>
                        <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE, marginBottom: 30}}>Pro Pic</Text>
                    </View>

                    {/* INPUT FIELDS */}
                    <View style={{marginBottom: 20, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE}} >Nickname</Text>
                           
                        <View style={{ borderRadius: 12, overflow: 'hidden',alignItems2: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2, paddingLeft: 15}}>
                            <TextInput
                                style={{ height: 30, width:150, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
                                placeholder="Hot Ficus"
                            />
                        </View> 
                        </View>
    
                    </View>

                    <View style={{marginBottom: 20, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE}} >Height</Text>
                           
                        <View style={{ borderRadius: 12, overflow: 'hidden',alignItems2: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2, paddingLeft: 15}}>
                            <TextInput
                                style={{ height: 30, width:150, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
                                placeholder="140cm"
                            />
                        </View> 
                        </View>
    
                    </View>

                    <View style={{marginBottom: 20, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE}} >Plant Species</Text>
                            <View style={{borderRadius: 12, overflow: 'hidden', alignItems: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2 }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 30, width:150, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Rose" value="Rose" />
                                    <Picker.Item label="Sunflower" value="Sunflower" />
                                    <Picker.Item label="Orchid" value="Orchid" />
                                    <Picker.Item label="Ficus" value="Ficus" />
                                    <Picker.Item label="Lavender" value="Lavender" />
                                    <Picker.Item label="Pine" value="Pine" />
                                    <Picker.Item label="Cactus" value="Cactus" />
                                    <Picker.Item label="Peony" value="Peony" />
                                    <Picker.Item label="Geranium" value="Geranium" />
                                    <Picker.Item label="Tulip" value="Tulip" />

                                </Picker>
                            </View> 
                        </View>
    
                    </View>


                    <View style={{marginBottom: 20, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE}} >Type of soil</Text>
                            <View style={{borderRadius: 12, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderColor: Colors.WHITE, borderWidth: 2 }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 30, width:150, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Clay" value="Clay" />
                                    <Picker.Item label="Loam" value="Loam" />
                                    <Picker.Item label="Sand" value="Sand" />
                                    <Picker.Item label="Silt" value="Silt" />
                                    <Picker.Item label="Peat" value="Peat" />
                                    <Picker.Item label="Chalk" value="Chalk" />
                                    <Picker.Item label="Rocky" value="Rocky" />
                                    <Picker.Item label="Humus" value="Humus" />
                                    <Picker.Item label="Acidic" value="Acidic" />
                                    <Picker.Item label="Alkaline" value="Alkaline" />
                                </Picker>
                            </View> 
                        </View>
                    </View>



                    <View style={{marginBottom: 20, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE}} >Location</Text>
                            <View style={{borderRadius: 12, overflow: 'hidden', alignItems: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2 }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 30, width:150, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Rose" value="Rose" />
                                    <Picker.Item label="Sunflower" value="Sunflower" />
                                    <Picker.Item label="Orchid" value="Orchid" />
                                    <Picker.Item label="Ficus" value="Ficus" />
                                    <Picker.Item label="Lavender" value="Lavender" />
                                    <Picker.Item label="Pine" value="Pine" />
                                    <Picker.Item label="Cactus" value="Cactus" />
                                    <Picker.Item label="Peony" value="Peony" />
                                    <Picker.Item label="Geranium" value="Geranium" />
                                    <Picker.Item label="Tulip" value="Tulip" />

                                </Picker>
                            </View> 
                        </View>
    
                    </View>                    

                </View>

                {/*AI suggestion */}
                <Text style={[styles.title, {color: Colors.DARKGREEN, paddingBottom: 10}] }>Help the AI</Text>
                <View style={[styles.block, {flexDirection:'row', flex:1}]}>
                    <View style={{flex:1}}>
                        <Text style={{color:Colors.WHITE, fontFamily: 'Raleway_400Regular' }}>Upload a photo of your plant and let the AI give you some useful insights.
    You should do this periodically to get the best results</Text>
                    </View>
                    {/* Block for camera */}
                    <View style={{ flex: 1, marginLeft: 40, marginTop: 10 }}>
                        {/* Button to open/close camera */}
                        <TouchableOpacity onPress={toggleCamera}>
                            <View style={{ backgroundColor: Colors.ORANGE, padding: 10 }}>
                                <Text style={{ color: Colors.WHITE, alignItems: 'center', alignSelf: 'center' }}>{cameraVisible ? 'Close Camera' : 'Open Camera'}</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Render camera if visible */}
                        {cameraVisible && (
                            <View style={{ flex: 1 }}>
                                <Camera style={{ flex: 1 }} type={type}>
                                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            style={{
                                                flex: 0.1,
                                                alignSelf: 'flex-end',
                                                alignItems: 'center',
                                            }}
                                            onPress={toggleCameraType}
                                        >
                                            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                                        </TouchableOpacity>
                                    </View>
                                </Camera>
                                {/* Button to capture photo */}
                                <TouchableOpacity onPress={capturePhoto} style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 18, color: 'white' }}>Capture Photo</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>

                 {/* button to confirm plant and go back to home screen </TouchableOpacity>*/}
                 <View style={{alignItems:'center', marginBottom: 50}}>
                    <Text style={{fontFamily: 'Raleway_400Regular', marginBottom: 10, color: Colors.DARKGREEN}}>Add your plant to your digital garden</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.buttonBack}>
                            <AntDesign name="check" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                 </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 25,
        // borderColor: 'green',
        // borderWidth: 1
    },
    buttonBack: {
        backgroundColor: Colors.ORANGE,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        width: 70,
        height: 40,
        justifyContent: 'center', // Aggiungi questa linea
        alignItems: 'center',
    },
    //title text like hello Rose
    title: {
        fontSize: 24,
        color: Colors.DARKGREEN,
        fontFamily: "Raleway_800ExtraBold",
        textAlign: 'left',
    },
    block: {
        backgroundColor: Colors.DARKGREEN,
        padding: 20,
        borderRadius: 20,
        marginBottom: 30,
    },
    propic: {
        backgroundColor: Colors.ORANGE,
        padding: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
})










// <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

// <View style={{flex:1, alignItems: 'center'}}>
//     <View style={styles.propic}>
//     </View>
//     <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE, marginBottom: 30}}>Pro Pic</Text>
//     <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE, marginBottom: 25}}>Height:</Text>
//     <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE, marginBottom: 25}}>Type of Soil:</Text>
//     <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE}}>Location:</Text>

// </View>
// <View style={{flex:2, marginLeft: 20}}>
//     {/* DROPDOWN MENU PLANT SPECIES*/}
//     <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE, marginBottom: 5}}>Plant Species</Text>
    // <View style={{ borderRadius: 12, overflow: 'hidden',alignItems2: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2 }}>
    //     <Picker
    //         selectedValue={selectedValue}
    //         style={{ height: 30, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
    //         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    //     >
    //         <Picker.Item label="Rose" value="Rose" />
    //         <Picker.Item label="Sunflower" value="Sunflower" />
    //         <Picker.Item label="Orchid" value="Orchid" />
    //         <Picker.Item label="Ficus" value="Ficus" />
    //         <Picker.Item label="Lavender" value="Lavender" />
    //         <Picker.Item label="Pine" value="Pine" />
    //         <Picker.Item label="Cactus" value="Cactus" />
    //         <Picker.Item label="Peony" value="Peony" />
    //         <Picker.Item label="Geranium" value="Geranium" />
    //         <Picker.Item label="Tulip" value="Tulip" />

    //     </Picker>
    // </View> 
//     {/* INPUT TEXT NICKNAME */}
    // <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE, marginBottom: 5, marginTop: 10}}>Nickname</Text>
    // <View style={{ borderRadius: 12, overflow: 'hidden',alignItems2: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2, paddingLeft: 15, marginBottom: 30 }}>
    //     <TextInput
    //         style={{ height: 30, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
    //         placeholder="Hot Ficus"
    //     />
    // </View> 

//     {/* INPUT TEXT NICKNAME */}
//     <View style={{ borderRadius: 12, overflow: 'hidden',alignItems2: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2, paddingLeft: 15, marginBottom: 10 }}>
//         <TextInput
//             style={{ height: 30, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
//             placeholder="50 cm"
//         />
//     </View> 

//     {/* INPUT TEXT NICKNAME */}
//     <View style={{ borderRadius: 12, overflow: 'hidden',alignItems2: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2, marginBottom: 10 }}>
//         <Picker
//             selectedValue={selectedValue}
//             style={{ height: 30, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//         >
//             <Picker.Item label="Rose" value="Rose" />
//             <Picker.Item label="Sunflower" value="Sunflower" />
//             <Picker.Item label="Orchid" value="Orchid" />
//             <Picker.Item label="Ficus" value="Ficus" />
//             <Picker.Item label="Lavender" value="Lavender" />
//             <Picker.Item label="Pine" value="Pine" />
//             <Picker.Item label="Cactus" value="Cactus" />
//             <Picker.Item label="Peony" value="Peony" />
//             <Picker.Item label="Geranium" value="Geranium" />
//             <Picker.Item label="Tulip" value="Tulip" />

//         </Picker>
//     </View>  

//     {/* INPUT TEXT NICKNAME */}
//     <View style={{ borderRadius: 12, overflow: 'hidden',alignItems2: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2 }}>
//         <Picker
//             selectedValue={selectedValue}
//             style={{ height: 30, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//         >
//             <Picker.Item label="Rose" value="Rose" />
//             <Picker.Item label="Sunflower" value="Sunflower" />
//             <Picker.Item label="Orchid" value="Orchid" />
//             <Picker.Item label="Ficus" value="Ficus" />
//             <Picker.Item label="Lavender" value="Lavender" />
//             <Picker.Item label="Pine" value="Pine" />
//             <Picker.Item label="Cactus" value="Cactus" />
//             <Picker.Item label="Peony" value="Peony" />
//             <Picker.Item label="Geranium" value="Geranium" />
//             <Picker.Item label="Tulip" value="Tulip" />

//         </Picker>
//     </View> 

// </View>
// </View>