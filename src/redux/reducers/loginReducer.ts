import { Action } from "../actions/loginActions";

export type LoginState = {
  email: string;
  password: string;
  helperText: string;
  isError: boolean;
  showPassword: boolean;
};

const initialState: LoginState = {
  email: "",
  password: "",
  helperText: "",
  isError: false,
  showPassword: false
};

export const reducer = (state: LoginState = initialState , action: Action): LoginState => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "loginSuccess":
      return { ...state, helperText: action.payload, isError: false };
    case "loginFailed":
      return { ...state, helperText: action.payload, isError: true };
    case 'setIsError':
      return {...state, isError:true};
    default: 
      return state;
  }
};
