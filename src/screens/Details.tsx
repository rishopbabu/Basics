import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//Navigations
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from "@react-navigation/native";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'> 

const DetailsScreen = ({route}: DetailsScreenProps) => {

    const {productID} = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return(
        <View style={styles.container}>
            <Text style={styles.smallText}>Details: {productID}</Text>
            <Button title= 'Go to home'
                    // onPress={() => navigation.navigate('Home')}>
                    onPress={() => navigation.popToTop()}/>
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

export default DetailsScreen