import React from 'react';
import Adminlogin from './components/Adminlogin';
import {Box, Container  } from '@mui/material';
import "./App.css";


function App() {
  return (
    <Container>
      <Box  sx={{
        display: 'flex',
        justifyContent: 'center',
        width: 500,
        height: 500,
      }}>
      <Adminlogin />
      </Box>
    </Container>
  )
}

export default App