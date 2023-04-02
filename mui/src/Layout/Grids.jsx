import { Grid,Paper } from '@mui/material'
import React from 'react'

// you can give row and column spacing with the help of row and column prop

const Grids = () => {
  return (
    <Paper sx={{padding:"52px"}} elevation={8}>
      <Grid container rowSpacing={4} columnSpacing={{lg:3,md:4 ,sm:3,xs:2}}>
            <Grid item lg={4} md={4} sm={6} xs={6}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sint, autem consectetur id illo quisquam perspiciatis sequi hic labore. Beatae vitae culpa expedita doloribus dolorum qui minima non, voluptates quaerat?
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sint, autem consectetur id illo quisquam perspiciatis sequi hic labore. Beatae vitae culpa expedita doloribus dolorum qui minima non, voluptates quaerat?
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sint, autem consectetur id illo quisquam perspiciatis sequi hic labore. Beatae vitae culpa expedita doloribus dolorum qui minima non, voluptates quaerat?
            </Grid>
      
            <Grid item lg={4} md={4} sm={6} xs={6}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sint, autem consectetur id illo quisquam perspiciatis sequi hic labore. Beatae vitae culpa expedita doloribus dolorum qui minima non, voluptates quaerat?
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sint, autem consectetur id illo quisquam perspiciatis sequi hic labore. Beatae vitae culpa expedita doloribus dolorum qui minima non, voluptates quaerat?
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sint, autem consectetur id illo quisquam perspiciatis sequi hic labore. Beatae vitae culpa expedita doloribus dolorum qui minima non, voluptates quaerat?
            </Grid>
      </Grid>
      
    </Paper>
  )
}

export default Grids
