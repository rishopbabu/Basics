/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Text, Image, View, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';

type AppProps = {
  name: String;
}

// Multiple Components
const AppName = (props: AppProps) => {
  return(
    <View style={{gap: 10}}>
     <Text>Hi this is my {props.name} App</Text>
    </View>
  )
}

const ImageView = () => {
  return(
      <Image source={require('./assets/emoji1.png')} style= {{width: 100, height: 100, gap: 10}}/>
  )
}


// State - state is like a component’s personal data storage. 
// State is useful for handling data that changes over time or that comes from user interaction.
const ImageChanger = () => {
  const [imageSource, setImageSource] = useState(require('./assets/emoji1.png'))
  const [isImage1, setIsImage1] = useState(true)

  const handleButtonClick = () => {
    setImageSource(require('./assets/emoji2.png'))
  }

  const toggeImage = () => {
    if (isImage1) {
      setImageSource(require('./assets/emoji1.png'))
    } else {
      setImageSource(require('./assets/emoji2.png'))
    }
    setIsImage1(!isImage1)
  }

  return(
    <View style={{gap: 10}}>
      <Image source={imageSource} style= {{width: 100, height: 100}}/>
     <TouchableOpacity onPress={toggeImage}>
      <Text>Change Image</Text>
     </TouchableOpacity>
    </View>
  )
}

const App = () => {
  // A const value
  const name = 'First RN'
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={{gap: 20}}>
          <Text style={{gap: 10}}>Hi this is my {name} App</Text>
          <AppName name={'Second RN'}/>
          <AppName name={'Third RN'}/>
          <ImageChanger/>
        </View>
        <View style={{gap: 20}}>
          <TextInput style= {{height: 40, borderColor: 'gray', borderWidth: 0.5, }} placeholder='Type here'></TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;