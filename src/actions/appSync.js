import {QUERY_APPSYNC, SUBSCRIPTION_APPSYNC} from './types'

export const queryAppSync = (DATA) => (
    {
        type: QUERY_APPSYNC,
        data: DATA
    }
)

export const subscriptionAppSync = (DATA) => (
    {
        type: SUBSCRIPTION_APPSYNC,
        data: DATA
    }
)