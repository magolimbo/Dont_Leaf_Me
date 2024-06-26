import { Button, StyleSheet, Text, View, Image } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import Colors from '../../Utils/Colors'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function AddPlant({ navigation, route}) {

    //--------------------------FONT------------------------------
    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Raleway_800ExtraBold
      });
    
    if (!fontsLoaded) {
    return (
        <Text>Font not loaded</Text>
    )
    }
    //------------------------------------------------------------

    const [species, selectSpecies] = useState("");
    const [soil, selectSoil] = useState("");
    const [nickname, setNickname] = useState('');
    const [height, setHeight] = useState('');

    const addPlantButton = () => {
        navigation.navigate('HomePage', { nickname: nickname, showPlantView: true, soil: soil, species: species, height: height});
    };


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
                            <Image
                                source={require('./../../../assets/images/Plant_1.png')} // replace with the path to your image
                                style={{ width: '90%', height: '90%' }}
                                resizeMode="contain"
                            />
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
                                defaultValue='default name'
                                onChangeText={text => setNickname(text)}
                                value={nickname}
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
                                onChangeText={text => setHeight(text)}
                                value={height}
                            />
                            </View> 
                        </View>
                    </View>

                    <View style={{marginBottom: 20, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily:'Raleway_400Regular', color: Colors.WHITE}} >Plant Species</Text>
                            <View style={{borderRadius: 12, overflow: 'hidden', alignItems: 'center', justifyContent: 'center',borderColor: Colors.WHITE, borderWidth: 2 }}>
                                <Picker
                                    selectedValue={species}
                                    style={{ height: 30, width:150, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
                                    onValueChange={(itemValue, itemIndex) => selectSpecies(itemValue)}
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
                                    selectedValue={soil}
                                    style={{ height: 30, width:150, backgroundColor: Colors.DARKGREEN, color: Colors.WHITE}}
                                    onValueChange={(itemValue, itemIndex) => selectSoil(itemValue)}
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
                  

                </View>

                {/*AI suggestion */}
                <Text style={[styles.title, {color: Colors.DARKGREEN, paddingBottom: 10}] }>Help the AI</Text>
                <View style={[styles.block, {flexDirection:'row', flex:1}]}>
                    <View style={{flex:1}}>
                        <Text style={{color:Colors.WHITE, fontFamily: 'Raleway_400Regular' }}>Upload a photo of your plant and let the AI give you some useful insights.
    You should do this periodically to get the best results</Text>
                    </View>
                    <View style={{flex:1, marginLeft: 40, marginTop: 10}}>
                        <View style={styles.propic}>
                            <FontAwesome name="camera" size={34} color={Colors.ORANGE} />
                        </View>
                    </View>
                </View>

                 {/*button to confirm plant and go back to home screen </TouchableOpacity>*/}
                 <View style={{alignItems:'center', marginBottom: 50}}>
                    <Text style={{fontFamily: 'Raleway_400Regular', marginBottom: 10, color: Colors.DARKGREEN}}>Add your plant to your digital garden</Text>
                    <TouchableOpacity onPress={addPlantButton}>
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
    },
    buttonBack: {
        backgroundColor: Colors.ORANGE,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        backgroundColor: Colors.WHITE,
        borderColor: Colors.ORANGE,
        borderWidth: 2,
        padding: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
})