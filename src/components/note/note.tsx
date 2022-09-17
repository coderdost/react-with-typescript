import './note.css';

import { ColorLight, ColorDark, Priority, NoteType } from './note-type';
import Card from '../card/card';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/theme';
import { StateContext } from '../../context/state/state';
import { DELETE_NOTE, SET_EDIT_MODE, SET_NOTE_FOR_EDIT } from '../../actions';

type NoteProps = {
  id: string;
  text: string;
  priority?: Priority;
  note: NoteType
};

function Note(props: NoteProps) {
  const theme = useContext(ThemeContext);
  const {dispatch} = useContext(StateContext);

  const editNote = (note:NoteType) => {
    dispatch({type:SET_EDIT_MODE,payload:true});
    dispatch({type:SET_NOTE_FOR_EDIT,payload:note});
  };

  return (
    <Card
      bgColor={
        theme === 'dark'
          ? props.priority && ColorDark[props.priority]
          : props.priority && ColorLight[props.priority]
      }
      height="2"
      padding="1"
    >
      <>
        <div>{props.text}</div>
        <div className="right-corner">
          <FaEdit onClick={() => editNote(props.note)}></FaEdit>
          <FaTrash
            onClick={() => dispatch({ type: DELETE_NOTE, payload: props.id })}
          ></FaTrash>
        </div>
      </>
    </Card>
  );
}

export default Note;
