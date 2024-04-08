import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './App/Screens/HomeScreen/Home'
import Login from './App/Screens/LoginScreen/Login'
import AddPlant from './App/Screens/AddPlantScreen/AddPlant'
import Plant from './App/Screens/PlantScreen/Plant'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPage">
          <Stack.Screen name="LoginPage" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="HomePage" 
                        component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="AddPlantPage" component={AddPlant} options={{headerShown: false}}/>
          <Stack.Screen name="PlantPage" component={Plant} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}