import React, { useState } from 'react'
import {Container, Typography, CssBaseline, Grid, makeStyles, GridListTile, ListSubheader, GridList, CardMedia, CardActionArea, Card} from '@material-ui/core';
import data from '../../data'
import Project from '../Project/Project';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Display = () => {

    const classes = useStyles();
    const [ projects, setProjects ] = useState(data)
    
    console.log('display', projects)
    const mappedProjects = projects.map(project => <Project key={project.img} project={project}/>)
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>
                     {mappedProjects}
            </GridList>
    </div>
    )
}

export default Display

