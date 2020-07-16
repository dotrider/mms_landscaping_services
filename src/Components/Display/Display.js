import React, { useState } from 'react'
import { makeStyles, GridListTile, ListSubheader, GridList, CardMedia, CardActionArea, Card, Grid, List} from '@material-ui/core';
import data from '../../data'
import Project from '../Project/Project';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
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
      height: "75vh"
    }

  }));

  

const Display = () => {

    const classes = useStyles();
    
    const [ projects, setProjects ] = useState(data)
    
    return (
        <Grid className={classes.root} style={{backgroundColor: 'blue'}} container>
            {/* <GridListTile key="Subheader"  style={{ height: 'auto' }}>
                <ListSubheader component="div">December</ListSubheader>
            </GridListTile> */}
                  <Grid style={{backgroundColor: 'green'}} className={classes.grid} container spacing={1} item xs={12} >
                    {projects.map(({img}) => (
                        <Card className={classes.card}  >
                              <CardActionArea className={classes.activeCard} >
                                  <CardMedia 
                                          component="img"
                                          alt="Contemplative Reptile"
                                          height="250"
                                          image={img}
                                          title="Contemplative Reptile"
                                  />
                              </CardActionArea>
                        </Card>
                    ))}
                </Grid>
        </Grid>
    )
}

export default Display

