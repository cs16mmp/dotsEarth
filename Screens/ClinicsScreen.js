import React, { Component } from "react"
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

import * as RootNavigation from '../RootNavigation';
import ClinicsCarouselComponent from '../Components/ClinicsCarouselComponent'
import CarouselComponent from "../Components/CarouselComponent";
import CalendarData from "../api/CalendarData"


class ClinicsScreen extends Component {
    render() {
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

                    <CarouselComponent items = {CalendarData(30)}/>

                </View>
                <View style={styles.typeAppointment}>


                </View>
                <View style={styles.availableAppointments}>


                </View>


            </View>
        )
    }
}

export default ClinicsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    location: {
        paddingLeft:16,
        flex: 1,
        minHeight: 15,
        maxHeight: 10,
        flexGrow: 1,

    },
    title: {
        paddingLeft:16,
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
        backgroundColor: "grey",
    },
    availableAppointments: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: "grey"
    },
    titleText: {
        fontSize: 34,
        fontFamily: 'Avenir-Heavy',
        color: '#2C4159',
    },
    locationText:{
        fontSize: 10,
        fontFamily: 'Avenir-Book',
        color: '#2C4159',
    }
})
