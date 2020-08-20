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
import Fade from 'react-reveal/Fade';



const useStyles = makeStyles((theme) => ({

    card: {
      padding: '.75em'
    },

    activeCard: {
      textAlign: 'center',
      color: 'black',    
    },
    
    gridCont: {
      margin: '3.5em auto',
      width: '95%'
    },

    serviceText: {
      color: '#ffffff',
      textAlign: 'left',
      padding: '1em',
      textTransform: 'uppercase'
   },
    infoText: {
      textAlign:'right',
      padding: '1rem',
      margin: '1em',
      color: '#ffffff',
      position: 'absolute',
      right: '0',
      bottom: '0',
      borderRight: '.10em solid #ffffff',
      maxWidth: '12em'
    }

  }));

  

const Display = ({data, sectionRef}) => {
  // console.log('display', data)
  const classes = useStyles();

 
    return (
        <section ref={sectionRef}>
            <Typography variant='h2' className='slideIn'>Our Services</Typography>
                <Grid className={cx(classes.gridCont, 'slideIn')} container justify='center' >
                    {data.map(({img, name, id}) => (
                      <Grid key={id} className={cx(classes.card)} item xs={12} sm={6} md={4} >
                              <Link to={`/project/${id}`}>
                                      <CardActionArea 
                                        className={classes.activeCard}
                                      >
      
                                            <MDBView rounded zoom >
                                                <CardMedia 
                                                  component="img"
                                                  alt={name}
                                                  // height="275"
                                                  image={img}
                                                  title="Contemplative Reptile"
                                                />
                                                  <MDBMask overlay='black-light'>
                                                      <Typography variant='h3' className={classes.serviceText}>
                                                                  {name}
                                                      </Typography> 
                                                        <Typography variant='subtitle1' className={cx(classes.infoText)}>
                                                            <Fade right>
                                                                Find out more...
                                                            </Fade>
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

