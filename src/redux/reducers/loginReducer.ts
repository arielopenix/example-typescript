import { LoginActionType, Login, LoginAction } from '../actions/types/loginTypes';

export const loginReducer = (state: Login = loginInitialState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionType.LOGIN: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case LoginActionType.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case LoginActionType.LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: '',
        password: '',
        error: "Email o Password incorrecto",
      };
    }
    case LoginActionType.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case LoginActionType.LOGIN_FIELD: {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }

    default:
      return state;
  }
};

export const loginInitialState = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};
