import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Main from './src/Main/Main'
import One from './src/AnotherScreen/AnotherScreen'
import Two from './src/AnotherScreen/AnotherScreen2'

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function MainClass({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text> NavigationFile </Text>
        </View>
    );
}

const TodoNavigator = () => (
    <TopTab.Navigator>
        <TopTab.Screen
            name={'OneHere'}
            component={One}
            options={{ title: 'IN PROGRESS' }}
        />
        <TopTab.Screen
            name={'TwoHere'}
            component={Two}
            options={{ title: 'DONE' }}
        />
    </TopTab.Navigator>
);

function twoStack({ navigation, route }) {
    console.log("Route options", route)
    navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen
                name={'Check'}
                component={One}
                options={{ title: 'Check' }}
            />
            <Stack.Screen
                name={'Check2'}
                component={Two}
                options={{ title: 'Check' }}
            />
        </Stack.Navigator>
    )
}

const HomeBottomNavigator = () => (
    < BottomTab.Navigator >
        <BottomTab.Screen
            name={'Main'}
            component={twoStack}
            options={({ route }) => ({
                // tabBarVisible: 
            })}
        />
        <BottomTab.Screen
            name={'One'}
            component={One}
            options={{ title: 'One' }}
        />
        <BottomTab.Screen
            name={'TodoNavigator'}
            component={TodoNavigator}
            options={{ title: 'Two' }}
        />
    </BottomTab.Navigator >
);

const HomeNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen
            name={'MainHome'}
            component={HomeBottomNavigator}
            options={{ title: 'About' }}
        />
        <Drawer.Screen
            name={'MainClass'}
            component={MainClass}
            options={{ title: 'Home' }}
        />
    </Drawer.Navigator>
);


export const AppNavigator = (props) => (
    <Stack.Navigator>
        <Stack.Screen name={'HOME'} component={HomeNavigator} />
    </Stack.Navigator>
);

export default () => {
    return (
        <React.Fragment>
            <NavigationContainer>
                <AppNavigator initialRouteName={'HOME'} />
            </NavigationContainer>
        </React.Fragment>
    );
};
