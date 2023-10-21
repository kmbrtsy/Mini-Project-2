import { Container } from '@mui/material'
import React from 'react'

function NavigationBar() {
  return (
    <>
    <Container  sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100vh',
          height: 'auto',
         }}>
    
    <a href="#"> Home </a>
    <a href="#"> Categories </a>
    <a href="#"> All Products </a>
    <a href="#"> Acount </a>
    <a href="#"> Cart </a>
         
    </Container>

    </>
  )
}

export default NavigationBar