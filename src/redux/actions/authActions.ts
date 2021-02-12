import { Authentication, AuthActionType, AuthAction } from "./types/authTypes";
import Auth from "../../passapp-sdk/Auth";
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
    auth
      .login(email, password)
      .then((response) => response.json())
      .then((data) => {
        const token = `Bearer ${data.token}`;
        if (token) {
          dispatch(loginSuccess);
          localStorage.setItem("token", `Bearer ${data.token}`);
          console.log("login ok!");
          history.push("/menu"); // redirecciono al menu
        }
        dispatch(loginFailure);
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
