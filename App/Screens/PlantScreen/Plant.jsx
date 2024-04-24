import { Button, Pressable, StyleSheet, Text, View, Switch, Alert, Modal, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useRef, useEffect, Component } from 'react'
import Colors from '../../Utils/Colors'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5, Ionicons, Fontisto } from '@expo/vector-icons';
import { LineChart, ruleTypes, BarChart, PieChart } from 'react-native-gifted-charts';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TableAvg from './table';


export default function Plant({ navigation, route }) {

    //------------button selected (general state, water ecc)----------------
    const [isPressed, setIsPressed] = useState(false);
    const [currentButton, setCurrentButton] = useState(null);
    const [showWaterLine, setShowWaterLine] = useState(true);
    const [showSunLine, setShowSunLine] = useState(true);
    const [showDiseasesLine, setShowDiseasesLine] = useState(true);
    const [showChartWater, setShowChartWater] = useState(true);
    const [showMonthAverageLine, setShowMonthAverageLine] = useState(false);

    const screenWidth = Dimensions.get('window').width;
    const ref = useRef(null)



    const handleAddData = (inputValue) => {
        if (inputValue.trim() !== '') {
            const newValue = parseFloat(inputValue);
            const newDataPoint = { value: newValue, label: '10 May', dataPointText: String(newValue) };
            setWaterData([...waterDataLine, newDataPoint]); // Add new data point to the current dataset
            setInputValue(''); // Reset the input field
            setShowInput(!showInput)
        }
        else if (inputValue.trim() === '2') {
            const newValue = parseFloat(inputValue);
            const newDataPoint = { value: newValue, label: '10 May', dataPointText: String(newValue) };
            setWaterData([...waterDataLine, newDataPoint]); // Add new data point to the current dataset
            setInputValue(''); // Reset the input field
            setShowInput(!showInput)
        }
    };


    const handleAddDataWater = (inputValue) => {
        if (inputValue.trim() !== '') {
            const newValue = parseFloat(inputValue);
            const newDataPoint = { value: newValue, label: '10 May', dataPointText: String(newValue) };
            setWaterData([...waterDataLine, newDataPoint]); // Add new data point to the current dataset
            setInputValue(''); // Reset the input field
            setShowInputWater(!showInputWater)
            setShowInput(!showInput)
        }
    };


    const [inputValue, setInputValue] = useState('');

    const [waterDataLine, setWaterData] = useState([
        { value: 2.5, label: '1 Jan', dataPointText: '2.5' },
        { value: 3.0, label: '2 Jan', dataPointText: '3.0' },
        { value: 2.0, label: '3 Jan', dataPointText: '2.0' },
        { value: 2.0, label: '4 Jan', dataPointText: '2.0' },
        { value: 2.5, label: '5 Jan', dataPointText: '2.5' },
        { value: 2.0, label: '6 Jan', dataPointText: '2.0' },
        { value: 2.0, label: '7 Jan', dataPointText: '2.0' },
        { value: 3.5, label: '8 Jan', dataPointText: '3.5' },
        { value: 2.5, label: '9 Jan', dataPointText: '2.5' },
        { value: 2.5, label: '10 Jan', dataPointText: '2.5' },
        { value: 3.5, label: '11 Jan', dataPointText: '3.5' },
        { value: 4.0, label: '12 Jan', dataPointText: '4.0' },
        { value: 4.0, label: '13 Jan', dataPointText: '4.0' },
        { value: 3.0, label: '14 Jan', dataPointText: '3.0' },
        { value: 2.0, label: '15 Jan', dataPointText: '2.0' },
        { value: 3.0, label: '16 Jan', dataPointText: '3.0' },
        { value: 2.5, label: '17 Jan', dataPointText: '2.5' },
        { value: 2.0, label: '18 Jan', dataPointText: '2.0' },
        { value: 3.5, label: '19 Jan', dataPointText: '3.5' },
        { value: 2.0, label: '20 Jan', dataPointText: '2.0' },
        { value: 3.0, label: '21 Jan', dataPointText: '3.0' },
        { value: 2.5, label: '22 Jan', dataPointText: '2.5' },
        { value: 3.0, label: '23 Jan', dataPointText: '3.0' },
        { value: 4.5, label: '24 Jan', dataPointText: '4.5' },
        { value: 3.5, label: '25 Jan', dataPointText: '3.5' },
        { value: 3.5, label: '26 Jan', dataPointText: '3.5' },
        { value: 3.5, label: '27 Jan', dataPointText: '3.5' },
        { value: 4.5, label: '28 Jan', dataPointText: '4.5' },
        { value: 2.5, label: '29 Jan', dataPointText: '2.5' },
        { value: 4.0, label: '30 Jan', dataPointText: '4.0' },
        { value: 4.5, label: '31 Jan', dataPointText: '4.5' },
        // February
        { value: 4.5, label: '1 Feb', dataPointText: '4.5' },
        { value: 3.0, label: '2 Feb', dataPointText: '3.0' },
        { value: 3.5, label: '3 Feb', dataPointText: '3.5' },
        { value: 4.0, label: '4 Feb', dataPointText: '4.0' },
        { value: 4.0, label: '5 Feb', dataPointText: '4.0' },
        { value: 4.0, label: '6 Feb', dataPointText: '4.0' },
        { value: 3.0, label: '7 Feb', dataPointText: '3.0' },
        { value: 3.0, label: '8 Feb', dataPointText: '3.0' },
        { value: 4.0, label: '9 Feb', dataPointText: '4.0' },
        { value: 4.0, label: '10 Feb', dataPointText: '4.0' },
        { value: 3.5, label: '11 Feb', dataPointText: '3.5' },
        { value: 4.0, label: '12 Feb', dataPointText: '4.0' },
        { value: 3.5, label: '13 Feb', dataPointText: '3.5' },
        { value: 3.5, label: '14 Feb', dataPointText: '3.5' },
        { value: 4.0, label: '15 Feb', dataPointText: '4.0' },
        { value: 4.5, label: '16 Feb', dataPointText: '4.5' },
        { value: 4.0, label: '17 Feb', dataPointText: '4.0' },
        { value: 3.5, label: '18 Feb', dataPointText: '3.5' },
        { value: 3.0, label: '19 Feb', dataPointText: '3.0' },
        { value: 3.5, label: '20 Feb', dataPointText: '3.5' },
        { value: 3.5, label: '21 Feb', dataPointText: '3.5' },
        { value: 4.0, label: '22 Feb', dataPointText: '4.0' },
        { value: 4.5, label: '23 Feb', dataPointText: '4.5' },
        { value: 3.0, label: '24 Feb', dataPointText: '3.0' },
        { value: 4.0, label: '25 Feb', dataPointText: '4.0' },
        { value: 4.5, label: '26 Feb', dataPointText: '4.5' },
        { value: 3.0, label: '27 Feb', dataPointText: '3.0' },
        { value: 4.0, label: '28 Feb', dataPointText: '4.0' },
        // March
        { value: 2.5, label: '1 Mar', dataPointText: '2.5' },
        { value: 2.5, label: '2 Mar', dataPointText: '2.5' },
        { value: 4.0, label: '3 Mar', dataPointText: '4.0' },
        { value: 4.5, label: '4 Mar', dataPointText: '4.5' },
        { value: 2.5, label: '5 Mar', dataPointText: '2.5' },
        { value: 3.5, label: '6 Mar', dataPointText: '3.5' },
        { value: 2.5, label: '7 Mar', dataPointText: '2.5' },
        { value: 4.5, label: '8 Mar', dataPointText: '4.5' },
        { value: 3.5, label: '9 Mar', dataPointText: '3.5' },
        { value: 3.0, label: '10 Mar', dataPointText: '3.0' },
        { value: 3.0, label: '11 Mar', dataPointText: '3.0' },
        { value: 2.5, label: '12 Mar', dataPointText: '2.5' },
        { value: 2.5, label: '13 Mar', dataPointText: '2.5' },
        { value: 4.0, label: '14 Mar', dataPointText: '4.0' },
        { value: 2.5, label: '15 Mar', dataPointText: '2.5' },
        { value: 4.0, label: '16 Mar', dataPointText: '4.0' },
        { value: 4.0, label: '17 Mar', dataPointText: '4.0' },
        { value: 3.0, label: '18 Mar', dataPointText: '3.0' },
        { value: 2.5, label: '19 Mar', dataPointText: '2.5' },
        { value: 2.5, label: '20 Mar', dataPointText: '2.5' },
        { value: 4.5, label: '21 Mar', dataPointText: '4.5' },
        { value: 2.5, label: '22 Mar', dataPointText: '2.5' },
        { value: 3.0, label: '23 Mar', dataPointText: '3.0' },
        { value: 3.0, label: '24 Mar', dataPointText: '3.0' },
        { value: 4.0, label: '25 Mar', dataPointText: '4.0' },
        { value: 4.0, label: '26 Mar', dataPointText: '4.0' },
        { value: 3.5, label: '27 Mar', dataPointText: '3.5' },
        { value: 3.5, label: '28 Mar', dataPointText: '3.5' },
        { value: 3.0, label: '29 Mar', dataPointText: '3.0' },
        { value: 3.5, label: '30 Mar', dataPointText: '3.5' },
        { value: 2.5, label: '31 Mar', dataPointText: '2.5' },
        // April
        { value: 3.0, label: '1 Apr', dataPointText: '3.0' },
        { value: 2.5, label: '2 Apr', dataPointText: '2.5' },
        { value: 3.5, label: '3 Apr', dataPointText: '3.5' },
        { value: 3.5, label: '4 Apr', dataPointText: '3.5' },
        { value: 4.0, label: '5 Apr', dataPointText: '4.0' },
        { value: 3.5, label: '6 Apr', dataPointText: '3.5' },
        { value: 4.0, label: '7 Apr', dataPointText: '4.0' },
        { value: 3.5, label: '8 Apr', dataPointText: '3.5' },
        { value: 3.5, label: '9 Apr', dataPointText: '3.5' },
        { value: 3.5, label: '10 Apr', dataPointText: '3.5' },
        { value: 3.5, label: '11 Apr', dataPointText: '3.5' },
        { value: 2.5, label: '12 Apr', dataPointText: '2.5' },
        { value: 2.5, label: '13 Apr', dataPointText: '2.5' },
        { value: 3.0, label: '14 Apr', dataPointText: '3.0' },
        { value: 3.5, label: '15 Apr', dataPointText: '3.5' },
        { value: 2.5, label: '16 Apr', dataPointText: '2.5' },
        { value: 4.0, label: '17 Apr', dataPointText: '4.0' },
        { value: 3.0, label: '18 Apr', dataPointText: '3.0' },
        { value: 2.5, label: '19 Apr', dataPointText: '2.5' },
        { value: 2.5, label: '20 Apr', dataPointText: '2.5' },
        { value: 4.0, label: '21 Apr', dataPointText: '4.0' },
        { value: 2.5, label: '22 Apr', dataPointText: '2.5' },
        { value: 4.0, label: '23 Apr', dataPointText: '4.0' },
        { value: 4.0, label: '24 Apr', dataPointText: '4.0' },
        { value: 3.0, label: '25 Apr', dataPointText: '3.0' },
        { value: 4.0, label: '26 Apr', dataPointText: '4.0' },
        { value: 3.5, label: '27 Apr', dataPointText: '3.5' },
        { value: 3.5, label: '28 Apr', dataPointText: '3.5' },
        { value: 3.5, label: '29 Apr', dataPointText: '3.5' },
        { value: 3.5, label: '30 Apr', dataPointText: '3.5' },
        // May
        { value: 2.5, label: '1 May', dataPointText: '2.5' },
        { value: 3.0, label: '2 May', dataPointText: '3.0' },
        { value: 2.0, label: '3 May', dataPointText: '2.0' },
        { value: 4.0, label: '4 May', dataPointText: '4.0' },
        { value: 3.5, label: '5 May', dataPointText: '3.5' },
        { value: 3.5, label: '6 May', dataPointText: '3.5' },
        { value: 2.5, label: '7 May', dataPointText: '2.5' },
        { value: 3.5, label: '8 May', dataPointText: '3.5' },
        { value: 4.5, label: '9 May', dataPointText: '4.5' },
    ]);

    const sumWater = waterDataLine.reduce((a, b) => a + b.value, 0);
    const avgWater = sumWater / waterDataLine.length;
    const minWater = Math.min(...waterDataLine.map(item => item.value));
    const maxWater = Math.max(...waterDataLine.map(item => item.value));

    const sunDataLine = [
        { value: 5, label: '1 Jan', dataPointText: '5' },
        { value: 4, label: '2 Jan', dataPointText: '4' },
        { value: 5, label: '3 Jan', dataPointText: '5' },
        { value: 6, label: '4 Jan', dataPointText: '6' },
        { value: 6, label: '5 Jan', dataPointText: '6' },
        { value: 5, label: '6 Jan', dataPointText: '5' },
        { value: 7, label: '7 Jan', dataPointText: '7' },
        { value: 4, label: '8 Jan', dataPointText: '4' },
        { value: 6, label: '9 Jan', dataPointText: '6' },
        { value: 5, label: '10 Jan', dataPointText: '5' },
        { value: 5, label: '11 Jan', dataPointText: '5' },
        { value: 6, label: '12 Jan', dataPointText: '6' },
        { value: 4, label: '13 Jan', dataPointText: '4' },
        { value: 5, label: '14 Jan', dataPointText: '5' },
        { value: 6, label: '15 Jan', dataPointText: '6' },
        { value: 5, label: '16 Jan', dataPointText: '5' },
        { value: 7, label: '17 Jan', dataPointText: '7' },
        { value: 4, label: '18 Jan', dataPointText: '4' },
        { value: 6, label: '19 Jan', dataPointText: '6' },
        { value: 5, label: '20 Jan', dataPointText: '5' },
        { value: 5, label: '21 Jan', dataPointText: '5' },
        { value: 6, label: '22 Jan', dataPointText: '6' },
        { value: 7, label: '23 Jan', dataPointText: '7' },
        { value: 5, label: '24 Jan', dataPointText: '5' },
        { value: 5, label: '25 Jan', dataPointText: '5' },
        { value: 4, label: '26 Jan', dataPointText: '4' },
        { value: 7, label: '27 Jan', dataPointText: '7' },
        { value: 6, label: '28 Jan', dataPointText: '6' },
        { value: 4, label: '29 Jan', dataPointText: '4' },
        { value: 6, label: '30 Jan', dataPointText: '6' },
        { value: 5, label: '31 Jan', dataPointText: '5' },
        // February
        { value: 7, label: '1 Feb', dataPointText: '7' },
        { value: 5, label: '2 Feb', dataPointText: '5' },
        { value: 6, label: '3 Feb', dataPointText: '6' },
        { value: 4, label: '4 Feb', dataPointText: '4' },
        { value: 6, label: '5 Feb', dataPointText: '6' },
        { value: 7, label: '6 Feb', dataPointText: '7' },
        { value: 5, label: '7 Feb', dataPointText: '5' },
        { value: 6, label: '8 Feb', dataPointText: '6' },
        { value: 5, label: '9 Feb', dataPointText: '5' },
        { value: 7, label: '10 Feb', dataPointText: '7' },
        { value: 6, label: '11 Feb', dataPointText: '6' },
        { value: 4, label: '12 Feb', dataPointText: '4' },
        { value: 7, label: '13 Feb', dataPointText: '7' },
        { value: 6, label: '14 Feb', dataPointText: '6' },
        { value: 5, label: '15 Feb', dataPointText: '5' },
        { value: 6, label: '16 Feb', dataPointText: '6' },
        { value: 5, label: '17 Feb', dataPointText: '5' },
        { value: 7, label: '18 Feb', dataPointText: '7' },
        { value: 4, label: '19 Feb', dataPointText: '4' },
        { value: 6, label: '20 Feb', dataPointText: '6' },
        { value: 7, label: '21 Feb', dataPointText: '7' },
        { value: 5, label: '22 Feb', dataPointText: '5' },
        { value: 6, label: '23 Feb', dataPointText: '6' },
        { value: 7, label: '24 Feb', dataPointText: '7' },
        { value: 5, label: '25 Feb', dataPointText: '5' },
        { value: 6, label: '26 Feb', dataPointText: '6' },
        { value: 7, label: '27 Feb', dataPointText: '7' },
        { value: 5, label: '28 Feb', dataPointText: '5' },
        // March
        { value: 4, label: '1 Mar', dataPointText: '4' },
        { value: 5, label: '2 Mar', dataPointText: '5' },
        { value: 6, label: '3 Mar', dataPointText: '6' },
        { value: 7, label: '4 Mar', dataPointText: '7' },
        { value: 5, label: '5 Mar', dataPointText: '5' },
        { value: 6, label: '6 Mar', dataPointText: '6' },
        { value: 7, label: '7 Mar', dataPointText: '7' },
        { value: 5, label: '8 Mar', dataPointText: '5' },
        { value: 6, label: '9 Mar', dataPointText: '6' },
        { value: 7, label: '10 Mar', dataPointText: '7' },
        { value: 5, label: '11 Mar', dataPointText: '5' },
        { value: 6, label: '12 Mar', dataPointText: '6' },
        { value: 7, label: '13 Mar', dataPointText: '7' },
        { value: 5, label: '14 Mar', dataPointText: '5' },
        { value: 6, label: '15 Mar', dataPointText: '6' },
        { value: 7, label: '16 Mar', dataPointText: '7' },
        { value: 5, label: '17 Mar', dataPointText: '5' },
        { value: 6, label: '18 Mar', dataPointText: '6' },
        { value: 7, label: '19 Mar', dataPointText: '7' },
        { value: 5, label: '20 Mar', dataPointText: '5' },
        { value: 6, label: '21 Mar', dataPointText: '6' },
        { value: 7, label: '22 Mar', dataPointText: '7' },
        { value: 5, label: '23 Mar', dataPointText: '5' },
        { value: 6, label: '24 Mar', dataPointText: '6' },
        { value: 7, label: '25 Mar', dataPointText: '7' },
        { value: 5, label: '26 Mar', dataPointText: '5' },
        { value: 6, label: '27 Mar', dataPointText: '6' },
        { value: 7, label: '28 Mar', dataPointText: '7' },
        { value: 5, label: '29 Mar', dataPointText: '5' },
        { value: 6, label: '30 Mar', dataPointText: '6' },
        { value: 7, label: '31 Mar', dataPointText: '7' },
        // April
        { value: 5, label: '1 Apr', dataPointText: '5' },
        { value: 6, label: '2 Apr', dataPointText: '6' },
        { value: 7, label: '3 Apr', dataPointText: '7' },
        { value: 5, label: '4 Apr', dataPointText: '5' },
        { value: 6, label: '5 Apr', dataPointText: '6' },
        { value: 7, label: '6 Apr', dataPointText: '7' },
        { value: 5, label: '7 Apr', dataPointText: '5' },
        { value: 6, label: '8 Apr', dataPointText: '6' },
        { value: 7, label: '9 Apr', dataPointText: '7' },
        { value: 5, label: '10 Apr', dataPointText: '5' },
        { value: 6, label: '11 Apr', dataPointText: '6' },
        { value: 7, label: '12 Apr', dataPointText: '7' },
        { value: 5, label: '13 Apr', dataPointText: '5' },
        { value: 6, label: '14 Apr', dataPointText: '6' },
        { value: 7, label: '15 Apr', dataPointText: '7' },
        { value: 5, label: '16 Apr', dataPointText: '5' },
        { value: 6, label: '17 Apr', dataPointText: '6' },
        { value: 7, label: '18 Apr', dataPointText: '7' },
        { value: 5, label: '19 Apr', dataPointText: '5' },
        { value: 6, label: '20 Apr', dataPointText: '6' },
        { value: 7, label: '21 Apr', dataPointText: '7' },
        { value: 5, label: '22 Apr', dataPointText: '5' },
        { value: 6, label: '23 Apr', dataPointText: '6' },
        { value: 7, label: '24 Apr', dataPointText: '7' },
        { value: 5, label: '25 Apr', dataPointText: '5' },
        { value: 6, label: '26 Apr', dataPointText: '6' },
        { value: 7, label: '27 Apr', dataPointText: '7' },
        { value: 5, label: '28 Apr', dataPointText: '5' },
        { value: 6, label: '29 Apr', dataPointText: '6' },
        { value: 7, label: '30 Apr', dataPointText: '7' },
        // May
        { value: 6, label: '1 May', dataPointText: '6' },
        { value: 5, label: '2 May', dataPointText: '5' },
        { value: 7, label: '3 May', dataPointText: '7' },
        { value: 6, label: '4 May', dataPointText: '6' },
        { value: 5, label: '5 May', dataPointText: '5' },
        { value: 7, label: '6 May', dataPointText: '7' },
        { value: 6, label: '7 May', dataPointText: '6' },
        { value: 5, label: '8 May', dataPointText: '5' },
        { value: 7, label: '9 May', dataPointText: '7' },
    ];
    const sumSun = sunDataLine.reduce((a, b) => a + b.value, 0);
    const avgSun = sumSun / sunDataLine.length;
    const minSun = Math.min(...sunDataLine.map(item => item.value));
    const maxSun = Math.max(...sunDataLine.map(item => item.value));

    const diseasesDataLine = [
        { value: 0, label: '1 Jan' },
        { value: 0, label: '2 Jan' },
        { value: 0, label: '3 Jan' },
        { value: 0, label: '4 Jan' },
        { value: 0, label: '5 Jan' },
        { value: 0, label: '6 Jan' },
        { value: 0, label: '7 Jan' },
        { value: 0, label: '8 Jan' },
        { value: 0, label: '9 Jan' },
        { value: 0, label: '10 Jan' },
        { value: 0, label: '11 Jan' },
        { value: 0, label: '12 Jan' },
        { value: 0, label: '13 Jan' },
        { value: 0, label: '14 Jan' },
        { value: 0, label: '15 Jan' },
        { value: 0, label: '16 Jan' },
        { value: 0, label: '17 Jan' },
        { value: 0, label: '18 Jan' },
        { value: 0, label: '19 Jan' },
        { value: 0, label: '20 Jan' },
        { value: 0, label: '21 Jan' },
        { value: 0, label: '22 Jan' },
        { value: 0, label: '23 Jan' },
        { value: 0, label: '24 Jan' },
        { value: 0, label: '25 Jan' },
        { value: 0, label: '26 Jan' },
        { value: 0, label: '27 Jan' },
        { value: 0, label: '28 Jan' },
        { value: 0, label: '29 Jan' },
        { value: 0, label: '30 Jan' },
        { value: 5, label: '31 Jan' },
        // February
        { value: 5, label: '1 Feb' },
        { value: 5, label: '2 Feb' },
        { value: 5, label: '3 Feb' },
        { value: 5, label: '4 Feb' },
        { value: 5, label: '5 Feb' },
        { value: 5, label: '6 Feb' },
        { value: 5, label: '7 Feb' },
        { value: 5, label: '8 Feb' },
        { value: 5, label: '9 Feb' },
        { value: 5, label: '10 Feb' },
        { value: 0, label: '11 Feb' },
        { value: 0, label: '12 Feb' },
        { value: 0, label: '13 Feb' },
        { value: 0, label: '14 Feb' },
        { value: 0, label: '15 Feb' },
        { value: 0, label: '16 Feb' },
        { value: 0, label: '17 Feb' },
        { value: 0, label: '18 Feb' },
        { value: 0, label: '19 Feb' },
        { value: 0, label: '20 Feb' },
        { value: 0, label: '21 Feb' },
        { value: 0, label: '22 Feb' },
        { value: 0, label: '23 Feb' },
        { value: 0, label: '24 Feb' },
        { value: 0, label: '25 Feb' },
        { value: 0, label: '26 Feb' },
        { value: 0, label: '27 Feb' },
        { value: 0, label: '28 Feb' },
        // March
        { value: 0, label: '1 Mar' },
        { value: 0, label: '2 Mar' },
        { value: 0, label: '3 Mar' },
        { value: 0, label: '4 Mar' },
        { value: 0, label: '5 Mar' },
        { value: 0, label: '6 Mar' },
        { value: 0, label: '7 Mar' },
        { value: 0, label: '8 Mar' },
        { value: 0, label: '9 Mar' },
        { value: 0, label: '10 Mar' },
        { value: 0, label: '11 Mar' },
        { value: 0, label: '12 Mar' },
        { value: 0, label: '13 Mar' },
        { value: 0, label: '14 Mar' },
        { value: 0, label: '15 Mar' },
        { value: 0, label: '16 Mar' },
        { value: 0, label: '17 Mar' },
        { value: 0, label: '18 Mar' },
        { value: 0, label: '19 Mar' },
        { value: 0, label: '20 Mar' },
        { value: 0, label: '21 Mar' },
        { value: 0, label: '22 Mar' },
        { value: 0, label: '23 Mar' },
        { value: 0, label: '24 Mar' },
        { value: 0, label: '25 Mar' },
        { value: 0, label: '26 Mar' },
        { value: 0, label: '27 Mar' },
        { value: 0, label: '28 Mar' },
        { value: 0, label: '29 Mar' },
        { value: 0, label: '30 Mar' },
        { value: 0, label: '31 Mar' },
        // April
        { value: 0, label: '1 Apr' },
        { value: 0, label: '2 Apr' },
        { value: 0, label: '3 Apr' },
        { value: 0, label: '4 Apr' },
        { value: 0, label: '5 Apr' },
        { value: 0, label: '6 Apr' },
        { value: 0, label: '7 Apr' },
        { value: 0, label: '8 Apr' },
        { value: 0, label: '9 Apr' },
        { value: 0, label: '10 Apr' },
        { value: 0, label: '11 Apr' },
        { value: 0, label: '12 Apr' },
        { value: 0, label: '13 Apr' },
        { value: 0, label: '14 Apr' },
        { value: 0, label: '15 Apr' },
        { value: 0, label: '16 Apr' },
        { value: 0, label: '17 Apr' },
        { value: 0, label: '18 Apr' },
        { value: 0, label: '19 Apr' },
        { value: 0, label: '20 Apr' },
        { value: 0, label: '21 Apr' },
        { value: 0, label: '22 Apr' },
        { value: 0, label: '23 Apr' },
        { value: 0, label: '24 Apr' },
        { value: 0, label: '25 Apr' },
        { value: 0, label: '26 Apr' },
        { value: 0, label: '27 Apr' },
        { value: 2, label: '28 Apr' },
        { value: 2, label: '29 Apr' },
        { value: 2, label: '30 Apr' },
        // May
        { value: 2, label: '1 May' },
        { value: 2, label: '2 May' },
        { value: 2, label: '3 May' },
        { value: 2, label: '4 May' },
        { value: 2, label: '5 May' },
        { value: 2, label: '6 May' },
        { value: 2, label: '7 May' },
        { value: 0, label: '8 May' },
        { value: 0, label: '9 May' },
    ];
    const dummyData = [
        { value: 0, label: '1 Jan' },
        { value: 0, label: '2 Jan' },
        { value: 0, label: '3 Jan' },
        { value: 0, label: '4 Jan' },
        { value: 0, label: '5 Jan' },
        { value: 0, label: '6 Jan' },
        { value: 0, label: '7 Jan' },
        { value: 0, label: '8 Jan' },
        { value: 0, label: '9 Jan' },
        { value: 0, label: '10 Jan' },
        { value: 0, label: '11 Jan' },
        { value: 0, label: '12 Jan' },
        { value: 0, label: '13 Jan' },
        { value: 0, label: '14 Jan' },
        { value: 0, label: '15 Jan' },
        { value: 0, label: '16 Jan' },
        { value: 0, label: '17 Jan' },
        { value: 0, label: '18 Jan' },
        { value: 0, label: '19 Jan' },
        { value: 0, label: '20 Jan' },
        { value: 0, label: '21 Jan' },
        { value: 0, label: '22 Jan' },
        { value: 0, label: '23 Jan' },
        { value: 0, label: '24 Jan' },
        { value: 0, label: '25 Jan' },
        { value: 0, label: '26 Jan' },
        { value: 0, label: '27 Jan' },
        { value: 0, label: '28 Jan' },
        { value: 0, label: '29 Jan' },
        { value: 0, label: '30 Jan' },
        { value: 5, label: '31 Jan' },
        // February
        { value: 0, label: '1 Feb' },
        { value: 0, label: '2 Feb' },
        { value: 0, label: '3 Feb' },
        { value: 0, label: '4 Feb' },
        { value: 0, label: '5 Feb' },
        { value: 0, label: '6 Feb' },
        { value: 0, label: '7 Feb' },
        { value: 0, label: '8 Feb' },
        { value: 0, label: '9 Feb' },
        { value: 0, label: '10 Feb' },
        { value: 0, label: '11 Feb' },
        { value: 0, label: '12 Feb' },
        { value: 0, label: '13 Feb' },
        { value: 0, label: '14 Feb' },
        { value: 0, label: '15 Feb' },
        { value: 0, label: '16 Feb' },
        { value: 0, label: '17 Feb' },
        { value: 0, label: '18 Feb' },
        { value: 0, label: '19 Feb' },
        { value: 0, label: '20 Feb' },
        { value: 0, label: '21 Feb' },
        { value: 0, label: '22 Feb' },
        { value: 0, label: '23 Feb' },
        { value: 0, label: '24 Feb' },
        { value: 0, label: '25 Feb' },
        { value: 0, label: '26 Feb' },
        { value: 0, label: '27 Feb' },
        { value: 0, label: '28 Feb' },
        // Marc0
        { value: 0, label: '1 Mar' },
        { value: 0, label: '2 Mar' },
        { value: 0, label: '3 Mar' },
        { value: 0, label: '4 Mar' },
        { value: 0, label: '5 Mar' },
        { value: 0, label: '6 Mar' },
        { value: 0, label: '7 Mar' },
        { value: 0, label: '8 Mar' },
        { value: 0, label: '9 Mar' },
        { value: 0, label: '10 Mar' },
        { value: 0, label: '11 Mar' },
        { value: 0, label: '12 Mar' },
        { value: 0, label: '13 Mar' },
        { value: 0, label: '14 Mar' },
        { value: 0, label: '15 Mar' },
        { value: 0, label: '16 Mar' },
        { value: 0, label: '17 Mar' },
        { value: 0, label: '18 Mar' },
        { value: 0, label: '19 Mar' },
        { value: 0, label: '20 Mar' },
        { value: 0, label: '21 Mar' },
        { value: 0, label: '22 Mar' },
        { value: 0, label: '23 Mar' },
        { value: 0, label: '24 Mar' },
        { value: 0, label: '25 Mar' },
        { value: 0, label: '26 Mar' },
        { value: 0, label: '27 Mar' },
        { value: 0, label: '28 Mar' },
        { value: 0, label: '29 Mar' },
        { value: 0, label: '30 Mar' },
        { value: 0, label: '31 Mar' },
        // April
        { value: 0, label: '1 Apr' },
        { value: 0, label: '2 Apr' },
        { value: 0, label: '3 Apr' },
        { value: 0, label: '4 Apr' },
        { value: 0, label: '5 Apr' },
        { value: 0, label: '6 Apr' },
        { value: 0, label: '7 Apr' },
        { value: 0, label: '8 Apr' },
        { value: 0, label: '9 Apr' },
        { value: 0, label: '10 Apr' },
        { value: 0, label: '11 Apr' },
        { value: 0, label: '12 Apr' },
        { value: 0, label: '13 Apr' },
        { value: 0, label: '14 Apr' },
        { value: 0, label: '15 Apr' },
        { value: 0, label: '16 Apr' },
        { value: 0, label: '17 Apr' },
        { value: 0, label: '18 Apr' },
        { value: 0, label: '19 Apr' },
        { value: 0, label: '20 Apr' },
        { value: 0, label: '21 Apr' },
        { value: 0, label: '22 Apr' },
        { value: 0, label: '23 Apr' },
        { value: 0, label: '24 Apr' },
        { value: 0, label: '25 Apr' },
        { value: 0, label: '26 Apr' },
        { value: 0, label: '27 Apr' },
        { value: 0, label: '28 Apr' },
        { value: 0, label: '29 Apr' },
        { value: 0, label: '30 Apr' },
        // May
        { value: 0, label: '1 May' },
        { value: 0, label: '2 May' },
        { value: 0, label: '3 May' },
        { value: 0, label: '4 May' },
        { value: 0, label: '5 May' },
        { value: 0, label: '6 May' },
        { value: 0, label: '7 May' },
        { value: 0, label: '8 May' },
        { value: 0, label: '9 May' },
    ];
    // Funzione per calcolare la media di un array di valori
    const calculateAverage = (values) => {
        if (values.length === 0) return 0;
        const sum = values.reduce((acc, value) => acc + value, 0);
        return sum / values.length;
    }

    // Funzione per calcolare la media per ogni mese
    const calculateMonthlyAverages = (data) => {
        const monthlyAverages = {};
        data.forEach((item) => {
            const month = item.label.split(' ')[1]; // Estrarre il mese dalla label
            if (!monthlyAverages[month]) {
                monthlyAverages[month] = {
                    sum: item.value,
                    count: 1
                };
            } else {
                monthlyAverages[month].sum += item.value;
                monthlyAverages[month].count += 1;
            }
        });

        // Calcolare la media per ogni mese
        const result = [];
        for (const month in monthlyAverages) {
            const average = monthlyAverages[month].sum / monthlyAverages[month].count;
            result.push({ value: average, label: month, dataPointText: average.toFixed(1) });
        }
        return result;
    }

    const monthlyAverages = calculateMonthlyAverages(waterDataLine);

    const { nickname } = route.params || { nickname: "" };

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    const showOrHidePointer = (ind) => {
        ref.current?.scrollTo({
            x: ind * 2000 - 500
        });
    };

    const handlePress = (buttonName) => {
        setCurrentButton(buttonName);
        setIsPressed(true);
        switch (buttonName) {
            case 'button1':
                setShowGeneral(true);
                setShowStats(false);

                break;
            case 'button2':
                setShowGeneral(false);
                setShowStats(true);

                break;
            default:
                setShowGeneral(true);
                setShowStats(false);

        }
    };
    //------------END button selected (general state, water ecc)----------------

    //------------manage views----------------------------
    const [showGeneral, setShowGeneral] = useState(true);
    const [showStats, setShowStats] = useState(false);
    //------------------------------------------------------
    //------------manage inputs----------------------------
    const [showInput, setShowInput] = useState(true);
    const [showInputWater, setShowInputWater] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    //------------------------------------------------------

    {/** SCROLLING OF 2 GRAPHS AT THE SAME TIME */ }
    const scrollRef1 = useRef();
    const scrollRef2 = useRef();
    const handleScroll1 = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        scrollRef2.current.scrollTo({ x: scrollPosition });
    };

    const handleScroll2 = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        scrollRef1.current.scrollTo({ x: scrollPosition });
    };
    const openAIModal = () => {
        setShowInfo(true);
    };

    {/** MOOD Pie Chart */ }
    const pieData = [
        {
            value: 58,
            color: '#27ae60',
            gradientCenterColor: '#2ecc71',
            focused: true,
        },
        { value: 40, color: '#f39c12', gradientCenterColor: '#f1c40f' },
        { value: 12, color: '#c0392b', gradientCenterColor: '#e74c3c' },
    ];
    const renderDot = color => {
        return (
            <View
                style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: color,
                    marginRight: 5,
                }}
            />
        );
    };

    const renderLegendComponent = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 110,
                            marginLeft: 35,
                        }}>
                        {renderDot('#27ae60')}
                        <Text style={{ color: Colors.DARKGREEN }}>Great:
                            <Text style={{ fontWeight: 'bold' }}> {pieData[0]['value']}%</Text></Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 110 }}>
                        {renderDot('#f39c12')}
                        <Text style={{ color: Colors.DARKGREEN }}>Okay:
                            <Text style={{ fontWeight: 'bold' }}> {pieData[1]['value']}%</Text></Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 110 }}>
                        {renderDot('#c0392b')}
                        <Text style={{ color: Colors.DARKGREEN }}>Bad:
                            <Text style={{ fontWeight: 'bold' }}> {pieData[2]['value']}%</Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                </View>
            </>
        );
    };

    useEffect(() => {
        handlePress('button1')
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                {/* ---------------------------HEADER------------------------------ */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* button to go back to home screen */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.buttonBack}>
                            <Feather name="arrow-left" size={24} color={Colors.WHITE} />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.title}>{nickname}</Text>
                    </View>


                    {/* Button fo AI Pop-up*/}
                    <TouchableOpacity onPress={openAIModal}>
                        <View style={styles.buttonBack}>
                            <FontAwesome name="magic" size={24} color={Colors.WHITE} />
                        </View>
                    </TouchableOpacity>

                </View>
                {/* ---------------------------END HEADER------------------------------ */}

                {/* ------------------------BUTTONS GENERAL, WATER, SUN, DISEASES--------------------------- */}
                {/* title on top */}
                <View style={{ marginBottom: 10, marginTop: 20 }}>
                    <Text style={styles.title}>Stats</Text>
                </View>

                {/* buttons to navigate between general, water, sun, diseases */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                    <Pressable onPress={() => handlePress('button1')}>
                        <View style={[styles.buttonStats, isPressed && currentButton == 'button1' ? { elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2 } : {}]}>
                            <FontAwesome5 name="smile" size={30} color={Colors.DARKGREEN} />

                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('button2')}>
                        <View style={[styles.buttonStats, isPressed && currentButton == 'button2' ? { elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2 } : {}]}>
                            {/* <Ionicons name="water-outline" size={34} color={Colors.DARKGREEN} /> */}
                            <Ionicons name="stats-chart-outline" size={30} color={Colors.DARKGREEN} />
                        </View>
                    </Pressable>
                </View>
                {/* ------------------------END BUTTONS GENERAL, WATER, SUN, DISEASES--------------------------- */}

                {/* -----------------------GENERAL STATE OF THE PLANT VIEW------------------------------------- */}
                {showGeneral && (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            {/* Pop-up AI section */}
                            {showInfo && (
                                <View style={styles.centeredView}>
                                    <Modal
                                        animationType="fade"
                                        transparent={false}
                                        visible={showInfo}
                                        onRequestClose={() => {
                                            Alert.alert('Modal has been closed.');
                                            setShowInfo(!showInfo);
                                        }}>
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
                                                <Text style={styles.text}>THIS FUNCTION WILL BE IMPLEMENTED SOON!</Text>
                                                <Pressable
                                                    style={[styles.button, styles.buttonOpen, { marginTop: 10 }]}
                                                    onPress={() => setShowInfo(false)}>
                                                    <Text style={[styles.textStyle, { color: 'white' }]}>CLOSE</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                            )}
                            <Text style={[styles.title, { alignSelf: 'center' }]}>Overview of {nickname}!</Text>

                            {/* Pop-up INPUT Water Mood*/}
                            <View style={styles.centeredView}>
                                <Modal
                                    animationType="fade"
                                    transparent={false}
                                    visible={showInput}
                                    onRequestClose={() => {
                                        Alert.alert('Modal has been closed.');
                                        setShowInput(!showInput);
                                    }}>
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.text}>The optimal amount of water
                                                <Text style={{ fontWeight: 'bold' }}> {nickname}</Text> needs today is
                                                <Text style={{ fontWeight: 'bold' }}> 2 glasses </Text> of water. Did you put this amount?</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => handleAddData('2')}>
                                                    <Text style={[styles.text, { color: 'white' }]}>YES</Text>
                                                </Pressable>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    // onPress={openInputWaterModal}>
                                                    onPress={() => setShowInputWater(!showInputWater)}>
                                                    <Text style={[styles.text, { color: 'white' }]}>NO</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={styles.text}>How is <Text style={{ fontWeight: 'bold' }}>{nickname}</Text> looking today?</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => setShowInput(!showInput)}>
                                                    <Entypo name="emoji-sad" size={24} color='white' />
                                                </Pressable>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => setShowInput(!showInput)}>
                                                    <Entypo name="emoji-neutral" size={24} color='white' />
                                                </Pressable>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => setShowInput(!showInput)}>
                                                    <Entypo name="emoji-happy" size={24} color='white' />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>

                            {/* Pop-up INPUT WATER Glasses*/}
                            {showInputWater && (
                                <View style={styles.centeredView}>
                                    <Modal
                                        animationType="fade"
                                        transparent={false}
                                        visible={showInputWater}
                                        onRequestClose={() => {
                                            Alert.alert('Modal has been closed.');
                                            setShowInput(showInputWater);
                                        }}>
                                        <View style={styles.centeredView}>
                                            <TextInput
                                                placeholder="How many glasses of water did you put today?"
                                                onChangeText={setInputValue}
                                                value={inputValue}
                                                keyboardType="numeric" // Only numeric inputs
                                            />
                                            <Button title="ADD" onPress={handleAddDataWater(inputValue)} />
                                        </View>
                                    </Modal>
                                </View>
                            )}

                            <View
                                style={{
                                    paddingVertical: 10,
                                    backgroundColor: Colors.WHITE,
                                    flex: 1,
                                }}>
                                <View
                                    style={{
                                        margin: 5,
                                        padding: 5,
                                        borderRadius: 20,
                                        backgroundColor: Colors.WHITE,
                                    }}>
                                    <Text style={{ color: Colors.DARKGREEN, fontSize: 18, fontWeight: 'bold', alignItems: 'center' }}>
                                        Mood of {nickname} in the last month
                                    </Text>
                                    <View style={{ position: 'relative', padding: 20, alignItems: 'center' }}>
                                        <PieChart
                                            data={pieData}
                                            donut
                                            showGradient
                                            sectionAutoFocus
                                            radius={90}
                                            innerRadius={55}
                                            innerCircleColor={Colors.WHITE}
                                        />
                                        <View style={{ position: 'absolute', top: 65, allignLeft: 'center' }}>
                                            <Image
                                                source={require('./../../../assets/images/Plant_1.png')}
                                                style={{ width: 90, height: 90 }}
                                                resizeMode="contain"
                                            />
                                        </View>
                                    </View>
                                    {renderLegendComponent()}
                                </View>
                            </View>

                            <Text style={[styles.title, { alignSelf: 'center', marginTop: 10, fontSize: 20 }]}>
                                <Text style={{ fontWeight: 'bold' }}>Take Action  </Text>
                                <FontAwesome name="magic" size={18} color={Colors.DARKGREEN} />
                            </Text>
                            <View style={{ borderWidth: 1, borderColor: Colors.DARKGREEN, borderRadius: 10, marginTop: 7 }}>
                                <Text style={[styles.text, { alignSelf: 'center', marginTop: 10, padding: 7, paddingTop: 2 }]}>
                                    <Text style={{ fontWeight: 'bold' }}>Quick care for {nickname}:{'\n'}{'\n'}</Text>
                                    <Text style={{ fontWeight: 'bold' }}>Light:</Text> 5-6 hours bright, indirect sunlight daily.{'\n'}
                                    <Text style={{ fontWeight: 'bold' }}>Water:</Text> Top inch of soil dry? Water deeply, avoid overwatering.{'\n'}
                                    <Text style={{ fontWeight: 'bold' }}>Temperature:</Text> (18-27°C), avoid drafts.{'\n'}
                                    <Text style={{ fontWeight: 'bold' }}>Humidity:</Text> Medium to high, group plants, use a pebble tray, or humidifier.{'\n'}
                                    <Text style={{ fontWeight: 'bold' }}>Soil:</Text> Well-draining potting mix.{'\n'}
                                    <Text style={{ fontWeight: 'bold' }}>Bonus:</Text> Fertilize monthly (spring/summer), rotate plant, wipe leaves.{'\n'}
                                </Text>

                            </View>
                        </View>
                    </ScrollView>
                )}


                {/* -----------------------END GENERAL STATE OF THE PLANT VIEW------------------------------------- */}

                {/* -----------------------STATS VIEW------------------------------------- */}
                {showStats && (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={[styles.title, { alignSelf: 'center' }]}>{nickname}'s stats</Text>

                            {/** MAIN GRAPH WITH WATER AND SUN */}
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={[styles.title, { fontSize: 18 }]}>Sunligth, water and Diseases plot</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 8, paddingTop: 8 }}>
                                    {months.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                style={{
                                                    padding: 8,
                                                    margin: 6,
                                                    backgroundColor: Colors.WHITE,
                                                    borderRadius: 8,
                                                    borderColor: Colors.DARKGREEN,
                                                    borderWidth: 1.5,
                                                    elevation: 2
                                                }}
                                                onPress={() => showOrHidePointer(index)}>
                                                <Text style={styles.buttonText}>{months[index]}</Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                                <View style={{ position: 'relative' }}>
                                    {/* Switch */}
                                    <View style={{ position: 'absolute', top: -10, right: 0 }}>
                                        <Text style={{ fontSize: 16, color: Colors.PURPLE, marginTop: 10, marginLeft: 10 }}>Month Avg</Text>
                                        <Switch
                                            trackColor={{ false: Colors.GREY, true: Colors.PURPLE }}
                                            thumbColor={showMonthAverageLine ? Colors.WHITE : Colors.WHITE}
                                            ios_backgroundColor={Colors.GREY}
                                            onValueChange={(newValue) => {
                                                setShowMonthAverageLine(newValue);
                                                setShowWaterLine(!newValue);
                                                setShowSunLine(!newValue);
                                                setShowChartWater(!newValue);
                                            }}
                                            value={showMonthAverageLine}
                                            elevation={2}
                                        />
                                    </View>

                                    {/* Line Chart */}
                                    <View>
                                        {showMonthAverageLine && (
                                            <LineChart
                                                scrollRef={ref}
                                                data={monthlyAverages}
                                                textColor="black"
                                                textShiftY={-2}
                                                textShiftX={-6}
                                                textFontSize={15}
                                                // thickness1={5}
                                                dataPointsColor={Colors.PURPLE}
                                                curved
                                                label
                                                maxValue2={10}
                                                maxValue={10}
                                                showScrollIndicator={true}
                                                scrollToEnd={true}
                                                scrollAnimation={true}
                                                color1={Colors.PURPLE}
                                                height={200}
                                                initialSpacing={20}
                                                rotateLabel
                                                spacing={50}
                                                line
                                                xAxisLabelsVerticalShift={10}
                                            />
                                        )}
                                        {showChartWater && (
                                            <LineChart
                                                scrollRef={ref}
                                                data={dummyData}
                                                data2={showWaterLine ? waterDataLine : []}
                                                data3={showSunLine ? sunDataLine : []}
                                                data4={showMonthAverageLine ? monthlyAverages : []}
                                                thickness1={0.0001}
                                                textColor="black"
                                                textShiftY={-2}
                                                textShiftX={-6}
                                                textFontSize={15}
                                                curved
                                                label
                                                secondaryYAxis={true}
                                                maxValue2={10}
                                                maxValue={10}
                                                showScrollIndicator={true}
                                                scrollToEnd={true}
                                                scrollAnimation={false}
                                                color1="black"
                                                color2={Colors.LIGHTBLUE}
                                                color3='orange'
                                                color4={Colors.PURPLE}
                                                color5={Colors.PURPLE}
                                                dataPointsColor1="transparent"
                                                dataPointsColor2={Colors.LIGHTBLUE}
                                                dataPointsColor3='orange'
                                                dataPointsColor4={Colors.PURPLE}
                                                dataPointsColor5={Colors.PURPLE}
                                                height={200}
                                                initialSpacing={0}
                                                rotateLabel
                                                spacing={50}
                                                line
                                                xAxisLabelsVerticalShift={10}
                                            />
                                        )}
                                    </View>
                                </View>


                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                                    <Text style={{ fontSize: 16, color: Colors.LIGHTBLUE, marginTop: 9 }}>Water</Text>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Switch
                                            trackColor={{ false: Colors.GREY, true: Colors.LIGHTBLUE }}
                                            thumbColor={showWaterLine ? Colors.WHITE : Colors.WHITE}
                                            ios_backgroundColor={Colors.GREY}
                                            onValueChange={() => setShowWaterLine((previousState) => !previousState)}
                                            value={showWaterLine}
                                            elevation={2}
                                        />
                                    </View>
                                    <Text style={{ fontSize: 16, color: 'orange', marginTop: 9, marginLeft: 10 }}>Sun</Text>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Switch
                                            trackColor={{ false: Colors.GREY, true: 'orange' }}
                                            thumbColor={showSunLine ? Colors.WHITE : Colors.WHITE}
                                            ios_backgroundColor={Colors.GREY}
                                            onValueChange={() => setShowSunLine((previousState) => !previousState)}
                                            value={showSunLine}
                                            elevation={2}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={[styles.text, { alignSelf: 'center', fontSize: 8 }]}> The water is mesured in glasses, while the sunligth in hours of exposition</Text>
                                </View>
                            </View>

                            <View>
                                {/* Intestazione delle colonne */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginTop: 20 }}>
                                    {/* Intestazioni delle colonne Avg, Min e Max */}
                                    <View style={{ alignItems: 'center', paddingLeft: 80 }}>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 20, color: Colors.DARKGREEN, fontWeight: 'bold' }]}>Avg</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 20, color: Colors.DARKGREEN, fontWeight: 'bold' }]}>Min</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 20, color: Colors.DARKGREEN, fontWeight: 'bold' }]}>Max</Text>
                                    </View>
                                </View>
                                {/**First row for Water */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginTop: 5 }}>
                                    {/* Intestazione Water */}
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 20, color: Colors.LIGHTBLUE, fontWeight: 'bold' }]}>Water</Text>
                                    </View>
                                    {/* Dati per Water */}
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.text}>{parseFloat(avgWater.toFixed(1))}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.text}>{minWater}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.text}>{maxWater}</Text>
                                    </View>
                                </View>
                                {/**Second row for Sun */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginTop: 5 }}>
                                    {/* Intestazione Sun */}
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 20, color: 'orange', fontWeight: 'bold' }]}>Sun</Text>
                                    </View>
                                    {/* Dati per Sun */}
                                    <View style={{ alignItems: 'center', paddingLeft: 12 }}>
                                        <Text style={styles.text}>{parseFloat(avgSun.toFixed(1))}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.text}>{minSun}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.text}>{maxSun}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )}
                {/* -----------------------END STATS VIEW------------------------------------- */}

            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 20,
        // borderColor: 'green',
        // borderWidth: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonBack: {
        backgroundColor: Colors.ORANGE,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        width: 50,
        justifyContent: 'center', // Aggiungi questa linea
        alignItems: 'center',
        elevation: 5
    },
    //title text like hello Rose
    title: {
        fontSize: 24,
        color: Colors.DARKGREEN,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    text: {
        fontSize: 15,
        color: 'black',
        fontFamily: "Raleway_400Regular",
    },
    buttonStats: {
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.DARKGREEN,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    buttonMood: {
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.DARKGREEN,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    button: {
        padding: 8,
        margin: 6,
        borderRadius: 8,
    },
    buttonInput: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: Colors.DARKGREEN,
    },
    buttonClose: {
        backgroundColor: Colors.DARKGREEN,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: "Raleway_400Regular",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim the background
        transform: [{ translateX: -50 }, { translateY: -50 }],
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 16,
        height: 230,
        width: 250
    },
})