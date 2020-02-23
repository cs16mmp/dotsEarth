import React, { Component } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import ClinicsScreen from './ClinicsScreen'

const RootStack = createStackNavigator();

//headerMode="none" 

export default function HomeStack() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName= "Home" headerMode="float" >
                <RootStack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{headerShown:"false"}}/>
                
                <RootStack.Screen 
                name="Clinics" 
                component={ClinicsScreen} 
                options={{headerShown:"true"}} />
            </RootStack.Navigator>
        </NavigationContainer>

    )
}


