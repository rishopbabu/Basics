/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, View, TextInput } from 'react-native';

// Multiple Components
const AppName = () => {
  const name = 'RN App'
  return(
    <View>
     <Text>Hi this is my first {name}</Text>
    </View>
  )
}

const ImageView = () => {
  return(
      <Image source={require('./assets/emoji1.png')} style= {{width: 100, height: 100}}></Image>
  )
}

const App = () => {
  // A const value
  const name = 'RN App'
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hi this is my first {name}</Text>
          <AppName/>
          <AppName/>
          <AppName/>
          <AppName/>
          <Image source={require('./assets/emoji1.png')} style= {{width: 100, height: 100}}></Image>
          <ImageView/>
        </View>
        <TextInput style= {{height: 40, borderBlockColor: 'gray', borderWidth: 0.5}} placeholder='Type here'></TextInput>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;