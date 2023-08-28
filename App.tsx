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
  FlatList, StatusBar, StyleSheet } from 'react-native';

type AppProps = {
  name: String;
}

type ItemData = {
  id: number,
  title: string
};

//List data
const DATA: ItemData[]= [
  {
    id: 1,
    title: 'First Item'
  },
  {
    id: 2,
    title: 'Second Item'
  },
  {
    id: 3,
    title: 'Third Item'
  },
  {
    id: 4,
    title: 'Fourth Item'
  },
  {
    id: 5,
    title: 'Fifth Item'
  },
  {
    id: 6,
    title: 'Sixth Item'
  },
]

// for selected list
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

//Selected list item
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
)

type itemProps = {title: string}

const ItemSelected = ({title}: itemProps) => {
  return(
    <View style= {styles.item}>
      <Text style= {styles.title}>{title}</Text>
    </View>
  )
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
    <View>
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
  
  const [selectedId, setSelectedId] = useState<number>();
  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
  
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{gap: 20}}>
          <Text style={{gap: 10}}>Hi this is my {name} App</Text>
          <AppName name={'Second RN'}/>
          <AppName name={'Third RN'}/>
          <ImageChanger/>
          <TextInput style= {{height: 40, borderColor: 'gray', borderWidth: 0.5, }} placeholder='Type here'></TextInput>
          <FlatList 
            data={DATA} 
            renderItem={renderItem}
            //keyExtractor={item => item.id}
            //extraData={item => item.selectedId} 
            >
          </FlatList>
          
        </View>
        
      </ScrollView>
      
    </SafeAreaView>
  );
};

// Style sheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;