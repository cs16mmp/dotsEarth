import config from '../../aws-exports'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';

API.configure(config)
PubSub.configure(config)

import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

import uuid from 'uuid-random';

import RandomAppointments from './RandomAppointments'

export function generateUUID(){
    return uuid();
}

export async function updateBooking(booking_id, appointment_id){
    
    const updateAppointment = await API.graphql(graphqlOperation(mutations.updateBookingSystemDb, {
        input: {
            id: booking_id,
            appointment_id: appointment_id
          }
    }))
    console.warn("Booking Updated")
}
export async function createBookings() {

    var result = RandomAppointments.generateAppointments("SE10UN", 2)

    for (let index = 0; index < result.length; index++) {
       
        await API.graphql(graphqlOperation(mutations.createBookingSystemDb, {input: result[index]}))
     
    }
    console.warn("Bookings Created")
}
export async function addAppointment(appointment){
    
    console.log("ADD Appointment")
    console.log(appointment)
    
    try{
        await API.graphql(graphqlOperation(mutations.createAppointmentDb, {input: appointment}))
    }catch(e){
        console.warn(e)
    }
}