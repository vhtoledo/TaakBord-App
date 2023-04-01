import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { Layout } from '../components/layouts'
import { EntryList, NewEntry } from '@/components/ui'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <Layout title='Home - TaakBord'>
      
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}} className="card-cont">
            <CardHeader title="Pendientes" className='card-header'/>


              {/* Agregar una nueva entrada */}
              {/* Listado de las entradas */}
              <NewEntry/>
              <EntryList status='pending'/>

          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}} className="card-cont" >
            <CardHeader title="En Progreso" className='card-header'/>
            <EntryList status='in-progress'/>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}} className="card-cont">
            <CardHeader title="Completadas" className='card-header'/>
            <EntryList status='finished'/>
          </Card>
        </Grid>
        
        
      </Grid>
      
    </Layout>
  )
}

export default HomePage;
