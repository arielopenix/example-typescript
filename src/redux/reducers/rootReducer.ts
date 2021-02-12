import {combineReducers} from 'redux'
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { systemReducer, chatReducer } from './chatReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    user: userReducer,
    system: systemReducer,
    chat: chatReducer
});

export type RootState = ReturnType<typeof rootReducer>