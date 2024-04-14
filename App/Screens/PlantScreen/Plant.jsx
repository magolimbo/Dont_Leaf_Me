import { Button, Pressable, StyleSheet, Text, View, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useRef } from 'react'
import Colors from '../../Utils/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
// import { LineChart, ContributionGraph } from "react-native-chart-kit"
import { SimpleLineIcons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LineChart, ruleTypes } from 'react-native-gifted-charts';
// import { ScrollView } from 'react-native-gesture-handler';
// import { LinearGradient, Stop } from 'react-native-svg';


export default function Plant({ navigation, route }) {

    //------------button selected (general state, water ecc)----------------
    const [isPressed, setIsPressed] = useState(false);
    const [currentButton, setCurrentButton] = useState(null);
    const [showWaterLine, setShowWaterLine] = useState(true);
    const [showSunLine, setShowSunLine] = useState(true);
    const [showDiseasesLine, setShowDiseasesLine] = useState(true);

    const ref = useRef(null)
    const waterDataLine = [
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
    ];

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

    const { nickname } = route.params || { nickname: "" };

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    const showOrHidePointer = (ind) => {
        ref.current?.scrollTo({
            x: ind * 2000 - 500
        }); // adjust as per your UI
    };
    const handlePress = (buttonName) => {
        setCurrentButton(buttonName);
        setIsPressed(true);

        switch (buttonName) {
            case 'button1':
                setShowGeneral(true);
                setShowWater(false);
                setShowSun(false);
                setShowDiseases(false);
                break;
            case 'button2':
                setShowGeneral(false);
                setShowWater(true);
                setShowSun(false);
                setShowDiseases(false);
                break;
            case 'button3':
                setShowGeneral(false);
                setShowWater(false);
                setShowSun(true);
                setShowDiseases(false);
                break;
            case 'button4':
                setShowGeneral(false);
                setShowWater(false);
                setShowSun(false);
                setShowDiseases(true);
                break;
            default:
                setShowGeneral(true);
                setShowWater(false);
                setShowSun(false);
                setShowDiseases(false);
        }
    };
    //------------END button selected (general state, water ecc)----------------

    //------------manage views----------------------------
    const [showGeneral, setShowGeneral] = useState(true);
    const [showWater, setShowWater] = useState(false);
    const [showSun, setShowSun] = useState(false);
    const [showDiseases, setShowDiseases] = useState(false);
    //------------------------------------------------------

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

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.buttonBack}>
                            <SimpleLineIcons name="magic-wand" size={24} color={Colors.WHITE} />
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
                            <Ionicons name="water-outline" size={34} color={Colors.DARKGREEN} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('button3')}>
                        <View style={[styles.buttonStats, isPressed && currentButton == 'button3' ? { elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2 } : {}]}>
                            <Feather name="sun" size={30} color={Colors.DARKGREEN} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('button4')}>
                        <View style={[styles.buttonStats, isPressed && currentButton == 'button4' ? { elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2 } : {}]}>
                            <Ionicons name="skull-outline" size={30} color={Colors.DARKGREEN} />
                        </View>
                    </Pressable>

                </View>
                {/* ------------------------END BUTTONS GENERAL, WATER, SUN, DISEASES--------------------------- */}

                {/* -----------------------GENERAL STATE OF THE PLANT VIEW------------------------------------- */}
                {showGeneral && (
                    <View>
                        <Text style={[styles.title, { alignSelf: 'center' }]}>Overview of {nickname}'s health</Text>
                        <View>
                            {/* <Text>Water</Text> */}
                            <View style={{ flexDirection: 'row', marginLeft: 8, paddingTop: 10 }}>
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
                                            <Text style={{ color: Colors.BLACK, textAlign: 'center' }}>{months[index]}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                            <LineChart
                                scrollRef={ref}
                                data={showWaterLine || showSunLine || showDiseasesLine ? dummyData : []}
                                data2={showWaterLine ? waterDataLine : []}
                                data3={showSunLine ? sunDataLine : []}
                                data4={showDiseasesLine ? diseasesDataLine : []}
                                startIndex4={30}
                                endIndex4={40}
                                thickness4={8}
                                thickness1={0.0001}
                                // isAnimated
                                textColor="black"
                                textShiftY={-2}
                                textShiftX={-6}
                                textFontSize={15}
                                curved
                                label
                                maxValue={10}
                                showScrollIndicator={true}
                                scrollToEnd={true}
                                scrollAnimation={false}
                                color1="black"
                                color2={Colors.LIGHTBLUE}
                                color3='orange'
                                color4={Colors.PURPLE}
                                dataPointsColor1="transparent"
                                dataPointsColor2={Colors.LIGHTBLUE}
                                dataPointsColor3='orange'
                                dataPointsColor4={Colors.PURPLE}
                                height={200}
                                initialSpacing={0}
                                rotateLabel
                                spacing={50}
                                line
                                xAxisLabelsVerticalShift={10}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
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
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Switch
                                        trackColor={{ false: Colors.GREY, true: Colors.PURPLE }}
                                        thumbColor={showDiseasesLine ? Colors.WHITE : Colors.WHITE}
                                        ios_backgroundColor={Colors.GREY}
                                        onValueChange={() => setShowDiseasesLine((previousState) => !previousState)}
                                        value={showDiseasesLine}
                                        elevation={2}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                )}


                {/* -----------------------END GENERAL STATE OF THE PLANT VIEW------------------------------------- */}

                {/* -----------------------WATER VIEW------------------------------------- */}
                {showWater && (
                    <View>
                        <Text style={[styles.title, { alignSelf: 'center' }]}>Water stats</Text>
                    </View>
                )}
                {/* -----------------------END WATER VIEW------------------------------------- */}

                {/* -----------------------SUN VIEW------------------------------------- */}
                {showSun && (
                    <View>
                        <Text style={[styles.title, { alignSelf: 'center' }]}>Sun and Temperature stats</Text>
                    </View>
                )}
                {/* -----------------------END SUN VIEW------------------------------------- */}

                {/* -----------------------DISEASES VIEW------------------------------------- */}
                {showDiseases && (
                    <View>
                        <Text style={[styles.title, { alignSelf: 'center' }]}>Diseases stats</Text>
                    </View>
                )}
                {/* -----------------------END DISEASES VIEW------------------------------------- */}
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
    buttonText: {
        color: Colors.WHITE,
        textAlign: 'center',
    },
})