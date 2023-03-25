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
   entries: [
    {
        _id: uuidv4(),
        description:'Pendiente: asdhfkjashdfkjhasdjkhfahjd',
        status: 'pending',
        createdAt: Date.now(),
    },
    {
        _id: uuidv4(),
        description:'En-Progreso: asdhfkjashdfkjhasdjkhfahjd',
        status: 'in-progress',
        createdAt: Date.now()  - 100000,
    },
    {
        _id: uuidv4(),
        description:'Terminadas: asdhfkjashdfkjhasdjkhfahjd',
        status: 'finished',
        createdAt: Date.now()  - 100000,
    }
   ],
}


export const EntriesProvider:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  return (
   <EntriesContext.Provider value={{
      ...state,
   }}>
       { children }
   </EntriesContext.Provider>
  )
};