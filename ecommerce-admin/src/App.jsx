import React from 'react';
import {Box, Container  } from '@mui/material';
import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router/Index';



const router = createBrowserRouter(routes)

function App() {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box fullWidth  >
      <RouterProvider router={router} />
      </Box>
    </Container>
  )
}

export default App