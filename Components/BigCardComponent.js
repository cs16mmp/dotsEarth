import React, { Component } from "react"
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

import * as ServerInterface from '../src/AWS/ServerInterface'
import { useNavigation } from '@react-navigation/native';

function _onTapDone(appointment, time, clinic_id, booking_id, navigation){

    appointment.created_at = Date.now()

    appointment.id = ServerInterface.generateUUID();
    
    appointment.clinic_id = clinic_id

    ServerInterface.updateBooking(booking_id, appointment.id)

    ServerInterface.addAppointment(appointment)

    navigation.navigate("Home")

}
function _onTapCancel(){
    navigation.goBack()
}
const BigCardComponent = (props) => {
    
    const navigation = useNavigation()
    
    const [value, onChangeText] = React.useState({
        id: "",
        clinic_id: "",
        name: "",
        description: "",
        phone: "",
        created_at: ""
    });
    
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.card}>
                    <View style={styles.buttons}>
                        <Button
                            color="#2C4159"
                            title="cancel"
                                onPress={() => _onTapCancel()}
                            />
                        <Button
                            color="#FA8F68"
                            title="done"
                            onPress ={() => _onTapDone(value, props.time, props.clinic, props.id, navigation)}
                            />
                    </View>
                    <View style={styles.appointment}>
                        <Text style={styles.appointmentText}>{props.time}</Text>
                        <Text style={styles.appointmentText}>{props.clinic}</Text>
                    </View>
                    <View style={styles.small}>
                        <Text style={styles.text}>Name</Text>
                        <TextInput
                            style={styles.input}
                            autoCompleteType="name" 
                            onChangeText={(text) => onChangeText({...value, name: text})}></TextInput>
                    </View>
                    <View style={styles.small}>
                        <Text style={styles.text}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            autoCompleteType="tel"
                            onChangeText={(text) => onChangeText({...value, phone: text})}></TextInput>
                    </View>
                    <View style={styles.large}>
                        <Text style={styles.text}>Description</Text>
                        <TextInput 
                        style={styles.input} 
                        multiline
                        onChangeText={(text) => onChangeText({...value, description: text})}></TextInput>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
    card: {
        flex: 1,
        minWidth: 343,
        minHeight: 500,
        maxHeight: 500,
        alignSelf: 'stretch',
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#673939',
        shadowOpacity: .25,
        borderRadius: 12,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 13,
        flexDirection: 'column',
        paddingBottom: 16
    }, small: {
        flex: 1,
        maxHeight: 60,
        flexGrow: 1,
        marginTop: 16, 
        marginHorizontal: 16,
    }, large: {
        flex: 1,
        flexGrow: 1,
        marginTop: 16, 
        marginHorizontal: 16,
    }, input: {
        flex: 1,
        borderRadius: 12,
        borderColor: '#2C4159',
        borderWidth: 1,
        paddingLeft: 16
    }, text: {
        fontFamily: 'Avenir-Book',
        color: '#2C4159',
        paddingLeft: 12,
    }, buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16, 
        marginHorizontal: 16,
        minHeight: 40,
        maxHeight: 40,
    }, appointment:{
        flex: 1,
        backgroundColor:"#2C4159",
        minHeight: 60,
        maxHeight: 60,
        marginTop: 16, 
        marginHorizontal: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:16,
        alignItems:'center'
    }, appointmentText:{
        fontSize: 20,
        fontFamily: 'Avenir-Heavy',
        color: '#FFFFFF',
    }

})
export default BigCardComponent;