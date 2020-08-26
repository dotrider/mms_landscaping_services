import React,{ useState } from 'react'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { 
    ListItem, 
    List, 
    ListItemText, 
    ListItemIcon, 
  } from '@material-ui/core';


const ServiceAreas = () => {
        const [locations, setLocations] = useState(['Glendale', 'Peoria', 'Sun City', 'Surprise', 'El Mirage', 'Avondale', 'Litchfield', 'Goodyear', 'Tolleson', 'Buckeye', 'Scottsdale'])

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
                                            <ListItemText primary={city} variant='h3'/>
                                        </ListItem>)
                                  }
                              </List>
        </div>
    )
}

export default ServiceAreas