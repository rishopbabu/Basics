/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, View, TextInput } from 'react-native';

const App = () => {
  
  // A const value
  const name = 'RN App'
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hi this is my first {name}</Text>
          <Image source={require('./assets/emoji1.png')} style= {{width: 250, height: 250}}></Image>
        </View>
        <TextInput style= {{height: 40, borderBlockColor: 'gray', borderWidth: 0.5}} defaultValue='Type here'></TextInput>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;