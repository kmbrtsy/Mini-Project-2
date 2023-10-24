import { Grid } from '@mui/material'
import React from 'react'
import NavigationBar from './NavigationBar'
import SearchBar from './SearchBar'


function Header() {
  return (
    
      <Grid  container spacing={1} >
        <Grid  item xs={3}>
          <img src='#' />
        </Grid>
        <Grid item xs={6}>
          <NavigationBar />
         </Grid>
        <Grid item xs={3}>
          <SearchBar />
        </Grid>
    </Grid>
    
  )
}

export default Header