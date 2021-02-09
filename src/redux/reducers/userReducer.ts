import { userTypes, UserState,UserActionTypes } from '../actions/types/userTypes'

const initialState:UserState = {
    name: 'Cristian',
    surname: 'Almiron',
    adress:'Montenovi 511',
    id: 0,
    isActive: true
}

export function userReducer(state: UserState = initialState, action: UserActionTypes): UserState{
    switch (action.type) {
        case userTypes.ACTIVE_USER:
            return {
                ...state,
                isActive: true
            }
        case userTypes.INACTIVE_USER:
            return {
                ...state,
                isActive: false
            }        
        default: return state;
    }
}