import React,{ useState, useEffect } from 'react'
import locationsData from '../../servicedata'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { 
    ListItem, 
    List, 
    ListItemText, 
    ListItemIcon, 
  } from '@material-ui/core';


const ServiceAreas = () => {
        const [locations, setLocations] = useState([])

            console.log(locations, 'locations')

    useEffect(() => {
        const location = []
        //Converting locationsData array into a two dimentional array to then map and render a two list column
        locationsData.forEach((city, i) => {
            if(i % 2){
                location.push([locationsData[i -1], city])
            }else if(i === locationsData.length -1 && i % 3 == 1){
                location.push([city])
            }
        })
        setLocations(location)
    }, [])


    return (
        <div style={{backgroundColor: '#222326', color:'white'}}>
            <List component="nav" 
                    >    
                    { 
                        locations.map((city, i) => 
                            <ListItem key={i}>
                                <ListItemIcon>
                                    <CheckRoundedIcon color="secondary" fontSize='large'/>
                                </ListItemIcon>
                                <ListItemText primary={city[0]} variant='h3'/>
                                    {city[1]?
                                        <>
                                            <ListItemIcon>
                                                <CheckRoundedIcon color="secondary" fontSize='large'/>
                                            </ListItemIcon>
                                            <ListItemText primary={city[1]} variant='h3'/> 
                                        </>
                                        : 
                                        null
                                    }
                            </ListItem>
                      )
                    }
            </List>
        </div>
    )
}

export default ServiceAreas