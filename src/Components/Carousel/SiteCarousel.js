import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Button, Grid, CardMedia} from '@material-ui/core'
import './SiteCarousel.css'

const SiteCarousel = ({data}) => {

        return (
            <Grid>
                 <Carousel 
                    interval={2000}
                 >
                    {
                        data.map(({img, description, name, id}, i) => <CardMedia 
                            key={id}
                            className='card-media' 
                            component="img"
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
                    )}
                </Carousel>
            </Grid>
        )
    }


export default SiteCarousel
