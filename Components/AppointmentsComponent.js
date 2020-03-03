import React, { Component } from "react"

import config from '../aws-exports'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';

API.configure(config)
PubSub.configure(config)

import * as mutations from '../src/graphql/mutations';

import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import BookingCardComponent from "./BookingCardComponent";
import DrawScreen from "../Screens/DrawScreen";

import generateAppointments from '../src/AWS/RandomAppointments'

var _daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var _monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

DATA = ["9:30am", "10:30am", "11:30am", "12:30pm", "01:30pm", "02:30pm"]

function toHumanTime(time) {

    console.log(time)
    
    let date = new Date(time * 1000);

    return date.getDate() + " | " + (date.getHours() + ":" + date.getMinutes()) 

}
async function createRandomAppointment() {

    var result = generateAppointments.generateAppointments("SE10UN", 2)

    for (let index = 0; index < result.length; index++) {
       
        await API.graphql(graphqlOperation(mutations.createBookingSystemDb, {input: result[index]}))
     
    }
  
}
async function updateAppointment(key){

    console.warn(key)

    const appointment_id = "";
    const user_id = "";

    const updateAppointment = await API.graphql(graphqlOperation(mutations.updateBookingSystemDb, {
        input: {
            id: key,
            appointment_id: "BOOKED"
          }
    }))

}
function _onPress(key) {
    //createAppointment()
    console.warn("Item Pressed")
    updateAppointment(key)
    

}
function AppointmentsComponent(props){

    //Sort Algorithm
    props.data.sort(function(a, b){
        return a.time - b.time
    })

    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => (

                <TouchableHighlight onPress={() => { _onPress(item.id) }}>
                    <BookingCardComponent
                        timeString={toHumanTime(item.time)}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    );

}

export default AppointmentsComponent

