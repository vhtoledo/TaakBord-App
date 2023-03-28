import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

interface Props {
    children: ReactNode;
}

export interface EntriesState {
   entries: Entry[],
}

const Entries_INITIAL_STATE: EntriesState = {
   entries: [],
}


export const EntriesProvider:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = ( description: string ) => {

    const NewEntry: Entry = {
        _id: uuidv4(),
        description,
        createdAt: Date.now(),
        status: 'pending'
    }

    dispatch({ type: '[Entries] Add-Entry', payload: NewEntry})
  }

  const updateEntry = ( entry: Entry ) => {

    dispatch({ type: '[Entries] Entry-Updated', payload: entry });
  }

  return (
   <EntriesContext.Provider value={{
      ...state,

      //Metodos
      addNewEntry,
      updateEntry,

   }}>
       { children }
   </EntriesContext.Provider>
  )
};