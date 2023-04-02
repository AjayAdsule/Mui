
import { Box, Stack } from '@mui/material'
import React from 'react'

const Boxs = () => {
  return (
    <>
    <Stack direction='row' spacing={2}>
      {/* with the help of sx you can your own css property */}
      <Box sx={{
        display: 'flex',
        width:100,
        height:200,
        backgroundColor:"primary.dark",
      }}>
        
      </Box>
      <Box sx={{
        display: 'flex',
        width:100,
        height:200,
        backgroundColor:"primary.dark",
      }}>
        
      </Box>
      <Box sx={{
        display: 'flex',
        width:100,
        height:200,
        backgroundColor:"primary.dark",
      }}>
        
      </Box>
      <Box sx={{
        display: 'flex',
        width:100,
        height:200,
        backgroundColor:"primary.dark",
      }}>
        
      </Box>
        </Stack>
    </>
  )
}

export default Boxs
