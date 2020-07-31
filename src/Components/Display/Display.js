import React from "react";
import { makeStyles, CardMedia, CardActionArea, Grid} from '@material-ui/core';
import './Display.css'
import cx from 'classnames'

const useStyles = makeStyles((theme) => ({

    card: {
      maxWidth: 420,
      margin: '1em .75em'
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
      margin: '3.5em auto',
      maxWidth: 1390
    }

  }));

  

const Display = ({data, sectionRef}) => {
  // console.log('display', data)
  const classes = useStyles();



    
    return (
      <div ref={sectionRef}>
                <Grid className={cx(classes.grid, 'fadeIn')} container xs={12}>
                    {data.map(({img, name}) => (
                        <Grid className={classes.card} item xs={12} sm={6}>
                            <CardActionArea className={classes.activeCard}>
                                <CardMedia 
                                  component="img"
                                  alt={name}
                                  height="275"
                                  image={img}
                                  // title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>   
    </div>      
    )
}

export default Display

