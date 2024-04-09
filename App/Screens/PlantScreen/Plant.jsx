import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { LineChart, ContributionGraph } from "react-native-chart-kit"
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Plant({ navigation, route }) {

    const { nicknames } = route.params || { nicknames: '' };
    //------------button selected (general state, water ecc)----------------
    const [isPressed, setIsPressed] = useState(false);
    const [currentButton, setCurrentButton] = useState(null);

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
    const [showGeneral, setShowGeneral] = useState(false);
    const [showWater, setShowWater] = useState(false);
    const [showSun, setShowSun] = useState(false);
    const [showDiseases, setShowDiseases] = useState(false);
    //------------------------------------------------------

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

    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
      ];

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
                        <Text style={styles.title}>{nicknames}</Text>
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
                <View style={{ marginBottom: 10, marginTop: 20}}>
                    <Text style={styles.title}>Stats</Text>
                </View>

                {/* buttons to navigate between general, water, sun, diseases */}
                <View style={{flexDirection:'row', justifyContent: 'space-evenly', marginBottom: 20}}>
                    <Pressable onPress={() => handlePress('button1')}>
                        <View style={[styles.buttonStats, isPressed && currentButton=='button1' ? {elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2} : {}]}>
                            <FontAwesome5 name="smile" size={30} color={Colors.DARKGREEN}/>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('button2')}>
                        <View style={[styles.buttonStats, isPressed && currentButton=='button2' ? {elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2} : {}]}>
                            <Ionicons name="water-outline" size={34} color={Colors.DARKGREEN} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('button3')}>
                        <View style={[styles.buttonStats, isPressed && currentButton=='button3' ? {elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2} : {}]}>
                            <Feather name="sun" size={30} color={Colors.DARKGREEN} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('button4')}>
                        <View style={[styles.buttonStats, isPressed && currentButton=='button4' ? {elevation: 2, borderColor: Colors.DARKGREEN, borderWidth: 2} : {}]}>
                            <Ionicons name="skull-outline" size={30} color={Colors.DARKGREEN} />
                        </View>
                    </Pressable>
                   
                </View>
                {/* ------------------------END BUTTONS GENERAL, WATER, SUN, DISEASES--------------------------- */}

                {/* -----------------------GENERAL STATE OF THE PLANT VIEW------------------------------------- */}
                {showGeneral && (
                    <View>
                        <Text style={[styles.title, {alignSelf: 'center'}]}>How do I look like today?</Text>
                        <LineChart
                            data={data1}
                            width={350}
                            height={200}
                            yLabelsOffset={1}
                            yAxisSuffix="        "
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: Colors.DARKGREEN,
                                backgroundGradientFrom: Colors.DARKGREEN,
                                backgroundGradientTo: '#00699f',
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
                                marginVertical: 10,
                                borderRadius: 16 //radius of the corners of the graph
                            }}
                        />

                        <ContributionGraph
                            values={commitsData}
                            endDate={new Date("2017-04-01")}
                            numDays={365}
                            width={350}
                            height={220}
                            chartConfig={{
                                backgroundColor: Colors.DARKGREEN,
                                backgroundGradientFrom: Colors.DARKGREEN,
                                backgroundGradientTo: '#00699f',
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
                        />

                    </View>
                )}

                
                {/* -----------------------END GENERAL STATE OF THE PLANT VIEW------------------------------------- */}

                {/* -----------------------WATER VIEW------------------------------------- */}
                {showWater && (
                    <View>
                        <Text>Water</Text>
                    </View>
                )}
                {/* -----------------------END WATER VIEW------------------------------------- */}

                {/* -----------------------SUN VIEW------------------------------------- */}
                {showSun && (
                    <View>
                        <Text>Sun</Text>
                    </View>
                )}
                {/* -----------------------END SUN VIEW------------------------------------- */}

                {/* -----------------------DISEASES VIEW------------------------------------- */}
                {showDiseases && (
                    <View>
                        <Text>Diseases</Text>
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
    buttonStats:{
        width: 60,
        height: 60,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.DARKGREEN,
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        elevation: 10,
    }
})