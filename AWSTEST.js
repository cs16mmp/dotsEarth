import React, { Component, useReducer, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Button, Text } from 'react-native';

import Amplify, { API, graphqlOperation } from 'aws-amplify';

import PubSub from '@aws-amplify/pubsub';
import config from './aws-exports'

API.configure(config)
PubSub.configure(config)

import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations'
import * as subscriptions from './src/graphql/subscriptions'

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

async function filterData(today, tomorrow) {

    const appointmentData = await API.graphql(graphqlOperation(queries.listBookingSystemDBs, query))
    dispatch({ type: 'QUERY', appointments: appointmentData.data.listBookingSystemDBs.items });
    
    console.log(state.appointments)

    const query = {
        filter: {
            clinic_id: { contains: "SE10UN" }
        }
    }

}

export default function AWSTEST() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        getData()

        const subscription = API.graphql(graphqlOperation(subscriptions.onCreateBookingSystemDb)).subscribe({
            next: (eventData) => {
                const appointment = eventData.value.data.subscriptions.onCreateBookingSystemDb;
                dispatch({ type: 'SUBSCRIPTION', appointment })
            }
        })
        return () => subscription.unsubscribe()

    }, [])

    async function getData() {
        const appointmentData = await API.graphql(graphqlOperation(queries.listBookingSystemDBs))
        dispatch({ type: 'QUERY', appointments: appointmentData.data.listBookingSystemDBs.items });
        console.log(appointmentData.data.listBookingSystemDBs.items)
    }

    return (

        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: 'gray' }} >
                <Button onPress={console.warn("pressed")} title='Create Todo' />
            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' }} >
                {state.appointments.map((appointment, i) =>
                    <Text key={appointment.id}>{appointment.time} : {appointment.clinic_id}</Text>)}
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
});
