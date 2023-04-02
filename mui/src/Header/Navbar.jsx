import { AppBar,Toolbar,IconButton,Typography,Stack,Button } from '@mui/material'
import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Navbar = () => {
  return (
    <div>
      <AppBar position='static' >
            <Toolbar >
                <IconButton aria-label='logo' color='inherit' size='large' edge="start">
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography varient="h6" component="div" sx={{flexGrow:1}}>
                    PokeMon
                </Typography>
                <Stack direction="row" spacing={5}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Contact</Button>
                </Stack>
            </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
