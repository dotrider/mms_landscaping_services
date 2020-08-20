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
import './Project.css';
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
    paddingTop: '3em'
  },
  backBtn: {
    margin: '2em auto'
  }
}));



const Project = (props) => {



    const classes = useStyles();

    const [ project, setProject ] = useState({})


    useEffect(() => {
      //window obj Reders top of the page
        window.scrollTo(0, 0)
      
       const project = data.find(curr => curr.id === +props.match.params.id)
          setProject(project)
    },[props.match.params.id])

 

    const { img, name, details } = project

    return (
      <section className='project-cont'>
                <Grid container  className={classes.grid}>
                		<Grid sm={6} item className='animated fadeInLeft'>
                	{/* <Fade left> */}
                			<CardMedia
                			        className={classes.card}
                			        component="img"
                			        alt={name}
                			        height="300"
                			        image={img}
                			/>
                	{/* </Fade> */}
                		</Grid>
                        <Grid item xs={12} sm={6} className='animated fadeInRight'>               
                              <Typography variant='h2'
                                className={classes.list}
                              >
                                  {name}
                              </Typography>      
                      {/* <Fade right> */}
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
                                            <ListItemText primary={detail} color='textSecondary'/>
                                        </ListItem>)
                                    : null
                                  }
                              </List>
                      {/* </Fade> */}
                        </Grid>
                	<Grid item xs={12} className={classes.info}>
                      <Typography color='textSecondary'>
                          Labore deserunt aliquip ad magna sint minim anim ex non cillum pariatur aute ea ipsum. 
                          Mollit esse magna Lorem labore reprehenderit labore eiusmod tempor. Minim esse anim sit excepteur commodo aute consectetur ea ad laborum. 
                          Ad tempor ipsum magna commodo et aliqua eiusmod sint veniam elit. 
                          Velit non et exercitation laboris adipisicing consequat irure ullamco labore veniam est dolore occaecat.
                      </Typography>
                  </Grid>
                      <IconButton onClick={props.history.goBack} 
                          color="secondary"
                          className={classes.backBtn}
                          fontSize='large'
                          >
                          <KeyboardBackspaceRoundedIcon edge='end'/>
                      </IconButton>
                </Grid>
      </section>
        );
}

export default Project
