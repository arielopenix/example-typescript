import { translateTypes } from "../actions/types/translateTypes";
import i18n  from "i18next";

const initialState = {
  lang:'en_US'
};

export const translateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case translateTypes.TRANSLATE_CHANGE_LANGUAGE: {
      i18n.changeLanguage(action.lang,(err,t)=>{
        if (err) return console.log('something went wrong loading', err);
      })
      return {
        ...state,
        lang: action.lang
      };
    }
    default:
      return state;
  }
};
