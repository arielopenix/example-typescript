import { translateTypes } from "../actions/types/translateTypes";

export const loadEnLiterals = (literals: any) => ({
    type: translateTypes.LOAD_LITERALS_EN_US,
    payload: literals,
});