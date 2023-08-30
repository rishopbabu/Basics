import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//Navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'> 

function HomeScreen({navigation}: HomeScreenProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.smallText}>Home Screen</Text>
            <Button title="Next Page" onPress={() => navigation.navigate('Details', {productID: '01'})}></Button>
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