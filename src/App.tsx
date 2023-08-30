/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Text, 
  Image, View, TextInput, TouchableOpacity, 
  useWindowDimensions, TouchableHighlight, 
  FlatList, StatusBar, StyleSheet, ImageBackground, 
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, } from 'react-native';

// Import Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Import screens
import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'


export type RootStackParamList = {
  Home: undefined
  Details: { productID: String}
  Feed: { sort: 'latest' | 'top' } | undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return(

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name = 'Home'
          component={HomeScreen}
          options={{
            title: 'Products'
          }} />
        
        <Stack.Screen
          name = 'Details'
          component={DetailsScreen}
          options={{
            title: 'Products Details'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
