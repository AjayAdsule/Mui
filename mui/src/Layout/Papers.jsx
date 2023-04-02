import { Box, Paper } from '@mui/material'
import React from 'react'

const Papers = () => {
  return (
    <>
     <Box sx={{
      display: 'flex',
      height:400,
      width: 500,
      border:"2px solid red",
      marginLeft:"22rem"
     }}>
      <Paper direction="row" elevation={16}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime numquam vitae rem molestiae nisi modi porro nemo quas pariatur.
      </Paper>
      
      </Box> 
    </>
  )
}

export default Papers
