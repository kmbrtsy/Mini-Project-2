import React from 'react'
import { Avatar, Box, Container, Grid } from '@mui/material'
import * as styles from '../../components/style'
import AdminNavigations from './AdminNavigations'


function Dashboard() {
  return (
    <Grid container justifyContent='center' alignItems='center' spacing={1} 
    sx={{
      height:'100vh',
    }}>
      
     <Grid
              item xs={3}
              container
              direction="column"
              justifyContent="space-evenly  "
              alignItems="stretch"
              sx={{
                backgroundColor:'#39A848',
                height:'100vh'}}
            >
            <Grid>Admin Dashboard</Grid>
            <AdminNavigations/>
            <Grid>Logout</Grid>
      </Grid>
      <Grid item xs={9} 
            sx={{
                height: '100vh'
                }}>

      </Grid>
    </Grid>
  )
}

export default Dashboard