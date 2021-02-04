import {combineReducers} from 'redux'
import { noteReducer } from './noteReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    noteReducer,
    authReducer
});