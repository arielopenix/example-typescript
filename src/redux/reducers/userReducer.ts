import { User, usersTypes } from "../actions/types/userTypes";

export type UsersState = {
  loading: boolean;
  users: Array<User>;
  error: string;
};

const initialState: UsersState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (
  state: UsersState = initialState,
  action: any
): UsersState => {
  switch (action.type) {
    case usersTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case usersTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case usersTypes.FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
