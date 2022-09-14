import './App.css';
import Note from './components/notes/notes';
import { Notes } from './components/notes/data';

function App() {
  return (
    <div className="App">
      <h2>Notes App</h2>
      <div>
        {
          Notes.map(
            note=> <Note priority={note.priority} text={note.text}></Note>
          )
        }
      </div>
    </div>
  );
}

export default App;
