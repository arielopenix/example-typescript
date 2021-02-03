import { Action } from "../actions/noteActions";

export interface NotesState {
  notes: string[];
}

const initialState = {
  notes: [],
};

export const noteReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};
