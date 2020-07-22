import React from 'react'
import { makeStyles, CardMedia, CardActionArea, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    card: {
      maxWidth: 325,
      margin: '.75em'
    },
    activeCard: {
      textAlign: 'center'
    },
    grid: {
      display: 'flex',
      // flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'space-between',
      overflow: 'hidden',
    }

  }));

  

const Display = ({data}) => {
  // console.log('display', data)
  const classes = useStyles();

    
    
    return (
              <Grid className={classes.grid} container xs={12} >
                  {data.map(({img, name}) => (
                      <Grid className={classes.card} item xs={12} sm={6}>
                          <CardActionArea className={classes.activeCard}>
                              <CardMedia
                                component="img"
                                alt={name}
                                height="225"
                                image={img}
                                // title="Contemplative Reptile"
                              />
                          </CardActionArea>
                      </Grid>
                  ))}
              </Grid>         
    )
}

export default Display

