import {combineReducers} from 'redux'
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { systemReducer, chatReducer } from './chatReducer';
import userTworeducer from './userTwoReducer';
import uiReducer from './uiReducer';

export const rootReducer = combineReducers({
    auth:authReducer,
    user: userReducer,
    userTwo: userTworeducer,
    UI: uiReducer,
    system: systemReducer,
    chat: chatReducer
});

export type RootState = ReturnType<typeof rootReducer>