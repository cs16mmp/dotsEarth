import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api'

import PubSub from '@aws-amplify/pubsub';

// Imports all the queries 
import { createBookingSystemModel } from '../graphql/mutations';
import { listBookingSystemModels } from '../graphql/queries';
import { onCreateBookingSystemModel } from '../graphql/subscriptions';

import config from '../../aws-exports'

API.configure(config)             // Configure Amplify
PubSub.configure(config)

// Intialise an array of appointments -> empty 
const initialState = { appointments: [] };

// REDUX. The reducer is a pure function that takes the previous state and an action, 
// and returns the next state
const reducer = (state, action) => {
    switch (action.type) {
        case 'QUERY':
            // The three "..." is a) rest parameter, b) spread operator
            // a) Gather arguments into an array "function myFunction(a, ,b ,..args)"
            // b) Used to expand elements. It can be also used to shallow-cloning(excluding prototype) 
            // or merging of objects like in the following line of code
            return { ...state, appointments: action.appointments } 
        case 'SUBSCRIPTION':
            return { ...state, appointments: [...state.appointments, action.appointments] }
        default:
            return state
    }
}

//Creates a new appointment in an asynchronous manner
async function createNewAppointment(appointment) {

    console.warn("Executed")
    
    // const appointment = {
    //     user_id: 2,
    //     appointment_id: 2,
    //     clinic_id: "2",
    //     band: 2,
    //     time: 1210210293,
    //     created_at: 1231324435
    // }
 
    //This is a 'promise'. Pause the code until this promise fulfills
    await API.graphql(graphqlOperation(createBookingSystemModel, { input: appointment }))
    
}


// THE MAIN CLASS FUNCTION
function AWSConnection() {

    //React Hooks API / Alternative to useState() . It takes a reducer function and initial state
    // as arguments and returns the state and dispatch method. 
    const [state, dispatch] = useReducer(reducer, initialState)

    //Mutations, subscriptions, timers, logging and other effects aren't allowed inside the main function
    // Therefore they have to be inside the useEffect function 
    // which runs after the render is committed to the screen
    useEffect(() => {
        
        //Obtains the data
        getData()
        
        // Subscriptions are a ways to push data from the server to the clients
        const subscription = API.graphql(graphqlOperation(onCreateBookingSystemModel)).subscribe({
            next: (eventData) => {
              const appointment = eventData.value.data.onCreateBookingSystemModel;
              dispatch({type:'SUBSCRIPTION', appointment})
            }
        })
        return () => subscription.unsubscribe()

    }, [])

    //Obtain data 
    async function getData() {
        const appointmentData = await API.graphql(graphqlOperation(listBookingSystemModels))
        dispatch({ type: 'QUERY', appointments: appointmentData.data.listBookingSystemModels.items });
    }

    // return (

    //     createNewAppointment


    //     // <View style={styles.container}>
    //     //     <Button onPress={createNewAppointment} title='Create New Appointment' />
    //     //     {state.appointments.map((appointment, i) => 
    //     //     <Text key={appointment.id}> {appointment.user_id} : {appointment.clinic_id}</Text>)}
    //     // </View>
    // );
}
export default {
    AWSConnection,
    createNewAppointment

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddeeff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});