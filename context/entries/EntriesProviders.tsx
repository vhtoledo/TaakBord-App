import { FC, ReactNode, useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { entriesApi } from '@/apis';

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

  const addNewEntry = async( description: string ) => {

    const { data }= await entriesApi.post<Entry>('/entries', {description});
    dispatch({ type: '[Entries] Add-Entry', payload: data})

  }

  const updateEntry = ( entry: Entry ) => {

    dispatch({ type: '[Entries] Entry-Updated', payload: entry });
  }

const refreshEntries = async() => {
  const { data } = await entriesApi.get<Entry[]>('/entries');
  dispatch({ type: '[Entries] Refresh-Data', payload: data});
}

  useEffect(() => {
    refreshEntries();
  }, [])

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