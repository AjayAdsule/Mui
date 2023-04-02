import {
     Box, 
    Card,
    CardContent, 
    Grid, 
    Typography,
    CardMedia,
} from '@mui/material'
import React from 'react'

const Pra = () => {
  return (
    <>
     {/* <Box rowSpacing="2"> */}
        <Grid container columnSpacing={{md:"4",sm:"6",xs:"4"}} rowSpacing={{md:"4",sm:"4",xs:"4" }}>
            <Grid item md="3" sm="6" xs="6">
                <Card>
                    <CardMedia 
                    component="img"
                    height="200"
                    image="https://source.unsplash.com/random"
                    alt="unsplash image"
                    />
                    <CardContent>
                        <Typography variant='h5' component="div">
                            I am practise Mui
                        </Typography>
                        <Typography variant='body2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error fugiat unde quam quae provident aliquam, inventore porro officiis tenetur animi nulla quos iure. Similique, voluptate tenetur modi illum voluptatem architecto numquam inventore, consectetur deserunt beatae nobis blanditiis aut? Suscipit?
                        </Typography>
                    </CardContent>
                </Card>    
            </Grid>    
            <Grid item md="3" sm="6" xs="6">
                <Card>
                    <CardMedia 
                    component="img"
                    height="200"
                    image="https://source.unsplash.com/random"
                    alt="unsplash image"
                    />
                    <CardContent>
                        <Typography variant='h5' component="div">
                            I am practise Mui
                        </Typography>
                        <Typography variant='body2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error fugiat unde quam quae provident aliquam, inventore porro officiis tenetur animi nulla quos iure. Similique, voluptate tenetur modi illum voluptatem architecto numquam inventore, consectetur deserunt beatae nobis blanditiis aut? Suscipit?
                        </Typography>
                    </CardContent>
                </Card>    
            </Grid>    
            <Grid item md="3"sm="6" xs="6">
                <Card>
                    <CardMedia 
                    component="img"
                    height="200"
                    image="https://source.unsplash.com/random"
                    alt="unsplash image"
                    />
                    <CardContent>
                        <Typography variant='h5' component="div">
                            I am practise Mui
                        </Typography>
                        <Typography variant='body2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error fugiat unde quam quae provident aliquam, inventore porro officiis tenetur animi nulla quos iure. Similique, voluptate tenetur modi illum voluptatem architecto numquam inventore, consectetur deserunt beatae nobis blanditiis aut? Suscipit?
                        </Typography>
                    </CardContent>
                </Card>    
            </Grid>    
            <Grid item md="3"sm="6" xs="6">
                <Card>
                    <CardMedia 
                    component="img"
                    height="200"
                    image="https://source.unsplash.com/random"
                    alt="unsplash image"
                    />
                    <CardContent>
                        <Typography variant='h5' component="div">
                            I am practise Mui
                        </Typography>
                        <Typography variant='body2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error fugiat unde quam quae provident aliquam, inventore porro officiis tenetur animi nulla quos iure. Similique, voluptate tenetur modi illum voluptatem architecto numquam inventore, consectetur deserunt beatae nobis blanditiis aut? Suscipit?
                        </Typography>
                    </CardContent>
                </Card>    
            </Grid>    
        </Grid>    
    {/* </Box>  */}
    </>
  )
}

export default Pra
