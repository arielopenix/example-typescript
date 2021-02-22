import { Authentication, AuthActionType, AuthAction } from "./types/authTypes";
import Auth from "../../passapp-sdk/auth";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";
import { Action } from "redux";

const auth = new Auth();
//Actions
export const loginRequest = (auth: Authentication): AuthAction => {
  return {
    type: AuthActionType.LOGIN_REQUEST,
    payload: auth,
  };
};

export const loginSuccess = (auth: Authentication): AuthAction => {
  return {
    type: AuthActionType.LOGIN_SUCCESS,
    payload: auth,
  };
};

export const loginFailure = (error: Error): AuthAction => {
  return {
    type: AuthActionType.LOGIN_FAILURE,
    payload: error,
  };
};

export const logout = (state: boolean): AuthAction => {
  return {
    type: AuthActionType.LOGOUT,
    payload: {
      state,
    },
  };
};
// API Actions
export const login = (email: string, password: string, history: any) => {
  return (dispatch: any) => {
    dispatch(loginRequest);
    auth.login(email, password)
      .then((response) => {
        auth.getUser(response.token)
        .then((user) => {
          dispatch(loginSuccess);
          localStorage.setItem("user", user);
          localStorage.setItem("token", response.token);
          history.push("/dashboard");
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        dispatch(loginFailure);
      });
  };
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
