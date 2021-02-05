import { authTypes } from "../actions/types/authTypes";
import User from './interfaces/User';

const stateAuth = {
  STATEONE: 'STATEONE', 
  STATETWO: 'STATETWO',
  STATETHREE: 'STATETHREE'
}

export type AuthState = {
  token: string;
  user: User;
  loading: boolean;
  state: string
};

const initialState: AuthState = {
  token: "",
  user: {
    name: '',
    surname: '',
    id: 0,
    state:false
  },
  loading: false,
  state: "",
};

export const authReducer = (
  state: AuthState = initialState,
  action: any
): AuthState => {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        
      };
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        
      };
    case authTypes.LOGOUT:
      return {
        ...state
    }
    default:
      return state;
  }
};