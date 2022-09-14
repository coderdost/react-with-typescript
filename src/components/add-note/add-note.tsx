import { useState } from 'react';
import './add-note.css';

function AddNote(){

  const [text, setText] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
     setText(e.target.value);
  }

  return(
    <div>
        <form className="add-note">
            <input type="text" onChange={handleChange}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddNote;