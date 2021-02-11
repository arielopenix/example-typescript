import { User } from '../types/userTypes'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' 
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT ='LOGOUT'

export interface Authentication {
    token: string;
    User: User;
    loading: boolean;
    state: string;
    token_file: {
        token: string
        exp: any
    }
  }
  
  interface AuthRequestAction {
    type: typeof LOGIN_REQUEST;
    payload: Authentication;
  }

  interface AuthSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: Authentication;
  }

  interface AuthFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: Error;
  }
  
  interface AuthLogoutAction {
    type: typeof LOGOUT;
    payload: {
      state: boolean;
    };
  }

  export type AuthAction = AuthRequestAction | AuthSuccessAction | AuthFailureAction | AuthLogoutAction

