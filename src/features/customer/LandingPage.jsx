
import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import { Grid, Typography } from '@mui/material'

function LandingPage() {
  return (
    
    <>
      <NavigationBar />
      <Grid container spacing={2} columns={16}>
        <Grid xs={9}>
          <Typography>Featured item 1</Typography>
        </Grid>
        <Grid xs={7}>
          <Typography>featured photo</Typography>
        </Grid>
        </Grid>
    </> 
  )
}

export default LandingPage