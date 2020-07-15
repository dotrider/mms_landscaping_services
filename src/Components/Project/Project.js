import React from 'react'
import { makeStyles, Paper, Grid, Typography, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Project = ({project: {id, name, img, description}}) => {
    console.log('name', name)

    const classes = useStyles();

    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
          </Grid>
        </React.Fragment>
      );
    }


    return (
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
            </Grid>
          </div>
        );
}

export default Project
