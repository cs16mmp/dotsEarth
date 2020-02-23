import React, { Component } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import ClinicsScreen from './ClinicsScreen'

const RootStack = createStackNavigator();

export default function HomeStack() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName= "Home">
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen name="Clinics" component={ClinicsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>

    )
}


