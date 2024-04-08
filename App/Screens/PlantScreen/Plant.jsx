import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Colors from '../../Utils/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit"


export default function Plant({ navigation }) {

    const data1 = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                data: [4, 6, 2, 4, 5],
                color: (opacity = 1) => 'rgba(241, 196, 15, ${opacity})', // optional
                strokeWidth: 3, // optional
                withDots: true,
                withScrollableDot: true,
                withShadow: true,
                withInnerLines: true,
                withOuterLines: true,
            },
            {
                data: [1, 3, 3, 1, 2],
                color: (opacity = 1) => 'rgba(52, 152, 219, {opacity})', // optional
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
                <View>
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
                            color: (opacity = 1) => 'rgba(255, 255, 255, ${opacity})',
                            labelColor: (opacity = 1) => 'rgba(255, 255, 255, ${opacity})',
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