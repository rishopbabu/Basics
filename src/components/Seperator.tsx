import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Seperator = () => {
    return(
        <View style={styles.seperator}/>
    )
}

const styles = StyleSheet.create({
    seperator: {
        height: 0.8,
        backgroundColor: 'red'
    }
})

export default Seperator

