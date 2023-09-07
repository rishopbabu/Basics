import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text, TouchableOpacity } from "react-native"
import TaBScreen1 from "./TabScreen1"
import TaBScreen2 from "./TabScreen2"

const Tab = createBottomTabNavigator()

interface MyTabBarProps {
    state: {
        routes: { key: string; name: string }[];
        index: number;
    };
    descriptors: {
        [key: string]: {
        options: {
            tabBarLabel?: string;
            title?: string;
            tabBarAccessibilityLabel?: string;
            tabBarTestID?: string;
        }
        }
    }
    navigation: {
        emit: (event: { type: string; target: string }) => any
        navigate: (name: string) => void
    }
}

function MyTabBar({state, descriptors, navigation}: MyTabBarProps) {
    return(
        <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route: { key: string | number; name: any }, index: any) => {
            const { options } = descriptors[route.key];
            const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            
            const isFocused = state.index === index;
            
            const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: ''
            });
            
            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
            };
            
            const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: '',
            });
            };
            
            return (
            <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1 }}
            >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
            </Text>
            </TouchableOpacity>
            )
            })}
        </View>
    )
}

const BottomTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <MyTabBar {...MyTabBarProps} />}>
                <Tab.Screen name="Home" component={TaBScreen1}/>
                <Tab.Screen name="Settings" component={TaBScreen2} />        
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default BottomTabs