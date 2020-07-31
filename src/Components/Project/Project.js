import React, { useEffect, useState } from 'react'
import { makeStyles, CardMedia, CardActionArea, Card } from '@material-ui/core';
import data from '../../data'



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
      <Card className={classes.root} >
          <CardActionArea className={classes.card} >
              <CardMedia 
                      component="img"
                      alt={name}
                      height="300"
                      image={img}
              />
          </CardActionArea>
      </Card>   
        );
}

export default Project
