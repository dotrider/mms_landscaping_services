import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Button, Grid, CardMedia} from '@material-ui/core'
import './SiteCarousel.css'

const SiteCarousel = ({data}) => {

        // const [items, setItems] = useState([
        //     {
        //         name: "Random Test #1",
        //         description: "Probably the most random thing you have ever seen!",
        //         imag: 'https://images.unsplash.com/photo-1532043772213-09a6cec77cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        //     },
        //     {
        //         name: "Random Test #2",
        //         description: "Hello World!",
        //         imag: 'https://images.unsplash.com/photo-1489402954857-207e3f591c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        //     }
        // ])

        return (
            <Grid>
                 <Carousel>
                    {
                        data.map( ({img, description, name}, i) => <CardMedia 
                            className='card-media' key={i}  
                            component="image"
                            alt={name}
                            height="350"
                            image={img}
                            title="Contemplative Reptile"
                        >
                            <h2>{name}</h2>
                            <p>{description}</p>
            
                        <Button className="CheckButton">
                            HELLLLOOO!
                        </Button>
                    </CardMedia>
                    )}
                </Carousel>
            </Grid>
        )
    }


export default SiteCarousel
