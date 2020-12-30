import { combineReducers, createStore } from 'redux';
import { InfoReducer } from './reducers/InfoReducer';

const rootReducer = combineReducers({
    InfoReducer
})

export const store = createStore(rootReducer);