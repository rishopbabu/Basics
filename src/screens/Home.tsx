import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//Navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'> 

function HomeScreen({navigation}: HomeScreenProps) {
    return(
        <View style={styles.container}>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    smallText: {
        color: 'black'
    }
})

export default HomeScreen