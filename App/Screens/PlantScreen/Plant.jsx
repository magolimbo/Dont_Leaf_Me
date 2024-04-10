import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react';
import Colors from '../../Utils/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
// import { LineChart } from "react-native-chart-kit"
import { LineChart, ruleTypes } from 'react-native-gifted-charts';
import { DataSet } from 'gifted-charts-core';


export default function Plant({ navigation }) {

    const lineData = [
        { value: 20 },
        { value: 10 },
        { value: 8 },
        { value: 58 },
        { value: 56 },
        { value: 78 },
        { value: 74 },
        { value: 98 },
    ];
    const lineData2 = [
        { value: 20 },
        { value: 20 },
        { value: 18 },
        { value: 40 },
        { value: 36 },
        { value: 60 },
        { value: 54 },
        { value: 85 },
    ];
    const dataSet = [
        {
            data: lineData,
            color: 'skyblue',
            startFillColor: 'skyblue',
            lineSegments: [{ startIndex: 2, endIndex: 4, strokeDashArray: [3, 4] }],
        },
        {
            data: lineData2,
            color: 'orange',
            startFillColor: 'orange',
            lineSegments: [
                { startIndex: 0, endIndex: 2, color: Colors.ORANGE },
                { startIndex: 4, endIndex: 6, strokeDashArray: [3, 4], color: Colors.ORANGE },
            ],
        },
    ];

    const ptData = [
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
            <View style={styles.container}>

                {/* button to go back to home screen </TouchableOpacity>*/}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.buttonBack}>
                        <Feather name="arrow-left" size={24} color={Colors.WHITE} />
                    </View>
                </TouchableOpacity>

                {/* title on top */}
                <View style={{ marginBottom: 30, marginTop: 20, borderColor: 'black', borderWidth: 1 }}>
                    <Text style={styles.title}>Add a new plant</Text>
                    <Text>Be as detailed as possible to let our AI help you!</Text>
                </View>

                {/* weather and AI suggestion */}
                <View style={{ backgroundColor: 'red' }}>
                    <Text style={{ color: Colors.WHITE }}>Plant ID</Text>
                    <Text>AI suggestion</Text>
                </View>
                {/*<View>
                    <Text>PROVA GRAFICO SOLE e ACQUA</Text>
                    <LineChart
                        data={data1}
                        width={360}
                        height={200}
                        yLabelsOffset={1}
                        yAxisSuffix="        "
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: Colors.DARKGREEN,
                            backgroundGradientFrom: Colors.DARKGREEN,
                            backgroundGradientTo: Colors.PURPLE,
                            decimalPlaces: 1, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "3", //point dimension
                            }
                        }}
                        bezier //true if you want the line to be curved
                        style={{
                            marginVertical: 5,
                            borderRadius: 16 //radius of the corners of the graph
                        }}
                    />

                </View>*/}

                <View style={{ borderWidth: 1 }}>
                    <LineChart
                        areaChart
                        curved
                        dataSet={dataSet}
                        height={250}
                        showVerticalLines
                        spacing={44}
                        initialSpacing={0}
                        hideDataPoints
                        startOpacity={0.8}
                        endOpacity={0.3}
                        textShiftY={-2}
                        textShiftX={-5}
                        textFontSize={13}
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
                        data={ptData}
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

            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 25,
        borderColor: 'green',
        borderWidth: 1
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