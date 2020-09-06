import React from 'react'
import { 
    Grid, 
    Typography
  } from '@material-ui/core';

const AboutUs = ({classes, aboutUs}) => {
    return (
        <Grid item xs={12} md={6} id='aboutUs'>
            <Typography variant='h2' className={classes.headings}>{aboutUs}</Typography>

        </Grid>
    )
}

export default AboutUs
