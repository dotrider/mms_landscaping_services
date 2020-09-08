import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {CardMedia} from '@material-ui/core'
import './SiteCarousel.css'
import { MDBMask, MDBView} from "mdbreact";

const SiteCarousel = ({data}) => {

        return (
            <>
                 <Carousel 
                    interval={2000}
                 >
                    {
                        data.filter((e, i )=> i % 2 === 0).map(({img, description, name, id}, i) => <MDBView key={id}>
                            <CardMedia 
                                className='card-media' 
                                // component="SiteCarousel"
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
            </>                    
        )
    }


export default SiteCarousel
