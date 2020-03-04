import React, { Component } from "react"

import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import BookingCardComponent from "./BookingCardComponent";

var _daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var _monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function toHumanTime(time) {

    console.log(time)
    
    let date = new Date(time * 1000);

    return date.getDate() + " | " + (date.getHours() + ":" + date.getMinutes()) 

}

function _onPress(item, props) {


    console.warn(item.id)

    props.navigation.navigate('Booking', item)  

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
                <TouchableHighlight onPress={() => { _onPress(item, props) }}>
                    <BookingCardComponent
                        timeString={toHumanTime(item.time)}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    );

}

export default AppointmentsComponent

