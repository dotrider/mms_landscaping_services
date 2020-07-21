import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'

const SiteCarousel = () => {
    {
        var items = [
            {
                name: "Random Test #1",
                description: "Probably the most random thing you have ever seen!"
            },
            {
                name: "Random Test #2",
                description: "Hello World!"
            }
        ]
     
        return (
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }
     
    function Item(props)
    {
        return (
            <Paper>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
     
                <Button className="CheckButton">
                    HELLLLOOO!
                </Button>
            </Paper>
        )
    }
}

export default SiteCarousel
