import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput, setState } from 'react-native';
import { render } from 'react-dom';
import AWSConnection from './AWSconnection';
import RandomAppointments from './RandomAppointments'

function pushAppointment(newAppointment) {

    newAppointment.created_at = 1231324435
    newAppointment.time = 1231324435

    alert(
        ' user_id: ' + newAppointment.user_id +
        ' appointment: ' + newAppointment.appointment_id +
        ' clinic: ' + newAppointment.appointment_id.clinic_id +
        ' band: ' + newAppointment.band +
        ' time: ' + newAppointment.time
    )

    console.warn(newAppointment.created_at)

    AWSConnection.createNewAppointment(newAppointment);

}
function pushRandomAppointments() {

    var result = RandomAppointments.generateAppointments("SE10UN");

    for (let index = 0; index < result.length; index++) {
        console.log(result[index])
        AWSConnection.createNewAppointment(result[index]);
    }
}

export default class AWSinput extends Component {


    constructor(props) {

        super(props);
        this.state = {
            user_id: '',
            appointment_id: '',
            clinic_id: '',
            band: '',
            time: '',
            created_at: ""
        };

    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(user_id) => this.setState({ user_id })}
                        value={this.state.user_id}
                        placeholder="user"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={appointment_id => this.setState({ appointment_id })}
                        value={this.state.appointment_id}
                        placeholder="appointment"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={clinic_id => this.setState({ clinic_id })}
                        value={this.state.clinic_id}
                        placeholder="clinic"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={band => this.setState({ band })}
                        value={this.state.band}
                        placeholder="band"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={time => this.setState({ time })}
                        value="1210210293"
                        placeholder="time"
                    />
                </View>
                <View style={styles.input}>
                    {/* <Button onPress={() => pushAppointment({
                        user_id: this.state.user_id,
                        appointment_id: this.state.appointment_id,
                        clinic_id: this.state.clinic_id,
                        band: this.state.band,
                        time: this.state.time
                    })}
                        title='Create New Appointment' /> */}
                    <Button onPress={() => pushRandomAppointments()}
                        title='Create New Appointment' />
                </View>
                <View style={styles.result}>
                    {/* {state.appointments.map((appointment, i) =>
                        <Text key={appointment.id}> {appointment.user_id} : {appointment.clinic_id}</Text>)} */}
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: "aliceblue",
        margin: 3,
        justifyContent: 'center',
    },
    result: {
        flex: 5,
        backgroundColor: "gray"
    },
    container: {
        alignItems: 'stretch',
        flex: 1,
        flexDirection: "column"
    }
});