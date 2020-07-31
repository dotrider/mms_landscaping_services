import React, { useEffect, useState } from 'react'
import { makeStyles, Paper, Grid, Typography, CardMedia, CardActionArea, Card, GridListTile } from '@material-ui/core';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 400
  },
  card: {
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));



const Project = (props) => {
console.log('props', props)

    const classes = useStyles();

    const [ project, setProject ] = useState({})
    
  console.log('project', project)

    useEffect(() => {
      axios.get(`/project/${props.match.params.id}`).then( res => {
        setProject(res.data)
      })
    },[])

    return (
      <Card className={classes.root} >
          <CardActionArea className={classes.card} >
              <CardMedia 
                      component="img"
                      alt="Contemplative Reptile"
                      height="300"
                      // image={img}
                      title="Contemplative Reptile"
              />
          </CardActionArea>
      </Card>   
        );
}

export default Project
