import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
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
const { nicknames } = route.params || { nicknames: [] };

//-------------------------------------------------------

  //const {nickname} = route.params?.nickname || "";


  // handler of the add button for a new plant (navigate to add plant screen)
  const pressHandler = () => {
    navigation.navigate('AddPlantPage')
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
          <Text style={{color:Colors.WHITE}}>Weather</Text>
          <Text>AI suggestions</Text>
        </View>

        {/* Your plants and Add a new plant */}
        <View style={{flexDirection:'column'}}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.title}>Your plants</Text>
            {/* Add a new plant button */}
            <TouchableOpacity onPress = {pressHandler}>
              <View style={styles.addButton}>
                <Text style={{color: Colors.WHITE, fontFamily: "Raleway_800ExtraBold"}}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Single plant */}
          <View style={styles.plant}>
              <View style={{backgroundColor: Colors.WHITE, borderRadius: 50, width: 50, height: 50}}></View>
              {nicknames.map((nickname, index) => (
                <View key={index}>
                  <Text>{nickname}</Text>
                </View>
              ))}
          </View>
        </View>

        <View>
          <TouchableOpacity onPress = {() => {navigation.navigate("PlantPage", {nicknames : nicknames})}}>
              <View style={styles.addButton}>
                <Text style={{color: Colors.WHITE, fontFamily: "Raleway_800ExtraBold"}}>graphs</Text>
              </View>
            </TouchableOpacity>
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
    //borderColor: 'blue',
    //borderWidth: 1,
    backgroundColor: Colors.DARKGREEN,
    padding: 50,
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
    marginTop: 30,
    backgroundColor: Colors.ORANGE,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  }
})


