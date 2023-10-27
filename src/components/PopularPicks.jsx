import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import * as styles from './style';

function PopularPicks() {

  return (
    
      <Box style={styles.popPickStyle}>
      <Typography variant='h5'>
        Popular Picks
      </Typography>

      <Grid container spacing={1} style={styles.flexJustCenter}> 
        <Grid item xs={2}>1</Grid>
        <Grid item xs={2}>2</Grid>
        <Grid item xs={2}>3</Grid>
        <Grid item xs={2}>4</Grid>
      </Grid>
      </Box>
    
  )
}

export default PopularPicks