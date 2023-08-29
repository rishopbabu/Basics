import React, {Component} from "react";
import { Alert, Button, StyleSheet, View } from "react-native";


export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('Tapped Button')
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title= 'Press Me'></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title='Press Me' color={'#841584'}></Button>
                </View>
                <View>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Button onPress={this._onPressButton} title='Click Me Once'></Button>
                        <Button onPress={this._onPressButton} title='OK!' color={'#841584'}></Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    buttonContainer: {
        margin: 20
    },

    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})