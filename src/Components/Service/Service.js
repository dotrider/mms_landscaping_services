import React, { useEffect, useState } from 'react';
import data from '../../data';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import { 
  makeStyles, 
  CardMedia, 
  ListItem, 
  List, 
  Typography, 
  ListItemText, 
  ListItemIcon, 
  Grid, 
  IconButton
} from '@material-ui/core';
import './Service.css';
// import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    color: theme.palette.text.secondary,
  },
  grid: {
    marginTop: '4em',
    padding: '.25em'
  },
  list: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2em'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '5em'
    }
  },
  info: {
    padding: '3em 1em'
  },
  backBtn: {
    margin: '2em auto'
  }
}));



const Service = (props) => {
  console.log('service', props)


    const classes = useStyles();

    const [ project, setProject ] = useState({})


    useEffect(() => {
      //window obj Reders top of the page
        window.scrollTo(0, 0)
      
       const project = data.find(curr => curr.id === +props.match.params.id)
          setProject(project)
    },[props.match.params.id])

 

    const { img, name, details, description } = project

    return (
      <section className='project-cont'>
                <Grid container  className={classes.grid}>
                      <Grid sm={6} item className='animated fadeInLeft'>
                          <CardMedia
                              className={classes.card}
                              component="img"
                              alt={name}
                              height="300"
                              image={img}
                          />
                      </Grid>
                          <Grid item xs={12} sm={6} className='animated fadeInRight'>               
                                <Typography variant='h2'
                                  className={classes.list}
                                >
                                    {name}
                                </Typography>      
                                    <List component="nav" 
                                      className={classes.list}
                                    >    
                                      { 
                                        details? 
                                            details.map((detail, i) => 
                                              <ListItem key={i}>
                                                  <ListItemIcon>
                                                      <CheckRoundedIcon color="secondary" fontSize='large'/>
                                                  </ListItemIcon>
                                                  <ListItemText primary={detail} variant='h3'/>
                                              </ListItem>)
                                          : null
                                        }
                                  </List>
                          </Grid>
                          <Grid item xs={12} className={classes.info}>
                                <Typography variant='h3' style={{textAlign:'justify'}}>
                                    {description}
                                </Typography>
                          </Grid>
                          <IconButton onClick={props.history.goBack} 
                              color="secondary"
                              className={classes.backBtn}
                          >
                              <KeyboardBackspaceRoundedIcon 
                                edge='end'
                                fontSize='large'
                                />
                          </IconButton>
                </Grid>
      </section>
        );
}

export default Service
