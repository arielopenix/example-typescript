import { userTypes, UserActionTypes } from './types/userTypes';

//Methods send user actions
export const activateUser = (active: boolean): UserActionTypes => {
  return {
    type: typeof userTypes.ACTIVE_USER,
    payload: active,
  };
};

export const desactivateUser = (active: boolean): UserActionTypes => {
  return {
    type: userTypes.INACTIVE_USER,
    payload: active,
  };
};