import React from "react";
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { makeStyles, 
  CardMedia, 
  CardActionArea, 
  Grid, 
  Typography
} from '@material-ui/core';
import './Display.css';



const useStyles = makeStyles((theme) => ({

    card: {
      maxWidth: 335,
      margin: '1em .75em',
    },
    activeCard: {
      textAlign: 'center'
    },
    gridCont: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'space-between',
      overflow: 'hidden',
      margin: '3.5em auto',
      maxWidth: 1390
    },
    actionArea: {
      "&:hover $focusHighlight": {
        opacity: 1,
      }
    },
    focusHighlight: {
    }

  }));

  

const Display = ({data, sectionRef}) => {
  // console.log('display', data)
  const classes = useStyles();


    
    return (
      <section ref={sectionRef} >
              <Typography variant='h5'>Our Services</Typography>
                <Grid className={cx(classes.gridCont)} container xs={12}>
                    {data.map(({img, name, id}) => (
                        <Grid className={cx(classes.card,'fadeIn')} item xs={12} sm={6}>
                            <Link to={`/project/${id}`}>
                            	<CardActionArea className={classes.activeCard}
                                classes={{
                                root: classes.actionArea,
                                focusHighlight: classes.focusHighlight
                              }}
                              >
                            	    <CardMedia 
                            	      component="img"
                            	      alt={name}
                            	      height="240"
                            	      image={img}
                            	      // title="Contemplative Reptile"
                            	    />
                            	</CardActionArea>
                            </Link>
                        </Grid>
                    ))}
                </Grid>   
    </section>      
    )
}

export default Display

