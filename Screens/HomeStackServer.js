import React, { Component, useEffect, useReducer} from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'
import ClinicsScreen from './ClinicsScreen'
import OrganisationsScreen from './OrganisationsScreen'
import STIScreen from './STIScreen'
import TestingKitScreen from './TestingKitScreen'
import NotificationsScreen from './NotificationsScreen'

import config from '../aws-exports'
          
//AWS
import PubSub from '@aws-amplify/pubsub';
PubSub.configure(config)
import API, { graphqlOperation } from '@aws-amplify/api'

API.configure(config)   

// Imports all the queries 
import { createBookingSystemModel } from '../src/graphql/mutations';
import * as queries from '../src/graphql/queries';
import { onCreateBookingSystemModel } from '../src/graphql/subscriptions';

const RootStack = createStackNavigator();
const initialState = { appointments: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'QUERY':
            return { ...state, appointments: action.appointments }
        case 'SUBSCRIPTION':
            return { ...state, appointments: [...state.appointments, action.appointments] }
        default:
            return state
    }
}

function HomeStack() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        getData()  
        const subscription = API.graphql(graphqlOperation(onCreateBookingSystemModel)).subscribe({
            next: (eventData) => {
                const appointment = eventData.value.data.onCreateBookingSystemModel;
                dispatch({ type: 'SUBSCRIPTION', appointment })
            }
        })
        return () => subscription.unsubscribe()

    }, [])

    async function getData() {

        const appointmentData = await API.graphql(graphqlOperation(queries.listBookingSystemModels))
        dispatch({ type: 'QUERY', appointments: appointmentData.data.listBookingSystemModels.items });
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home" headerMode="float" >
                <RootStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: "false" }} />

                <RootStack.Screen
                    name="Clinics"
                    component={ClinicsScreen}
                    options={{ headerShown: "true" }} />

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
            </RootStack.Navigator>
        </NavigationContainer>

    )
}
export default HomeStack


