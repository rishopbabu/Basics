/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, View, TextInput } from 'react-native';

type AppProps = {
  name: String;
}

// Multiple Components
const AppName = (props: AppProps) => {
  return(
    <View>
     <Text>Hi this is my {props.name} App</Text>
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
  const name = 'First RN'
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hi this is my {name} App</Text>
          <AppName name={'Second RN'}/>
          <AppName name={'Third RN'}/>
          <Image source={require('./assets/emoji1.png')} style= {{width: 100, height: 100}}></Image>
          <ImageView/>
        </View>
        <TextInput style= {{height: 40, borderBlockColor: 'gray', borderWidth: 0.5}} placeholder='Type here'></TextInput>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;