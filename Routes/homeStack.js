import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../App/Screens/LoginScreen/Login';
import Home from '../App/Screens/HomeScreen/Home';
import AddPlant from '../App/Screens/AddPlantScreen/AddPlant';

//screens to pass to the stack (login, homescreen, aiscreen etc)
//login appears first because its on top of the stack
const screens = {
    LoginPage:{
        screen: Login,
        navigationOptions: {
            headerShown: false, // Nascondi l'intestazione per questa schermata
        },
    },
    HomePage:{
        screen: Home,
        navigationOptions: {
            headerShown: false, // Nascondi l'intestazione per questa schermata
        },
    },
    AddPlantPage:{
        screen: AddPlant,
        navigationOptions: {
            headerShown: false, // Nascondi l'intestazione per questa schermata
        },
    }

}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
