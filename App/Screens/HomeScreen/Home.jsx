import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../Utils/Colors'
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";


export default function Home({navigation, route}) {

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
        <Text>Font not loaded</Text>
    )
  }

//------------DYNAMIC VIEWS-----------------------------------
const { nickname = "" } = route.params || {}; // Default nickname to empty string
const { showPlantView = false } = route.params || {}; // Default plantView to false

//-------------------------------------------------------

  // handler of the add button for a new plant (navigate to add plant screen)
  const pressHandler = () => {
    navigation.navigate('AddPlantPage', {nickname: nickname})
  }

  return (
    <ScrollView>

    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        {/* title on top */}
        <View style={{marginBottom: 30}}>
          <Text style={styles.title}>Hello Rose</Text>
          <Text style={styles.text}>How are your plants feeling today?</Text>
        </View>

        {/* weather and AI suggestion */}
        <View style={styles.weather}>
          <View style={{width: 110, flexDirection: 'column', alignItems: 'center'}}>
            <Image 
              source={require('./../../../assets/images/weathersymbol.png')} // replace with the path to your image
              style={{width: '70%', height: '70%'}}
              resizeMode="contain"
            />
            <Text style={{fontSize: 24, color: Colors.WHITE, fontFamily: "Raleway_800ExtraBold",}}>23 °C</Text>
          </View>
          <View style={{width: 170}}>
            <Text style={[styles.text, {color: Colors.WHITE}]}>Did you know that the Ficus is actually a genus of plants with over 800 species? </Text>
          </View>
        </View>

        {/* Your plants and Add a new plant */}
        <View style={{flexDirection:'column'}}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.title}>Your plants</Text>
            {/* Add a new plant button */}
            <TouchableOpacity onPress = {pressHandler}>
              <View style={styles.addButton}>
                <Text style={{color: Colors.WHITE, fontFamily: "Raleway_800ExtraBold"}}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* -----------------------Single plant--------------------------------------- */} 
          {!showPlantView && (
            <View>
              <Text style={[styles.text, {textAlign: 'center', marginTop: 150}]}>Your garden looks quite empty. Add your first plant to your digital garden!</Text>
            </View>
          )}
          {showPlantView && (
            <View>
              <TouchableOpacity onPress = {() => {navigation.navigate("PlantPage", {nickname : nickname})}}>
                  <View style={[styles.plant, {height: 80}]}>
                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.WHITE, marginRight: 15 }} />
                    <Text style={{color: Colors.WHITE, fontFamily: "Raleway_800ExtraBold", fontSize: 18}}>{nickname}</Text>
                  </View>
                </TouchableOpacity>
            </View>
          )
          }
          {/* -----------------------Single plant--------------------------------------- */}
        </View>


        

      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.WHITE,
    padding: 25,
    // borderColor: 'red',
    // borderWidth: 1
  },
  //title text like hello Rose
  title:{
    fontSize: 24,
    color: Colors.DARKGREEN,
    fontFamily: "Raleway_800ExtraBold",
    textAlign: 'left',
    // borderColor: 'blue',
    // borderWidth: 1
  },
  text:{
    fontSize: 15,
    color: Colors.DARKGREEN,
    fontFamily: "Raleway_400Regular",
  },
  weather:{
    // borderColor: 'blue',
    // borderWidth: 1,
    backgroundColor: Colors.DARKGREEN,
    height: 130,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  addButton:{
    backgroundColor: Colors.ORANGE,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10
  },
  plant:{
    marginTop: 20,
    backgroundColor: Colors.ORANGE,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  }
})


