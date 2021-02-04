import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/types";

export type AuthState = {
  token: string;
  user: object;
  loading: boolean;
  state: string;
};

const initialState: AuthState = {
  token: "",
  user: {},
  loading: false,
  state: "",
};

export const authReducer = (
  state: AuthState = initialState,
  action: any
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        
      };
    case LOGOUT:
      return {
        ...state
    }
    default:
      return state;
  }
};
