import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import BookingCardComponent from "./BookingCardComponent";
import { Overlay } from 'react-native-elements';
import DrawScreen from "../Screens/DrawScreen";
import AWSServerInterface from "../src/practise/AWSServerInterface"

//DATA = ["9:30am", "10:30am", "11:30am", "12:30pm", "01:30pm", "02:30pm"]


function _onPressed(){
    console.warn("Pressed")
    //var conn = AWSServerInterface.Connection();
}

function toHumanTime(time){

    let date = new Date(time * 1000);

    var humanHours = date.getHours()
    var humanMinutes = date.getMinutes()

 return humanHours + ":" + humanMinutes
}


const AppointmentsComponent = (props) => {   
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <TouchableHighlight onPress={() => {_onPressed()}}>
                    <BookingCardComponent
                        timeString={toHumanTime(item.time)}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    );

}

export default AppointmentsComponent

