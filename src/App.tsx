import React from "react";
import { NewNoteInput } from "./components/NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./redux/reducers/noteReducer";
import { addNote } from "./redux/actions/noteActions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
