import './detailed-note.css';
import Note from '../../components/note/note';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/theme';
import { StateContext } from '../../context/state/state';

function DetailedNote() {
  const theme = useContext(ThemeContext);
  const { state } = useContext(StateContext);
  const note = state.notes[0];
  return (
    <div className={`detailed-note ${theme}`}>
      <div>
          {note && <Note
            key={note.id}
            id={note.id}
            priority={note.priority}
            text={note.text}
            createdAt={note.createdAt}
            updatedAt={note.updatedAt}
            note={note}
            isDetailed={true}
          ></Note>}
      </div>
    </div>
  );
}

export default DetailedNote;
