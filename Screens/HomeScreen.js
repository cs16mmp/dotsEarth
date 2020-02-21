import React, { Component } from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    ScrollView,
} from 'react-native';
import CardComponent from '../Components/CardComponent'

const DATA = [
    {
        id: '01',
        overlay: 'Burrell Street',
        title: 'Clinics',
        description: 'Book an appointment in seconds',
    },
    {
        id: '02',
        overlay: 'SECURE SEARCH',
        title: 'Organisations',
        description: 'Find LGBTQI+ organisations across the UK',
    },
    {
        id: '04',
        overlay: 'INFO',
        title: 'STDs',
        description: 'Find information about STDs and their symptoms',
    },
    {
        id: '05',
        overlay: 'NOTIFICATIONS',
        title: 'Reminders',
        description: 'Manage your friendly reminders',
    },
    {
        id: '06',
        overlay: 'Arrive in approximate 3 days',
        title: 'Order Testing Kit',
        description: 'Order a free and confidential home testing kit',
    },
];


function Item({ overlay, title, description }) {
    return (
        <CardComponent 
        overlayString={overlay}
        titleString={title}
        descriptionString={description}
        />
    );
}

class HomeScreen extends Component {
    render() {
        return (
            <FlatList
                data={DATA}
                renderItem={({ item }) => 
                <Item 
                overlay={item.overlay}
                title={item.title} 
                description ={item.description}
                />}
                keyExtractor={item => item.id}
            />
        )
    }
}
export default HomeScreen;