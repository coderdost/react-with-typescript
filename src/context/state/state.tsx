import { createContext } from 'react';
import { NoteType } from '../../components/note/note-type';
export type StateType = {
  notes: NoteType[];
  editMode: boolean;
  noteToBeEdited: NoteType | null;
};
export const StateContext = createContext<{
  state: StateType;
  dispatch: any
}>({} as { state: StateType; dispatch:any  });
