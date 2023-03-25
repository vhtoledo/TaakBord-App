import { FC, useContext, useMemo } from 'react';
import { EntryStatus } from "../../interfaces";
import { List, Paper} from "@mui/material"
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

  const { entries } = useContext( EntriesContext )

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status), [ entries ]);
  

  return (
    // Aqui se hara el drop
    <div>
        <Paper sx={{ height: 'calc(100vh - 180px)', overflow: '', backgroundColor: 'transparent', padding: '1px 5px' }}>

            {/* Cambiara dependiendo si estoy haciendo drag o no*/}
            <List sx={{ opacity: 1}}>
                {
                  entriesByStatus.map( entry => (
                    <EntryCard key={ entry._id } entry={ entry }/>
                  ))
                }
            </List>

        </Paper>
    </div>
  )
}
