import { useState } from 'react';
import { NoteType, Priority } from '../note/note-type';
import './add-note.css';
import { v4 as uuidv4 } from 'uuid';

type AddNoteProps = {
  addNote : (note: NoteType) => void
}

function AddNote(props: AddNoteProps){

  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>('low');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
     setText(e.target.value);
  }
 
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    props.addNote({
      text,
      priority,
      id: uuidv4()
    })
  }

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
   setPriority(e.target.value as Priority);
  }

  return(
    <div>
        <form className="add-note">
            <input type="text" onChange={handleChange}/>
            <select onChange={handleSelect} value={priority}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}

export default AddNote;