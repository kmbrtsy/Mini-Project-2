import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import NavigationBar from './NavigationBar'
import SearchBar from './SearchBar'


function Header() {
  return (
      <Container>
      <Grid  container spacing={1} justifyContent='center'>
        <Grid  item xs={3}>
          <Typography sx={{padding: '0px 50px'}}>
            Kartcheck
          </Typography>
        </Grid> 
        <Grid item xs={6}>
          <NavigationBar />
         </Grid>
        <Grid item xs={3}>
          <SearchBar />
        </Grid>
    </Grid>
    </Container>
  )
}

export default Header