import { User } from '../types/userTypes'

export enum authTypes {
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
}

export interface Auth {
    token: string;
    User: User;
    loading: boolean;
    state: string;
    token_file: {
        token: string
        exp: any
    }
  }
  
  export interface LoginAction {
    type: authTypes;
    payload: Auth;
  }
  
  export interface LogoutAction {
    type: authTypes;
    payload: {
      state: boolean;
    };

  
  }

