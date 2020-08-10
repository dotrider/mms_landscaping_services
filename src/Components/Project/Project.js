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
  IconButton ,
  Card
} from '@material-ui/core';
import './Project.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: 400
  },
  card: {
    color: theme.palette.text.secondary,
  },
  grid: {
    marginTop: '2em',
    padding: '1.5em'
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

console.log(props)

    const classes = useStyles();

    const [ project, setProject ] = useState({})


    useEffect(() => {
      //window obj Reders top of the page
        window.scrollTo(0, 0)
       const project = data.find(curr => curr.id === +props.match.params.id)
          setProject(project)
    },[props.match.params.id])

 

    const { img, name } = project
    return (
      <section className='project-cont'>
                <Grid container xs={12} className={classes.grid}>
                	<Grid xs={12} sm={6} item className='animated fadeInLeft'>
                		<CardMedia
                		        className={classes.card}
                		        component="img"
                		        alt={name}
                		        height="300"
                		        image={img}
                		/>
                	</Grid>
                	 <Grid item xs={12} sm={6} className='animated fadeInRight'>
                     <List component="nav" 
                     className={classes.list}
                     >
                     	    <ListItem>
                     	        <ListItemIcon>
                     	            <CheckRoundedIcon color="primary" fontSize='medium' />
                     	        </ListItemIcon>
                     	        <ListItemText primary="Ex 1" />
                     	    </ListItem>
                     	    <ListItem>
                     	        <ListItemIcon>
                     	            <CheckRoundedIcon color="primary" fontSize='medium'/>
                     	        </ListItemIcon>
                     	        <ListItemText primary="Ex 2" />
                     	    </ListItem>
                     	  </List>
                   </Grid>
                	<Grid item xs={12} className={classes.info}>
                    <Typography>Labore deserunt aliquip ad magna sint minim anim ex non cillum pariatur aute ea ipsum. Mollit esse magna Lorem labore reprehenderit labore eiusmod tempor. Minim esse anim sit excepteur commodo aute consectetur ea ad laborum. Ad tempor ipsum magna commodo et aliqua eiusmod sint veniam elit. Velit non et exercitation laboris adipisicing consequat irure ullamco labore veniam est dolore occaecat.</Typography>
                  </Grid>
                  {/* <Grid item xs={12} className={classes.backBtn}> */}
                      <IconButton onClick={props.history.goBack} className={classes.backBtn}>
                          <KeyboardBackspaceRoundedIcon edge='end' />
                      </IconButton>
                  {/* </Grid> */}
                </Grid>
      </section>
        );
}

export default Project
