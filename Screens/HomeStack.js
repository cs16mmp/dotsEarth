import React, { Component } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import ClinicsScreen from './ClinicsScreen'
import OrganisationsScreen from './OrganisationsScreen'
import STIScreen from './STIScreen'
import TestingKitScreen from './TestingKitScreen'
import NotificationsScreen from './NotificationsScreen'
import BookingScreen from './BookingScreen'

const RootStack = createStackNavigator();

//headerMode="none" 

export default function HomeStack() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home" headerMode="none" >
                <RootStack.Screen
                    name="Home"
                    component={HomeScreen}/>

                <RootStack.Screen
                    name="Clinics"
                    component={ClinicsScreen}/>

                <RootStack.Screen
                    name="Organisations"
                    component={OrganisationsScreen} />

                <RootStack.Screen
                    name="STIs"
                    component={STIScreen} />

                <RootStack.Screen
                    name="Reminders"
                    component={NotificationsScreen} />

                <RootStack.Screen
                    name="Order Testing Kit"
                    component={TestingKitScreen} />
                
                <RootStack.Screen
                    name="Booking"
                    component={BookingScreen} />

            </RootStack.Navigator>
        </NavigationContainer>

    )
}


