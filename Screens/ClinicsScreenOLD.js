import React, { Component } from "react"

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import config from './aws-exports'

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
    TouchableHighlight,
} from 'react-native';

import ClinicsCarouselComponent from '../Components/ClinicsCarouselComponent'
import CarouselComponent from "../Components/CarouselComponent";
import AppointmentsComponent from "../Components/AppointmentsComponent";
import TypeAppointmentComponent from "../Components/TypeAppointmentComponent";

import * as queries from './src/graphql/queries';
import * as mutations from './src/graphql/mutations'
import * as subscriptions from './src/graphql/subscriptions'

import CalendarData from "../api/CalendarData"


export default function ClinicsScreen() {
       
    return (

        <View style={styles.container}>
            <View style={styles.location}>
                <Text style={styles.locationText}>SW19 5RR</Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Clinics</Text>
            </View>
            <View style={styles.clinics}>

                <ClinicsCarouselComponent></ClinicsCarouselComponent>

            </View>
            <View style={styles.date}>

                <CarouselComponent items ={[]} />

            </View>
            <View style={styles.typeAppointment}>

                <TypeAppointmentComponent></TypeAppointmentComponent>

            </View>
            <View style={styles.availableAppointments}>

                <AppointmentsComponent data={[]} ></AppointmentsComponent>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    location: {
        paddingLeft: 16,
        flex: 1,
        minHeight: 15,
        maxHeight: 10,
        flexGrow: 1,

    },
    title: {
        paddingLeft: 16,
        flex: 1,
        minHeight: 36,
        maxHeight: 36,
        flexGrow: 1,
    },
    clinics: {
        flex: 1,
        minHeight: 143,
        maxHeight: 170,
    },
    date: {
        flex: 1,
        minHeight: 50,
        maxHeight: 50,
        flexGrow: 1,
    },
    typeAppointment: {
        flex: 1,
        minHeight: 30,
        maxHeight: 30,
        flexGrow: 1,
    },
    availableAppointments: {
        flex: 1,
        flexGrow: 1,
    },
    titleText: {
        fontSize: 34,
        fontFamily: 'Avenir-Heavy',
        color: '#2C4159',
    },
    locationText: {
        fontSize: 10,
        fontFamily: 'Avenir-Book',
        color: '#2C4159',
    }
})
