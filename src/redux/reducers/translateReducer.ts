import { translateTypes } from "../actions/types/translateTypes";

const initialState = {};

export const translateReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case translateTypes.LOAD_LITERALS:
        return action.payload;
      default:
        return state;
    }
  };