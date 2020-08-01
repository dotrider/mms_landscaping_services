import React, { useEffect, useState } from 'react'
import { makeStyles, CardMedia, Paper, Card } from '@material-ui/core';
import data from '../../data'
import './Project.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 400
  },
  card: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }
}));



const Project = (props) => {

    const classes = useStyles();

    const [ project, setProject ] = useState({})


    useEffect(() => {
       const project = data.find(curr => curr.id === +props.match.params.id)
          setProject(project)
    },[])


    const { img, name } = project
    return (
      <section className='project-cont'>
        <Paper className={classes.root} >
                <CardMedia 
                        className={classes.card}
                        component="img"
                        alt={name}
                        height="300"
                        image={img}
                />
        </Paper>   
      </section>
        );
}

export default Project
