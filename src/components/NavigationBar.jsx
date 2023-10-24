import { styled, Paper, Box, Grid, Link } from '@mui/material'
import React from 'react'

import LoginModal from '../features/login/LoginModal.js'


const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
}));


function NavigationBar() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item>
            <Link>Home</Link>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <Link>All Products</Link>
          </Item>
        </Grid>
        <Grid item xs={2}>
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
    </Box>
  );
}

export default NavigationBar;
