import React from 'react'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { 
    ListItem, 
    List, 
    ListItemText, 
    ListItemIcon, 
    Grid, 
    Typography
  } from '@material-ui/core';



const Areas = ({locations, classes, serviceHeading}) => {

    return (
        <Grid item xs={12} sm={6}>
            <Typography variant='h2' className={classes.headings}>{serviceHeading}</Typography>
                <List component="nav" className={classes.list}
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
        </Grid>
    )
}

export default Areas
