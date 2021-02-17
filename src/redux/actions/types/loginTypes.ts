export enum LoginActionType {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_ERROR,
  LOGIN_FIELD,
}

export interface Login {
  email: string;
  password: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

export type LoginAction =
  | {
      type:
        | LoginActionType.LOGIN
        | LoginActionType.LOGIN_SUCCESS
        | LoginActionType.LOGIN_ERROR
        | LoginActionType.LOGOUT;
    }
  | { type: LoginActionType.LOGIN_FIELD; fieldName: string; payload: string };
