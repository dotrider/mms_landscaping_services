import React from 'react'
import { makeStyles, Paper, Grid, Typography, CardMedia, CardActionArea, Card, GridListTile } from '@material-ui/core';


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



const Project = ({project: {id, name, img, description}}) => {
    console.log('name', name)

    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.card}>
                <CardMedia 
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        image={img}
                        title="Contemplative Reptile"
            />
            </CardActionArea>
        </Card>    
        );
}

export default Project
