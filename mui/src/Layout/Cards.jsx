import { Box, Button, Card, CardActions, CardContent, Typography,CardMedia } from '@mui/material'
import React from 'react'

const Cards = () => {
  return (
    <>
    <Box width="350px">
     <Card>
        <CardMedia 
        component="img"
        height='200'
        image="https://source.unsplash.com/random"
        alt="unsplash image"
        />
        <CardContent>
            <Typography variant='h5' component="div">
                    Hello Card 
            </Typography>
            <Typography variant='body2' color="text.secondary">
            React
                The library for web and native user interface
                Learn React
            </Typography>
        </CardContent>   
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Like</Button>
        </CardActions>
     </Card> 
    </Box>
    </>
  )
}

export default Cards
