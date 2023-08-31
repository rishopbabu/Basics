import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

//Navigations
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from "@react-navigation/native";


const SearchScreen = () => {
    
    return (
    <ScrollView>
    <View>
        <Text>Search screen</Text>
    </View>
    </ScrollView>
    )
}


export default SearchScreen