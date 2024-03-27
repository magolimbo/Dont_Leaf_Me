import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../Utils/Colors'

export default function Home({navigation}) {

  // handler of the add button for a new plant (navihgate to add plant screen)
  const pressHandler = () => {
    navigation.navigate('AddPlantPage')
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        {/* title on top */}
        <View style={{marginBottom: 30}}>
          <Text style={styles.title}>Hello Rose</Text>
          <Text>How are your plants feeling today?</Text>
        </View>

        {/* weather and AI suggestion */}
        <View style={styles.weather}>
          <Text style={{color:Colors.WHITE}}>Weather</Text>
          <Text>AI suggestion</Text>
        </View>

        {/* Your plants and Add a new plant */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.title}>Your plants</Text>
          {/* Add a new plant button */}
          <TouchableOpacity onPress = {pressHandler}>
            <View style={styles.addButton}>
              <Text style={{color: Colors.WHITE, fontWeight: "bold"}}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* plants */}
        <View style={{flex:1}}>
          <Text>Plant1</Text>
        </View>
        <View style={{flex:1}}>
          <Text>Plant1</Text>
        </View>
        <View style={{flex:1}}>
          <Text>Plant1</Text>
        </View>
        <View style={{flex:1}}>
          <Text>Plant1</Text>
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
    borderColor: 'red',
    borderWidth: 1
  },
  //title text like hello Rose
  title:{
    fontSize: 24,
    color: Colors.DARKGREEN,
    fontWeight: 'bold',
    textAlign: 'left',
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
  }
})


