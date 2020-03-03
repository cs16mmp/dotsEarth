import React, { Component, useReducer} from 'react'

import {QUERY_APPSYNC, SUBSCRIPTION_APPSYNC} from '../actions/types';

import API, { graphqlOperation } from '@aws-amplify/api'
import { onCreateBookingSystemModel } from '../graphql/subscriptions';

import config from '../../aws-exports'
API.configure(config)             

const initialState = { appointments: [] };

const appSyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'QUERY':
            return { ...state, appointments: action.appointments } 
        case 'SUBSCRIPTION':
            return { ...state, appointments: [...state.appointments, action.appointments] }
        default:
            return state
    }
}

async function addAppointment(appointment) {
 
    await API.graphql(graphqlOperation(createBookingSystemModel, { input: appointment }))
    
}

export default appSyncReducer
