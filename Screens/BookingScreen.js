import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import BigCardComponent from '../Components/BigCardComponent'

export default function BookingScreen({route}) {

    console.log(route)

    return (
        <View style={styles.container}>    
           <View style={styles.title}>
                    <Text style={styles.titleText}>Booking</Text>
            </View>
           <View style={styles.card}>
               <BigCardComponent
               clinic = {route.params.clinic_id}
               time = {route.params.time}  
               id = {route.params.id}
               navigation = {route.navigation}
               />
           </View>
        </View>
    )

}
const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#34DCCA'
},
title: {
    paddingLeft: 16,
    flex: 1,
    minHeight: 100,
    maxHeight: 100,
    flexGrow: 1,
    justifyContent:'flex-end',
},
titleText: {
    fontSize: 34,
    fontFamily: 'Avenir-Heavy',
    color: '#2C4159',
},
card: {
    flex: 1,
    
}

})

