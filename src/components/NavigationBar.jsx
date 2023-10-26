import { styled, Paper, Container, Grid, Link } from '@mui/material'
import React from 'react'

import LoginModal from '../features/login/LoginModal.js'


const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
}));


function NavigationBar() {
  return (
    
      <Grid container spacing={1} sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Grid item xs={3}>
          <Item>
            <Link>Home</Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link>All Products</Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link>
              Category
            </Link>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <LoginModal />
          </Item>
        </Grid>
      </Grid>
    
  );
}

export default NavigationBar;
