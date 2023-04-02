import React from 'react'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';


const Forms = () => {
  return (
    <>
    <Stack spacing={4} 
    lg={4}
    alignItems="center"
    direction="row"
    >
        <TextField id="outlined-basic" label="Name" variant="outlined" /> 
        <TextField id="filled-basic" label="Age" variant="filled" /> 
        <TextField id="outlined-basic" label="Email" variant="standard" /> 
    </Stack>
    </>
  )
}

export default Forms
