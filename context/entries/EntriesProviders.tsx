import { FC, ReactNode, useEffect, useReducer } from "react";
import { useSnackbar } from 'notistack';
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces";
import { entriesApi } from "@/apis";

interface Props {
  children: ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });
    dispatch({ type: "[Entries] Add-Entry", payload: data });
  };

  const updateEntry = async ({ _id, description, status }: Entry, showSnackbar = false ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "[Entries] Entry-Updated", payload: data });

      if ( showSnackbar )
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
      
      })
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "[Entries] Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const deleteEntry = async(_id: string) => {
    try {
      const {data} =  await entriesApi.delete<Entry>(`/entries/${_id}`);
      console.log("[Entries] Delete-Entry", data);
      dispatch({ type: "[Entries] Delete-Entry", payload: data });
      await refreshEntries();
    } catch (error) {
      console.log({error});
    }
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Metodos
        addNewEntry,
        updateEntry,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
