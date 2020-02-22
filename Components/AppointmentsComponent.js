import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import BookingCardComponent from "./BookingCardComponent";
import { Overlay } from 'react-native-elements';
import DrawScreen from "../Screens/DrawScreen";


DATA = ["9:30am", "10:30am", "11:30am", "12:30pm", "01:30pm", "02:30pm"]


function Item({ time }) {
    return (
        <BookingCardComponent
            timeString={time}
        />
    );
}

const AppointmentsComponent = (props) => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => (
                <TouchableHighlight 
                onPress={() => { 
                    console.warn("pressed")}}>
                    <Item
                        time={item}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    );

}
export default AppointmentsComponent;
