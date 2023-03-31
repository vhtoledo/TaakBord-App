import { Card, Grid, CardHeader, CardContent, TextField, CardActions, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, capitalize, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Layout } from '../../components/layouts/Layout';
import { EntryStatus } from '@/interfaces';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

const EntryPage = () => {
  return (
    <Layout title='...................'>
        <Grid
            container
            justifyContent='center'
            sx={{ marginTop: 2 }}
        >
            <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                <Card>
                    <CardHeader
                        title="Entrada:"
                        subheader={`Creada hace: ....... minutos`}
                    />

                    <CardContent>
                        <TextField
                            sx={{ marginTop: 2, marginBottom: 1}}
                            fullWidth
                            placeholder='Nueva Entrada'
                            autoFocus
                            multiline
                            label="Nueva Entrada"
                        />

                        <FormControl>
                            <FormLabel>Estado:</FormLabel>
                            <RadioGroup 
                                row
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
                            variant="contained"
                            fullWidth
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
        
        >
            <DeleteForeverOutlinedIcon/>
        </IconButton>

    </Layout>
  )
}

export default EntryPage;

