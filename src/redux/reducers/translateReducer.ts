import { translateTypes } from "../actions/types/translateTypes";
import i18n  from "i18next";

const initialState = {};


export const translateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case translateTypes.LOAD_LITERALS_ES_ES: {
      i18n.changeLanguage(action.payload,(err,t)=>{})
      return action.payload;
    }
    case translateTypes.LOAD_LITERALS_EN_US:{
      return action.payload;
    }
    case translateTypes.LOAD_LITERALS_PT_BR:{
      return action.payload;

    }
    default:
      return state;
    
  }
};
