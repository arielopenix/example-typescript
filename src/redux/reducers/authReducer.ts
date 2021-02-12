//definir la interface a partir de los datos que traiga del servidor
import { AuthActionType } from "../actions/types/authTypes";
//import { User } from "../actions/types/userTypes";
 
export type AuthState = {
  token: string;
  user: any;
  loading: boolean;
  state: string
};

const initialState: AuthState = {
  token: "",
  user: null,
  loading: false,
  state: "",
}

export const authReducer = (
  state: any = initialState,
  action: any
): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case AuthActionType.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.User,
      };
    case AuthActionType.LOGIN_FAILURE:
      return {
        ...state,
        
      };
    case AuthActionType.LOGOUT:
      return {
        ...state
    }
    default:
      return state;
  }
};
