import { translateTypes } from "../actions/types/translateTypes";

export const loadLiterals = (literals: any) => ({
    type: translateTypes.LOAD_LITERALS,
    payload: literals,
});