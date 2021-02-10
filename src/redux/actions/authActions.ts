import { authTypes } from './types/authTypes';
import Auth from "../../passapp-sdk/Auth";

const auth = new Auth();

export const loginRequest = () => {
    return {
        type: authTypes.LOGIN_REQUEST
    }
};

export const logout = () => {
    return {
        type: authTypes.LOGOUT
    }
};

export const login = (email: string, password: string) => {
    return (dispatch: any) => {
        dispatch(loginRequest);
        auth.login(email,password)
        .then(response => response.json())
        .then( response => response.data)
    }
}
