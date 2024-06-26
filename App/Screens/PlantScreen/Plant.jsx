import { Button, Pressable, StyleSheet, Text, View, Switch, Alert, Modal, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useRef, useEffect, Component } from 'react'
import Colors from '../../Utils/Colors'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5, Ionicons, Fontisto } from '@expo/vector-icons';
import { LineChart, ruleTypes, BarChart, PieChart } from 'react-native-gifted-charts';
import { Fragment, useCallback } from 'react';
import { Calendar, CalendarUtils } from 'react-native-calendars';

export default function Plant({ navigation, route }) {

    //------------button selected (general state, water ecc)----------------
    const [isPressed, setIsPressed] = useState(false);
    const [currentButton, setCurrentButton] = useState(null);
    const [showWaterLine, setShowWaterLine] = useState(true);
    const [showSunLine, setShowSunLine] = useState(true);
    const [showChartWater, setShowChartWater] = useState(true);
    const [showMonthAverageLine, setShowMonthAverageLine] = useState(false);
    const [isPressedYes, setIsPressedYes] = useState(false);
    const [isPressedNo, setIsPressedNo] = useState(false);
    const [isPressedMoodSad, setIsPressedMoodSad] = useState(false);
    const [isPressedMoodNeutral, setIsPressedMoodNeutral] = useState(false);
    const [isPressedMoodHappy, setIsPressedMoodHappy] = useState(false);

    const ref = useRef(null)

    const handleAddData = (inputValue) => {
        if (inputValue.trim() !== '') {
            const newValue = parseFloat(inputValue);
            const newDataPoint = { value: newValue, label: '10 May', dataPointText: String(newValue) };
            setWaterData([...waterDataLine, newDataPoint]); // Add new data point to the current dataset
            setInputValue(''); // Reset the input field
            setIsPressedYes(!isPressedYes)
            // setShowInput(!showInput)
        }
        else if (inputValue.trim() === '2') {
            const newValue = parseFloat(inputValue);
            const newDataPoint = { value: newValue, label: '10 May', dataPointText: String(newValue) };
            setWaterData([...waterDataLine, newDataPoint]); // Add new data point to the current dataset
            setInputValue(''); // Reset the input field
            setIsPressedYes(!isPressedYes)
            // setShowInput(!showInput)
        }
    };


    const handleAddDataWater = (inputValue) => {
        if (inputValue.trim() !== '') {
            const newValue = parseFloat(inputValue);
            const newDataPoint = { value: newValue, label: '10 May', dataPointText: String(newValue) };
            setWaterData([...waterDataLine, newDataPoint]); // Add new data point to the current dataset
            setShowInputWater(!showInputWater)
            setIsPressedNo(!isPressedNo)
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

    const diseaseDataLine = [
        { value: 0, label: '2 Jan' },
        { value: 0, label: '3 Jan' },
        { value: 0, label: '1 Jan' },
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
        { value: 0, label: '31 Jan' },
        // February
        { value: 'Bacteria', label: '2 Feb' },
        { value: 'Bacteria', label: '1 Feb' },
        { value: 'Bacteria', label: '3 Feb' },
        { value: 'Bacteria', label: '4 Feb' },
        { value: 'Bacteria', label: '5 Feb' },
        { value: 'Bacteria', label: '6 Feb' },
        { value: 'Bacteria', label: '7 Feb' },
        { value: 'Bacteria', label: '8 Feb' },
        { value: 'Bacteria', label: '9 Feb' },
        { value: 'Bacteria', label: '10 Feb' },
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
        { value: 0, label: '11 Feb' },
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
        { value: 'Viruses', label: '1 Apr' },
        { value: 'Viruses', label: '2 Apr' },
        { value: 'Viruses', label: '3 Apr' },
        { value: 'Viruses', label: '4 Apr' },
        { value: 'Viruses', label: '5 Apr' },
        { value: 'Viruses', label: '6 Apr' },
        { value: 'Viruses', label: '7 Apr' },
        { value: 'Viruses', label: '8 Apr' },
        { value: 'Viruses', label: '9 Apr' },
        { value: 'Viruses', label: '10 Apr' },
        { value: 'Viruses', label: '11 Apr' },
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
        { value: 'Fungus', label: '29 Apr' },
        { value: 'Fungus', label: '30 Apr' },
        // May
        { value: 'Fungus', label: '1 May' },
        { value: 'Fungus', label: '2 May' },
        { value: 'Fungus', label: '3 May' },
        { value: 'Fungus', label: '4 May' },
        { value: 'Fungus', label: '5 May' },
        { value: 'Fungus', label: '6 May' },
        { value: 'Fungus', label: '7 May' },
        { value: 0, label: '8 May' },
        { value: 0, label: '9 May' },
        { value: 0, label: '10 May' },
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
        { value: 0, label: '31 Jan' },
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
        { value: 0, label: '10 May' },
    ];

    // Map disease names to numerical values
    const diseaseDataLineNumerical = diseaseDataLine.map((dataPoint) => {
        switch (dataPoint.value) {
            case 'Bacteria':
                return { ...dataPoint, value: 1 };
            case 'Fungus':
                return { ...dataPoint, value: 2 };
            case 'Viruses':
                return { ...dataPoint, value: 3 };
            default:
                return { ...dataPoint, value: 0 };
        }
    });

    // Function to calculate the monthly averages
    const calculateMonthlyAverages = (data) => {
        const monthlyAverages = {};
        data.forEach((item) => {
            const month = item.label.split(' ')[1]; // Extract the month from the label
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

        // Calculate the average for each month
        const result = [];
        for (const month in monthlyAverages) {
            const average = monthlyAverages[month].sum / monthlyAverages[month].count;
            result.push({ value: average, label: month, dataPointText: average.toFixed(1) });
        }
        return result;
    }

    const monthlyAveragesWater = calculateMonthlyAverages(waterDataLine);
    const monthlyAveragesSun = calculateMonthlyAverages(sunDataLine);

    const { nickname } = route.params || { nickname: "" };
    const { species } = route.params || { species: "" };
    const { height } = route.params || { height: "" };
    const { soil } = route.params || { soil: "" };

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

    const openAIModal = () => {
        setShowInfo(true);
    };

    {/** MOOD Pie Chart */ }
    const pieData = [
        {
            value: 58,
            color: Colors.LIGHTGREEN,
            gradientCenterColor: Colors.LIGHTGREEN,
            focused: true,
        },
        { value: 40, color: 'orange', gradientCenterColor: 'orange' },
        { value: 12, color: 'red', gradientCenterColor: 'red' },
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
                        {renderDot(Colors.LIGHTGREEN)}
                        <Text style={{ color: Colors.DARKGREEN }}>Great:
                            <Text style={{ fontWeight: 'bold' }}> {pieData[0]['value']}%</Text></Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 110 }}>
                        {renderDot('orange')}
                        <Text style={{ color: Colors.DARKGREEN }}>Okay:
                            <Text style={{ fontWeight: 'bold' }}> {pieData[1]['value']}%</Text></Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 110 }}>
                        {renderDot('red')}
                        <Text style={{ color: Colors.DARKGREEN }}>Bad:
                            <Text style={{ fontWeight: 'bold' }}> {pieData[2]['value']}%</Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                </View>
            </>
        );
    };



    const INITIAL_DATE = '2024-05-10';

    const [selected, setSelected] = useState(INITIAL_DATE);

    const getDate = (count) => {
        const date = new Date(INITIAL_DATE);
        const newDate = date.setDate(date.getDate() + count);
        return CalendarUtils.getCalendarDateString(newDate);
    };

    const renderCalendarWithCustomMarkingType = () => {
        return (
            <Fragment>
                <Text style={[styles.title, { textAlign: 'center', marginBottom: 10, color: Colors.DARKGREEN, fontSize: 18, marginTop: 10 }]}>Mood calendar</Text>
                <Calendar
                    style={{
                        borderWidth: 1,
                        borderColor: Colors.DARKGREEN,
                        borderRadius: 15,
                        fontFamily: "Raleway_400Regular",
                        height: 380,
                        arrowColor: Colors.DARKGREEN,
                    }}
                    hideExtraDays
                    current={INITIAL_DATE}
                    minDate={INITIAL_DATE}
                    markingType={'custom'}
                    hideDayNames={false}
                    theme={{
                        backgroundColor: Colors.WHITE,
                        calendarBackground: Colors.WHITE,
                    }}
                    markedDates={{
                        [INITIAL_DATE]: {
                            customStyles: {
                                container: isPressedMoodHappy
                                    ? { backgroundColor: Colors.DARKGREEN, elevation: 4, borderColor: 'yellow', borderWidth: 1 }
                                    : isPressedMoodNeutral ? { backgroundColor: 'orange', elevation: 4, borderColor: 'yellow', borderWidth: 1 }
                                        : isPressedMoodSad ? { backgroundColor: 'red', elevation: 4, borderColor: 'yellow', borderWidth: 1 } : {},
                                text: { color: 'white' }
                            }
                        },
                        [getDate(-1)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: Colors.DARKGREEN,
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }
                        },
                        [getDate(-2)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: Colors.DARKGREEN,
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }

                        },
                        [getDate(-3)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: Colors.DARKGREEN,
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }

                        },
                        [getDate(-4)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: Colors.DARKGREEN,
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }

                        },
                        [getDate(-5)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: Colors.DARKGREEN,
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }
                        },
                        [getDate(-6)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: Colors.DARKGREEN,
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }

                        },
                        [getDate(-7)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: 'orange',
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }
                        },
                        [getDate(-8)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: 'red',
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }
                        },
                        [getDate(-9)]: {
                            customStyles: {
                                container: {
                                    backgroundColor: 'red',
                                    elevation: 4
                                },
                                text: {
                                    color: 'white'
                                }
                            }
                        }
                    }}
                />
            </Fragment>
        );
    };


    const renderExamples = () => {
        return (
            <Fragment>
                {renderCalendarWithCustomMarkingType()}
                <View style={{ position: 'relative' }}>
                    <View style={{ flexDirection: 'row', position: 'relative', top: -50, left: 120, zIndex: 1 }}>
                        <Pressable
                            style={[styles.button, { backgroundColor: 'red', padding: 7, width: 70 }]}
                            flexDirection='row'>
                            <Entypo name="emoji-sad" size={16} color='white' />
                            <Text style={{ color: 'white', fontSize: 10 }}> Bad</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, { backgroundColor: 'orange', padding: 7, width: 70 }]}
                            flexDirection='row'>
                            <Entypo name="emoji-neutral" size={16} color='white' />
                            <Text style={{ color: 'white', fontSize: 10 }}> Neutral</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, { backgroundColor: Colors.DARKGREEN, padding: 7, width: 70 }]}
                            flexDirection='row'>
                            <Entypo name="emoji-happy" size={16} color='white' />
                            <Text style={{ color: 'white', fontSize: 10 }}> Happy</Text>
                        </Pressable>
                    </View>
                </View>
            </Fragment>
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

                {/* buttons to navigate between general and stats */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                    <Pressable onPress={() => handlePress('button1')}>
                        <View style={[styles.buttonStats, isPressed && currentButton == 'button1' ? { elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2 } : {}]}>
                            <FontAwesome5 name="smile" size={30} color={Colors.DARKGREEN} />

                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('button2')}>
                        <View style={[styles.buttonStats, isPressed && currentButton == 'button2' ? { elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2 } : {}]}>
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
                                                    style={[styles.button, styles.buttonClose, isPressedYes ? { backgroundColor: Colors.LIGHTGREEN, borderColor: '#aaa', elevation: 0 } : {}]}
                                                    onPress={() => handleAddData('2')}>
                                                    <Text style={[styles.text, { color: 'white' }]}>YES</Text>
                                                </Pressable>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose, , isPressedNo ? { backgroundColor: Colors.LIGHTGREEN, borderColor: '#aaa', elevation: 0 } : {}]}
                                                    onPress={() => setShowInputWater(!showInputWater)}>
                                                    <Text style={[styles.text, { color: 'white' }]}>NO</Text>
                                                </Pressable>
                                            </View>
                                            <Text style={styles.text}>How is <Text style={{ fontWeight: 'bold' }}>{nickname}</Text> looking today?</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => { setIsPressedMoodSad(!isPressedMoodSad), setShowInput(!showInput) }}>
                                                    <Entypo name="emoji-sad" size={24} color='white' />
                                                </Pressable>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => { setShowInput(!showInput), setIsPressedMoodNeutral(!isPressedMoodNeutral) }}>
                                                    <Entypo name="emoji-neutral" size={24} color='white' />
                                                </Pressable>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => { setIsPressedMoodHappy(!isPressedMoodHappy), setShowInput(!showInput) }}>
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
                                    >
                                        <View style={styles.centeredView}>
                                            <TextInput
                                                placeholder="How many glasses of water did you put today?"
                                                onChangeText={(text) => setInputValue(text)}
                                                value={inputValue}
                                                keyboardType="numeric"
                                                marginBottom={10}
                                            />
                                            <Button title="ADD" onPress={() => { handleAddDataWater(inputValue), setIsPressedNo(!isPressedNo) }} marginTop={10} />
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
                                        borderRadius: 15,
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
                            <View>
                                <View style={[styles.container, { marginTop: -10 }]}>
                                    <Text style={[styles.text, { fontSize: 16, color: Colors.DARKGREEN, fontWeight: 'bold' }]}>Nickname:
                                        <Text style={styles.text}>   {nickname}</Text></Text>
                                    <Text style={[styles.text, { fontSize: 16, color: Colors.DARKGREEN, fontWeight: 'bold' }]}>Species:
                                        <Text style={styles.text}>   {species}</Text></Text>
                                    <Text style={[styles.text, { fontSize: 16, color: Colors.DARKGREEN, fontWeight: 'bold' }]}>Height:
                                        <Text style={styles.text}>   {height} cm</Text></Text>
                                    <Text style={[styles.text, { fontSize: 16, color: Colors.DARKGREEN, fontWeight: 'bold' }]}>Soil:
                                        <Text style={styles.text}>   {soil}</Text></Text>
                                </View>
                            </View>
                            <Text style={[styles.title, { alignSelf: 'center', marginTop: 10, fontSize: 18 }]}>
                                <Text style={{ fontWeight: 'bold' }}>Take Action  </Text>
                                <FontAwesome name="magic" size={18} color={Colors.DARKGREEN} />
                            </Text>
                            <View style={{ borderWidth: 1, borderColor: Colors.DARKGREEN, borderRadius: 15, marginTop: 7 }}>
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
                        <View style={{ marginBottom: 100 }} >
                            <Text style={[styles.title, { alignSelf: 'center' }]}>{nickname}'s stats</Text>

                            {/** MAIN GRAPH WITH WATER AND SUN */}
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={[styles.title, { fontSize: 18, marginTop: 10 }]}>Sunligth and  water plot</Text>
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
                                                    borderRadius: 15,
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
                                    <View style={{ position: 'absolute', top: -10, right: 0, zIndex: 1 }}>
                                        <Text style={{ fontSize: 16, color: Colors.PURPLE, marginTop: 10, marginLeft: 10 }}>Month Avg</Text>
                                        <Switch
                                            trackColor={{ false: Colors.GREY, true: Colors.PURPLE }}
                                            thumbColor={showMonthAverageLine ? Colors.WHITE : Colors.WHITE}
                                            ios_backgroundColor={Colors.GREY}
                                            marginTop={-10}
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
                                    <View style={{ position: 'absolute', top: -35, right: 130, zIndex: 1 }}>
                                        <Text style={{ fontSize: 16, color: Colors.PURPLE, marginTop: 10, marginLeft: 10 }}></Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                width: 200,
                                                marginLeft: 35,
                                            }}>
                                            {renderDot('orange')}
                                            <Text style={{ color: Colors.DARKGREEN, fontSize: 10 }}> Hours of sunligth</Text>
                                        </View>
                                    </View>
                                    <View style={{ position: 'absolute', top: -20, right: 130, zIndex: 1 }}>
                                        <Text style={{ fontSize: 16, color: Colors.PURPLE, marginTop: 10, marginLeft: 10 }}></Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                width: 200,
                                                marginLeft: 35,
                                            }}>
                                            {renderDot(Colors.LIGHTBLUE)}
                                            <Text style={{ color: Colors.DARKGREEN, fontSize: 10 }}> Glasses of water</Text>
                                        </View>
                                    </View>

                                    {/* Line Chart */}
                                    <View>
                                        {showMonthAverageLine && (
                                            <LineChart
                                                scrollRef={ref}
                                                data={monthlyAveragesWater}
                                                data2={monthlyAveragesSun}
                                                textColor="black"
                                                textShiftY={-2}
                                                textShiftX={-6}
                                                textFontSize={15}
                                                thickness1={4}
                                                thickness2={4}
                                                dataPointsColor1={Colors.LIGHTBLUE}
                                                color1={Colors.LIGHTBLUE}
                                                dataPointsColor2='orange'
                                                color2='orange'
                                                curved
                                                label
                                                hideRules
                                                maxValue={10}
                                                showScrollIndicator={true}
                                                scrollToEnd={true}
                                                scrollAnimation={true}
                                                height={210}
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
                                                thickness1={0.0001}
                                                textColor="black"
                                                textShiftY={-2}
                                                textShiftX={-6}
                                                textFontSize={15}
                                                curved
                                                label
                                                hideRules
                                                maxValue={10}
                                                showScrollIndicator={true}
                                                scrollToEnd={true}
                                                scrollAnimation={true}
                                                color1="black"
                                                color2={Colors.LIGHTBLUE}
                                                color3='orange'
                                                dataPointsColor1="transparent"
                                                dataPointsColor2={Colors.LIGHTBLUE}
                                                dataPointsColor3='orange'
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
                                    <Text style={{ fontSize: 16, color: 'orange', marginTop: 9, marginLeft: 10 }}>Sun Exposure</Text>
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
                            </View>

                            <View>

                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {renderExamples()}
                                </ScrollView>

                            </View>

                            <View style={{ borderWidth: 1, borderColor: Colors.DARKGREEN, borderRadius: 15, paddingBottom: 15 }} >
                                <Text style={[styles.title, { alignSelf: 'center', marginTop: 10, fontSize: 18 }]}>Total averages</Text>
                                {/* Columns header*/}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginTop: 20 }}>
                                    {/* header of columns Avg, Min e Max */}
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
                                    {/* Header Water */}
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 20, color: Colors.LIGHTBLUE, fontWeight: 'bold' }]}>Water</Text>
                                    </View>
                                    {/* Data for Water */}
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
                                    {/* Header Sun */}
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 20, color: 'orange', fontWeight: 'bold' }]}>Sun</Text>
                                    </View>
                                    {/* Data for Sun */}
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
                            <Text style={[styles.title, { alignSelf: 'center', marginTop: 20, marginBottom: 10, fontSize: 18 }]}> {nickname}'s diseases</Text>
                            <View>
                                <LineChart
                                    data1={diseaseDataLineNumerical}
                                    data2={diseaseDataLineNumerical}
                                    data3={diseaseDataLineNumerical}
                                    data4={diseaseDataLineNumerical}
                                    data={dummyData}
                                    startIndex2={32}
                                    endIndex2={40}
                                    startIndex3={90}
                                    endIndex3={100}
                                    startIndex4={118}
                                    endIndex4={126}
                                    thickness2={10}
                                    thickness4={10}
                                    thickness3={10}
                                    textColor="black"
                                    dataPointsRadius={4.8}
                                    height={150}
                                    label
                                    maxValue={4}
                                    scrollToEnd={true}
                                    scrollAnimation={true}
                                    color='transparent'
                                    dataPointsColor='transparent'
                                    color1='transparent'
                                    dataPointsColor1='transparent'
                                    color3={Colors.PURPLE}
                                    dataPointsColor3={Colors.PURPLE}
                                    color2={Colors.DARKGREEN}
                                    dataPointsColor2={Colors.DARKGREEN}
                                    color4={Colors.ORANGE}
                                    dataPointsColor4={Colors.ORANGE}
                                    formatYLabel={(value) => {
                                        switch (parseInt(value)) {
                                            case 1:
                                                return 'Bacteria';
                                            case 2:
                                                return 'Fungus';
                                            case 3:
                                                return 'Viruses';
                                            default:
                                                return '';
                                        }
                                    }}
                                    noOfSections={4}
                                    initialSpacing={10}
                                    rotateLabel
                                    spacing={50}
                                    line
                                    yAxisLabelWidth={80}
                                    xAxisLabelsVerticalShift={10}
                                />
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
        borderRadius: 15,
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
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
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
        width: 120,
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
        elevation: 2,
    },
    buttonInput: {
        borderRadius: 15,
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
        borderRadius: 15,
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
    calendar: {
        marginBottom: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        borderColor: Colors.DARKGREEN,
        borderWidth: 1,
    },
})