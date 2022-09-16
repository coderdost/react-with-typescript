import './home.css';
import Note from '../../components/note/note';
import AddNote from '../../components/add-note/add-note';
import { useContext } from 'react';
import { NoteType } from '../../components/note/note-type';
import { ThemeContext } from '../../context/theme/theme';
import { StateContext } from '../../context/state/state';

function Home() {
  const theme = useContext(ThemeContext);
  const {state, dispatch} = useContext(StateContext);

  const addNote = (note: NoteType) => {
      dispatch({type:'ADD_NOTE',payload:note})
  };

  const updateNote = (updatedNote: NoteType) => {
    dispatch({type:'UPDATE_NOTE',payload:updatedNote});
    dispatch({type:'SET_EDIT_MODE',payload:false});
  };

  const editNote = (id: string) => {
    console.log('edit', id);
    const note = state.notes.find((note) => note.id === id);
    dispatch({type:'SET_EDIT_MODE',payload:true});
    if (note) {
      dispatch({type:'SET_NOTE_FOR_EDIT',payload:note});
    }
  };

  const deleteNote = (id: string) => {
       dispatch({type:'DELETE_NOTE',payload:id})
  };
  return (
    <div className={`home ${theme}`}>
      <h2>Notes App [{state.notes.length}]</h2>
      <AddNote
        addNote={addNote}
        updateNote={updateNote}
      ></AddNote>
      <div>
        {state.notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            priority={note.priority}
            text={note.text}
            editNote={editNote}
            deleteNote={deleteNote}
          ></Note>
        ))}
      </div>
    </div>
  );
}

export default Home;
