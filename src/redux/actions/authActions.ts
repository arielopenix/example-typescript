import { FaceRounded } from "@material-ui/icons"
import { authTypes } from './types/authTypes';

let nextUserId = 0
export const loginRequest = (email: string, password: string) => {
    type: authTypes.LOGIN_REQUEST,
    id: nextUserId++,
    text
}

export const loginSuccess = (email: string, password: string) => {
    type: authTypes.LOGIN_SUCCESS,
    id: nextUserId++,
    text
}

export const loginFailure = (email: string, password: string) => {
    type: authTypes.LOGIN_FAILURE,
}

export const loginLogout = () => {
    type: authTypes.LOGIN_FAILURE,
}

