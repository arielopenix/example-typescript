import React,{ChangeEvent, useState} from "react";

interface NewNoteInputProps {
    addNote(note: string): void,
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
  const [note,setNote] = useState(""); 
  
  const updateNote = (event:ChangeEvent<HTMLInputElement> ) => {
    setNote(event.target.value)
  }

  const onAddNote = () => {
      addNote(note);
      setNote('');
  }

  return (
    <div>
      <input onChange={updateNote} type="text" name="note" placeholder="Note" />
      <button onClick={onAddNote}>Agregar Nota</button>
    </div>
  );
};
