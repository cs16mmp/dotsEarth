import {createStore, combineReducers} from 'redux'
import appSyncReducer from './reducers/appSyncReducer'

const rootReducer = combineReducers({
    appSyncReducer : appSyncReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;