import React from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native";

//Navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

import ProductItem from "../components/ProductItem";
import Seperator from "../components/Seperator";

//Data
import { PRODUCTS_LIST } from "../data/constants";


type HomeScreenProps = NativeStackScreenProps<RootStackParamList>

function HomeScreen({navigation}: HomeScreenProps) {
    return (
        <View style={styles.container}>
            {/* <FlatList
            data={PRODUCTS_LIST}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Seperator}
            renderItem={({item}) => (
            <Pressable
                onPress={() => {
                navigation.navigate('Details', {
                product: item
                })
            }}>
            <ProductItem product={item}/>
            </Pressable>
            )}
            /> */}
            <Text>Home Screen</Text>
            <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: 'white'
    }
})

export default HomeScreen