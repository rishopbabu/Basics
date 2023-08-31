/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

// Import Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Import screens
import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import SearchScreen from './screens/Search';
import { View } from 'react-native';


export type RootStackParamList = {
  Home: undefined
  Details: { product: Product}
  Search: undefined
}

const Stack = createNativeStackNavigator()

const App = () => {
  return(

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen 
          name = 'Home'
          component={HomeScreen}
          options={{
            title: 'Trending Products'
          }} />
        
        <Stack.Screen
          name = 'Details'
          component={DetailsScreen}
          options={{
            title: 'Products Details'
          }} /> */}

        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={EmptyScreen} />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name='Search' component={SearchScreen} />
          <Stack.Screen name="Share" component={EmptyScreen} />
        </Stack.Group>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const EmptyScreen = () => {
  return(
    <View></View>
  )
}

export default App;
