import React,{ useState, useEffect } from 'react'
import locationsData from '../../servicedata'
import ServiceAreas from './ServiceAreas/ServiceAreas'
import AboutUs from './AboutUs/AboutUs'
import { 
    makeStyles,
    Grid, 
  } from '@material-ui/core';





  const useStyles = makeStyles((theme) => ({

    headings: {
        color:'white', 
        padding:'3em 0 2em 0'
    },
    container: {
        backgroundColor: '#222326',
        color:'white'
    },
    list: {
        padding:'1em'
    }

}))




const AboutContainer = () => {

        const [locations, setLocations] = useState([])
        const serviceHeading = 'Current Service Areas', aboutUs = 'About Us'

        // console.log(locations, 'locations')
        const classes = useStyles();



    useEffect(() => {
        const location = []
        //Converting locationsData array into a two dimentional array to then map it and render a two list column
        locationsData.forEach((city, i) => {
            if(i % 2){
                location.push([locationsData[i -1], city])
            }else if(i === locationsData.length -1 && i % 3 === 1){
                location.push([city])
            }
        })
        setLocations(location)
    }, [])



    return (
        <Grid container justify='center' className={classes.container}>
            <ServiceAreas 
                locations={locations} 
                classes={classes}
                serviceHeading={serviceHeading}
            />
            <AboutUs 
                classes={classes}
                aboutUs={aboutUs}
            />     
        </Grid>
    )
}

export default AboutContainer