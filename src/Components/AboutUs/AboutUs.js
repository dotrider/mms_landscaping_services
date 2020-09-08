import React from 'react'
import { 
    Grid, 
    Typography
  } from '@material-ui/core';
import './AboutUs.css'

const AboutUs = ({classes, aboutUs}) => {


    const aboutPara = `What started as a side job in the early 2000's has expanded to MMS Landscaping services over the years and is continously been expaning to better service our community with high quality services. We strive for customer satisfaction by providing exceptional service to this day. `



    return (
        <Grid item xs={12} md={6} id='aboutUs'>
            <Typography variant='h2' className={classes.headings}>{aboutUs}</Typography>
                <div className='about-inner-container'>
                    <Typography  variant='h3'>
                        {aboutPara}
                    </Typography>
                </div>
        </Grid>
    )
}

export default AboutUs
