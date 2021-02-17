import {combineReducers} from 'redux'
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { systemReducer, chatReducer } from './chatReducer';
import { translateReducer } from './translateReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    user: userReducer,
    system: systemReducer,
    chat: chatReducer,
    translate: translateReducer
});

export type RootState = ReturnType<typeof rootReducer>