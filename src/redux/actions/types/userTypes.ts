//Type of Actions
export const userTypes = {
    ACTIVE_USER: 'ACTIVE_USER',
    INACTIVE_USER: 'INACTIVE_USER',
};
//State
export type UserState = {
    name: string,
    surname: string,
    adress: string,
    id: number,
    isActive: boolean 
}
//Actions
export interface UserActiveAction {
    type: typeof userTypes.ACTIVE_USER,
    payload: boolean
}

export interface UserInactiveAction {
    type: typeof userTypes.INACTIVE_USER,
    payload: boolean
}

export type UserActionTypes = UserActiveAction | UserInactiveAction;