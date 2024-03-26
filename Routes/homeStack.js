import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../App/Screens/LoginScreen/Login';
import Home from '../App/Screens/HomeScreen/Home';

//screens to pass to the stack (login, homescreen, aiscreen etc)
//login appears first because its on top of the stack
const screens = {
    LoginPage:{
        screen: Login
    },
    HomePage:{
        screen: Home
    },

}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
