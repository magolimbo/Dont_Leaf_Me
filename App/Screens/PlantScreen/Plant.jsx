import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react';
import Colors from '../../Utils/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { LineChart, ruleTypes } from 'react-native-gifted-charts';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';
import { LinearGradient, Stop } from 'react-native-svg';
// import { LineChart as LineChart2 } from 'react-native-charts-wrapper';

export default function Plant({ navigation }) {
    const ref = useRef(null)
    const lineData3 = [
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
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    const showOrHidePointer = (ind) => {
        ref.current?.scrollTo({
            x: ind * 2000 - 500
        }); // adjust as per your UI
    };
    const lineData = [
        { value: 2 },
        { value: 1 },
        { value: 3 },
        { value: 2 },
        { value: 2 },
        { value: 2.5 },
        { value: 3 },
        { value: 1.5 },
    ];
    const lineData2 = [
        { value: 1 },
        { value: 2 },
        { value: 5 },
        { value: 4.5 },
        { value: 3 },
        { value: 2 },
        { value: 5 },
        { value: 6 },
    ];
    const dataSet = [
        {
            data: lineData,
            color: Colors.ORANGE,
            startFillColor: Colors.ORANGE,
            lineSegments: [{ startIndex: 2, endIndex: 4, color: Colors.PURPLE }],
        },
        {
            data: lineData2,
            color: Colors.LIME,
            startFillColor: Colors.LIME,
            // lineSegments: [
            //     { startIndex: 0, endIndex: 2, color: Colors.PURPLE },
            //     // { startIndex: 4, endIndex: 6, strokeDashArray: [3, 4], color: Colors.BLACK },
            // ],
        },
    ];

    const greenGraphData = [
        { value: 160, date: '1 Apr 2022' },
        { value: 180, date: '2 Apr 2022' },
        { value: 190, date: '3 Apr 2022' },
        { value: 180, date: '4 Apr 2022' },
        { value: 140, date: '5 Apr 2022' },
        { value: 145, date: '6 Apr 2022' },
        { value: 160, date: '7 Apr 2022' },
        { value: 200, date: '8 Apr 2022' },

        { value: 220, date: '9 Apr 2022' },
        {
            value: 240,
            date: '10 Apr 2022',
            label: '10 Apr',
            labelTextStyle: { color: 'lightgray', width: 60 },
        },
        { value: 280, date: '11 Apr 2022' },
        { value: 260, date: '12 Apr 2022' },
        { value: 340, date: '13 Apr 2022' },
        { value: 385, date: '14 Apr 2022' },
        { value: 280, date: '15 Apr 2022' },
        { value: 390, date: '16 Apr 2022' },

        { value: 370, date: '17 Apr 2022' },
        { value: 285, date: '18 Apr 2022' },
        { value: 295, date: '19 Apr 2022' },
        {
            value: 300,
            date: '20 Apr 2022',
            label: '20 Apr',
            labelTextStyle: { color: 'lightgray', width: 60 },
        },
        { value: 280, date: '21 Apr 2022' },
        { value: 295, date: '22 Apr 2022' },
        { value: 260, date: '23 Apr 2022' },
        { value: 255, date: '24 Apr 2022' },

        { value: 190, date: '25 Apr 2022' },
        { value: 220, date: '26 Apr 2022' },
        { value: 205, date: '27 Apr 2022' },
        { value: 230, date: '28 Apr 2022' },
        { value: 210, date: '29 Apr 2022' },
        {
            value: 200,
            date: '30 Apr 2022',
            label: '30 Apr',
            labelTextStyle: { color: 'lightgray', width: 60 },
        },
    ];





    const [input, setInput] = useState(''); // User input
    const data1 = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                data: [4, 6, 2, 4, 5],
                color: (opacity = 1) => `rgba(241, 196, 15, ${opacity})`, // optional
                strokeWidth: 3, // optional
                withDots: true,
                withScrollableDot: true,
                withShadow: true,
                withInnerLines: true,
                withOuterLines: true,
            },
            {
                data: [1, 3, 3, 1, 2],
                color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`, // optional
                strokeWidth: 3, // optional
                withDots: true,
                withScrollableDot: true,
                withShadow: true,
                withInnerLines: true,
                withOuterLines: true,

            }
        ],
        legend: ["AVG sunlight hours", "AVG water glasses"] // optional
    };
    // Update the data array when the user presses the button
    const handlePress = () => {
        const newData = [...data];
        newData.shift(); // Remove the first element
        newData.push(Number(input)); // Add the user input to the end
        setData(newData); // Update the data
        setInput(''); // Clear the input field
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.container}>

                    {/* button to go back to home screen </TouchableOpacity>*/}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.buttonBack}>
                            <Feather name="arrow-left" size={24} color={Colors.WHITE} />
                        </View>
                    </TouchableOpacity>

                    {/* title on top */}
                    <View style={{ marginBottom: 30, marginTop: 20, borderColor: Colors.BLACK, borderWidth: 1 }}>
                        <Text style={styles.title}>Add a new plant</Text>
                        <Text>Be as detailed as possible to let our AI help you!</Text>
                    </View>

                    {/* weather and AI suggestion */}
                    <View style={{ backgroundColor: 'red' }}>
                        <Text style={{ color: Colors.WHITE }}>Plant ID</Text>
                        <Text>AI suggestion</Text>
                    </View>



                </View>
                <View>
                    <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                        {months.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        padding: 6,
                                        margin: 4,
                                        backgroundColor: '#ebb',
                                        borderRadius: 8,
                                    }}
                                    onPress={() => showOrHidePointer(index)}>
                                    <Text>{months[index]}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <LineChart
                        scrollRef={ref}
                        data={lineData3}
                        areaChart
                        // isAnimated
                        textColor1="black"
                        textShiftY={-2}
                        textShiftX={-5}
                        textFontSize={15}
                        curved
                        label
                        areaGradientId="ag" // same as the id passed in <LinearGradient> below
                        areaGradientComponent={() => {
                            return (
                                <LinearGradient id="ag" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <Stop offset="0%" stopColor="blue" />
                                    <Stop offset="90%" stopColor="blue" />
                                    <Stop offset="90%" stopColor="black" />
                                    <Stop offset="92%" stopColor="black" />
                                    <Stop offset="92%" stopColor="blue" />
                                    <Stop offset="100%" stopColor="blue" />
                                </LinearGradient>
                            );
                        }}
                        height={200}
                        initialSpacing={0}
                        rotateLabel
                        color='black'
                        // showDataPointOnFocus
                        // showVerticalLines
                        spacing={50}
                        line
                    />
                </View>
                <View style={{ borderWidth: 0, paddingTop: 30 }}>
                    <LineChart
                        // areaChart
                        curved
                        dataSet={dataSet}
                        height={200}
                        // showVerticalLines
                        isAnimated
                        showDataPointOnFocus
                        spacing={50}
                        initialSpacing={0}
                        // hideDataPoints
                        startOpacity={0.8}
                        endOpacity={0.3}
                        textShiftY={-2}
                        textShiftX={-5}
                        textFontSize={13}
                        yAxisOffset={-1}
                    />
                </View>





                <View
                    style={{
                        paddingVertical: 100,
                        paddingLeft: 20,
                        backgroundColor: '#1C1C1C',
                    }}>
                    <LineChart
                        areaChart
                        data={greenGraphData}
                        rotateLabel
                        width={300}
                        hideDataPoints
                        spacing={10}
                        color="#00ff83"
                        thickness={2}
                        startFillColor="rgba(20,105,81,0.3)"
                        endFillColor="rgba(20,85,81,0.01)"
                        startOpacity={0.9}
                        endOpacity={0.2}
                        initialSpacing={0}
                        noOfSections={6}
                        stepHeight={50}
                        height={300}
                        maxValue={600}
                        yAxisColor="white"
                        yAxisThickness={0}
                        rulesType={ruleTypes.SOLID}
                        rulesColor="gray"
                        yAxisTextStyle={{ color: 'gray' }}
                        yAxisLabelPrefix="hello"
                        yAxisTextNumberOfLines={2}
                        // yAxisLabelWidth={40}
                        // yAxisSide='right'
                        xAxisColor="lightgray"
                        pointerConfig={{
                            pointerStripHeight: 160,
                            pointerStripColor: 'lightgray',
                            pointerStripWidth: 2,
                            pointerColor: 'lightgray',
                            radius: 6,
                            pointerLabelWidth: 100,
                            pointerLabelHeight: 90,
                            activatePointersOnLongPress: true,
                            autoAdjustPointerLabelPosition: false,
                            pointerLabelComponent: items => {
                                return (
                                    <View
                                        style={{
                                            height: 90,
                                            width: 100,
                                            justifyContent: 'center',
                                            // marginTop: -30,
                                            // marginLeft: -40,
                                        }}>
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontSize: 14,
                                                marginBottom: 6,
                                                textAlign: 'center',
                                            }}>
                                            {items[0].date}
                                        </Text>

                                        <View
                                            style={{
                                                paddingHorizontal: 14,
                                                paddingVertical: 6,
                                                borderRadius: 16,
                                                backgroundColor: 'white',
                                            }}>
                                            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                                {'$' + items[0].value + '.0'}
                                            </Text>
                                        </View>
                                    </View>
                                );
                            },
                        }}
                    />
                </View>


            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 10,
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
    },
    //title text like hello Rose
    title: {
        fontSize: 24,
        color: Colors.DARKGREEN,
        fontWeight: 'bold',
        textAlign: 'left',
    }
})