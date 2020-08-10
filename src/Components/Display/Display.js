import React from "react";
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { makeStyles, 
  CardMedia, 
  CardActionArea, 
  Grid, 
  Typography,
  Card
} from '@material-ui/core';
import './Display.css';
import { MDBMask, MDBView} from "mdbreact";



const useStyles = makeStyles((theme) => ({

    card: {
      maxWidth: 335,
      margin: '1em .85em'
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
      maxWidth: 1390
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
                        <Card key={id} className={cx(classes.card)} xs={12} sm={6}>
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
                                              height="240"
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
                        </Card>
                      ))}
                  </Grid>   
    </section>      
    )
}

export default Display

