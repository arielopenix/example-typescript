import { User } from '../types/userTypes'

export enum AuthActionType {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
}

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
    type: AuthActionType.LOGIN_REQUEST;
    payload: Authentication;
  }

  interface AuthSuccessAction {
    type: AuthActionType.LOGIN_SUCCESS;
    payload: Authentication;
  }

  interface AuthFailureAction {
    type: AuthActionType.LOGIN_FAILURE;
    payload: Error;
  }
  
  interface AuthLogoutAction {
    type: AuthActionType.LOGOUT;
    payload: {
      state: boolean;
    };
  }

  export type AuthAction = AuthRequestAction | AuthSuccessAction | AuthFailureAction | AuthLogoutAction

