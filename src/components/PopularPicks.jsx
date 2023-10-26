import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'


function PopularPicks() {
  const popPickStyle={
    height: '25vh',
    backgroundColor: '#39A848',
    margin: '0'
  };
  return (
    
      <Box style={popPickStyle}>
      <Typography variant='h5'>
        Popular Picks
      </Typography>

      <Grid container spacing={1} sx={{
        display: 'flex',
        alignItems: 'center'
      }}> 
        <Grid item xs={2}>1</Grid>
        <Grid item xs={2}>2</Grid>
        <Grid item xs={2}>3</Grid>
        <Grid item xs={2}>4</Grid>
      </Grid>
      </Box>
    
  )
}

export default PopularPicks