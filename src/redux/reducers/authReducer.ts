//definir la interface a partir de los datos que traiga del servidor
import { authTypes } from "../actions/types/authTypes";
import User from './interfaces/User';
 
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
}

export const authReducer = (
  state: any = initialState,
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
