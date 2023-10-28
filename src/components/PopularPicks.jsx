import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import * as styles from './style';

function PopularPicks() {

  return (
    
      <Box 
          justifyContent="center"
          alignItems="center"
          style={styles.popPicItem}>
      

      <Grid 
      container
      justifyContent="center"
      alignItems={'center'}>
        
        <Grid container spacing={4} xs={6}>
              <Grid item xs={6}>
                    <img src="#"/>
                    <Typography>try</Typography>
              </Grid>
              <Grid item xs={6}>
                    <img src="#"/>
                    <Typography>try</Typography>
              </Grid>
              <Grid item xs={6}>
                    <img src="#"/>
                    <Typography>try</Typography>
              </Grid>
              <Grid item xs={6}>
                    <img src="#"/>
                    <Typography>try</Typography>
              </Grid>
      </Grid>
        <Grid 
          container
          direction="column"
          justifyContent=" flex-start "
          alignItems="center"
          
          xs={6}
          
          >
            <Grid item xs={2}>
              <Typography variant='h5'>
                Popular Items
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h3'>
                Hot Trending on this Week.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h6'>
                Various kinds of products that are trending the trend will be reset every week. Don't miss out on the best of items every week.
              </Typography> 
              <Button>button</Button>             
            </Grid>
        </Grid>
      </Grid>
      </Box>
    
      
    
  )
}

export default PopularPicks