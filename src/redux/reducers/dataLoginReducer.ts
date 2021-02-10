export const loginInitialState = {
  email: "",
  password: "",
};

export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const dataLoginReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
