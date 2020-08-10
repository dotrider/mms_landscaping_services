import React from "react";
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { makeStyles, 
  CardMedia, 
  CardActionArea, 
  Grid, 
  Typography,
  Card,
  Box
} from '@material-ui/core';
import './Display.css';
import { MDBMask, MDBView} from "mdbreact";



const useStyles = makeStyles((theme) => ({

    card: {
      minWidth: 335,
      // minHeight:235,
      margin: '1em .75em'
    },
    activeCard: {
      textAlign: 'center',
      color: 'black'
    },
    gridCont: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'space-evenly',
      overflow: 'hidden',
      margin: '3.5em auto',
      // maxWidth: 1390
      maxWidth: 1640
    },
    actionArea: {
      "&:hover $focusHighlight": {
        opacity: 1,
      }
    },
    focusHighlight: {
    },
    overlayText: {
      color: 'white',
      // backgroundColor: 'white'
   }

  }));

  

const Display = ({data, sectionRef}) => {
  // console.log('display', data)
  const classes = useStyles();


    
    return (
      <section ref={sectionRef}>
                <Typography variant='h5' className='slideIn'>Our Services</Typography>
                  <Grid className={cx(classes.gridCont, 'slideIn')} container>
                      {data.map(({img, name, id}) => (
                        <Grid key={id} className={cx(classes.card)} xs={12} sm={3} item>
                              	<Link to={`/project/${id}`}>
                                    <MDBView hover zoom>
                                        <CardActionArea className={classes.activeCard}
                                          classes={{
                                            root: classes.actionArea,
                                            // focusHighlight: classes.focusHighlight
                                          }}
                                        >
                                            <CardMedia                                  
                                              component="img"
                                              alt={name}
                                              height="260"
                                              image={img}
                                              title="Contemplative Reptile"
                                            />
                                                       
                                        </CardActionArea>
                                            <MDBMask className="flex-center" overlay="black-strong">
                                                <Typography className={classes.overlayText}>
                                                            {name}
                                                </Typography>  
                                            </MDBMask>
                                      </MDBView>
                              	</Link>
                        </Grid>
                      ))}
                  </Grid>   
    </section>      
    )
}

export default Display

