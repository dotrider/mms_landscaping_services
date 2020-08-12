import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Button, Grid, CardMedia, Typography} from '@material-ui/core'
import './SiteCarousel.css'
import { MDBMask, MDBView} from "mdbreact";

const SiteCarousel = ({data}) => {

        return (
            <Grid>
                 <Carousel 
                    interval={2000}
                 >
                    {
                        data.map(({img, description, name, id}, i) => <MDBView>
                            <CardMedia 
                                key={id}
                                className='card-media' 
                                component="image"
                                alt={name}
                                height="350"
                                image={img}
                                title="Contemplative Reptile"
                            >
                                    {/* <h2>{name}</h2> */}
                                    {/* <p>{description}</p> */}
                    
                                {/* <Button className="CheckButton">
                                    HELLLLOOO!
                                </Button> */}
                            </CardMedia>
                            <MDBMask overlay='black-light'>
                            </MDBMask>
                        </MDBView>
                       
                    )}
                </Carousel>
            </Grid>
        )
    }


export default SiteCarousel
