import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native';


class TypeAppointmentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            state: 'Java'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>Type of appointment</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Text: {
        fontSize: 14,
        fontFamily: 'Avenir-Heavy',
        color: '#FA8F68',
        paddingLeft:16
    },
});

export default TypeAppointmentComponent