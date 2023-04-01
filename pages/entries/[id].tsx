import { useState, ChangeEvent, useMemo, FC, useContext } from 'react';
import { GetServerSideProps } from 'next';
import { Card, Grid, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { dnEntries } from '@/database';
import { Layout } from '../../components/layouts/Layout';
import { Entry, EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';
import { dateFunctions } from '@/utils';
import router from 'next/router';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
    entry: Entry
}

const EntryPage:FC<Props> = ( { entry } ) => {

    const { updateEntry } = useContext( EntriesContext )
    const { deleteEntry } = useContext( EntriesContext )

    const [inputValue, setInputValue] = useState( entry.description );
    const [status, setStatus] = useState<EntryStatus>( entry.status );
    const [touched, setTouched] = useState(false);
    const isNotvalid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);

    const onInputValueChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value );
    }

    const onStatusChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        setStatus(event.target.value as EntryStatus);
    }

    const onSave = () => {
        if ( inputValue.trim().length === 0 ) return;

        const updatedEntry: Entry = {
            ...entry,
            status,
            description: inputValue
        }

        updateEntry( updatedEntry, true );
        router.push("/");
    }

    const onDelete = () => {
        deleteEntry(entry._id);
        router.push("/");
      } 

  return (
    <Layout title={ inputValue.substring(0,20) + '...' }>
        <Grid
            container
            justifyContent='center'
            sx={{ marginTop: 2 }}
            
        >
            <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                <Card className='card-cont'>
                    <CardHeader
                        title={`Entrada: ${ inputValue }`}
                        subheader={`Creada ${dateFunctions.getFormatDistanceToNow( entry.createdAt ) }`}
                    />

                    <CardContent>
                        <TextField
                            sx={{ marginTop: 2, marginBottom: 1}}
                            fullWidth
                            placeholder='Nueva Entrada'
                            autoFocus
                            multiline
                            label="Nueva Entrada"
                            value={ inputValue }
                            onBlur={ () => setTouched(true) }
                            onChange={ onInputValueChanged }
                            helperText={ isNotvalid && 'Ingrese un valor'}
                            error={ isNotvalid }
                        />

                        <FormControl>
                            <FormLabel>Estado:</FormLabel>
                            <RadioGroup 
                                row
                                value={ status }
                                onChange={ onStatusChanged }
                            >
                                {
                                    validStatus.map( option => ( 
                                        <FormControlLabel
                                            key={ option }
                                            value={ option }
                                            control={ <Radio/> }
                                            label={ capitalize(option)}
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                        
                        {/* RADIO */}

                    </CardContent>

                    <CardActions>
                        <Button
                            startIcon={ <SaveOutlinedIcon/> }
                            className='card-in'
                            style={{color:'#fff'}}
                            variant="contained"
                            fullWidth
                            onClick={ onSave }
                            disabled={ inputValue.length <= 0 }
                        >
                            Guardar
                        </Button>
                    </CardActions>
                </Card>

            </Grid>
            
        </Grid>

        <IconButton sx={{
            position:'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: 'red'

        }}
        onClick={onDelete}
        >
            <DeleteForeverOutlinedIcon/>
        </IconButton>

    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string };

    const entry = await dnEntries.getEntryById( id );

    if ( !entry ) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {
            entry
        }
    }
}

export default EntryPage;


