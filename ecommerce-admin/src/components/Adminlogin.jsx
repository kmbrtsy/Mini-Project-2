import React from 'react';
import {  Button,  TextField, FormControlLabel, Link, Grid, Box, Typography, Container  } from '@mui/material';



function Adminlogin() {
  return (
 <Container component={"main"} maxWidth={"xs"}>
    <Box>
    <Typography 
                component="h1" variant="h5" 
                sx={{ 
                  justifyContent: 'center',
                  }}>
             Admin Sign in
    </Typography>
    </Box>
   <Box>
    
    <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Admin Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
    <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
     <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3,
                    mb: 2,
                    p: 2,
                    bgcolor: 'success.main' }}
            >
              Log in
     </Button>
  </Box>
 </Container>
  )
}

export default Adminlogin