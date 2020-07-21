import React, { useState } from 'react'
import { makeStyles, GridListTile, ListSubheader, GridList, CardMedia, CardActionArea, Card, Grid, List} from '@material-ui/core';
import data from '../../data'
import Project from '../Project/Project';


const useStyles = makeStyles((theme) => ({
    // control: {
    //   padding: theme.spacing(1)
    // },
    card: {
      maxWidth: 350
    },
    activeCard: {
      textAlign: 'center'
      // color: theme.palette.text.secondary,
      // width: 500,
      // height: 250,
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      overflow: 'hidden',
      // height: "80vh"
    }

  }));

  

const Display = () => {

    const classes = useStyles();
    
    const [ projects, setProjects ] = useState(data)
    
    return (
        // <div style={{backgroundColor: 'blue',  height: '80vh'}} >
        //     {/* <GridListTile key="Subheader"  style={{ height: 'auto' }}>
        //         <ListSubheader component="div">December</ListSubheader>
        //     </GridListTile> */}
                    <Grid style={{backgroundColor: '#FFFFFF'}} className={classes.grid} container xs={12} spacing={2}>
                  {projects.map(({img}) => (
                  <Grid className={classes.card} item xs={12} sm={6}>
                  <CardActionArea className={classes.activeCard} >
                  <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={img}
                  title="Contemplative Reptile"
                  />
                  </CardActionArea>
                  </Grid>
                  ))}
                  </Grid>         
        // </div>
    )
}

export default Display

