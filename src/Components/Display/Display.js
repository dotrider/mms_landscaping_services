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
import { MDBMask, MDBView} from "mdbreact";



const useStyles = makeStyles((theme) => ({

    card: {
      minWidth: 340,
      // minHeight:235,
      margin: '1em .65em'
    },
    activeCard: {
      textAlign: 'center',
      color: 'black'
    },
    gridCont: {
      display: 'flex',
      justifyContent: 'center',
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
      textAlign: 'left',
      padding: '1em',
      textTransform: 'uppercase'
   },
    infoText: {
      textAlign:'right',
      padding: '5rem 2rem 0 2rem',
      color: 'white',
    }

  }));

  

const Display = ({data, sectionRef}) => {
  // console.log('display', data)
  const classes = useStyles();

 
    return (
      <section ref={sectionRef} >
                <Typography variant='h5' className='slideIn'>Our Services</Typography>
                  <Grid className={cx(classes.gridCont, 'slideIn')} container >
                      {data.map(({img, name, id}) => (
                        <Grid key={id} className={cx(classes.card)} xs={12} sm={3} item>
                              	<Link to={`/project/${id}`}>
                                        <CardActionArea className={classes.activeCard}
                                          classes={{
                                            root: classes.actionArea
                                            // focusHighlight: classes.focusHighlight
                                          }}
                                        >
        
                                              <MDBView rounded zoom >
                                                  <CardMedia 
                                                    component="img"
                                                    alt={name}
                                                    height="260"
                                                    image={img}
                                                    title="Contemplative Reptile"
                                                  />
                                              <MDBMask  overlay='black-light'>
                                                  <Typography variant='h5' className={classes.overlayText}>
                                                              {name}
                                                  </Typography> 
                                                  <Typography variant='subtitle1' className={cx(classes.infoText, 'animated fadeInRight')}>
                                                              brief info here...
                                                  </Typography>   
                                              </MDBMask>
                                              </MDBView>
                       
                                        </CardActionArea>
                              	</Link>
                        </Grid>
                      ))}
                  </Grid>   
    </section>      
    )
}

export default Display

