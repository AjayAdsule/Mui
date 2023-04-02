import React from 'react'
import Stack from '@mui/material/Stack';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Button from '@mui/material/Button';
const Buton = () => {
  return (
    <div>
        <Stack spacing={2}
        justifyContent="center"
        alignItems='center'
        direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined" color="error">
            Error
        </Button>
        {/* <Button variant='contained' startIcon={<LoginOutlinedIcon/>}>login</Button> */}
        {/* <Button variant='contained' startIcon={<LogoutRoundedIcon/>}>logout</Button> */}
        </Stack>
    </div>
  )
}

export default Buton
