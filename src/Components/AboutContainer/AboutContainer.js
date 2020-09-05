import React,{ useState, useEffect } from 'react'
import locationsData from '../../servicedata'
import ServiceAreas from './ServiceAreas/ServiceAreas'
import AboutUs from './AboutUs/AboutUs'
import { 
    makeStyles,
    Grid, 
  } from '@material-ui/core';
  import { MDBAnimation } from "mdbreact";
  import { withRouter } from 'react-router-dom'




  const useStyles = makeStyles((theme) => ({

    headings: {
        color:'white', 
        padding:'3em 0 2em 0'
    },
    container: {
        backgroundColor: '#222326',
        color:'white',
        display: 'flex',
        justifyContent: 'center'
    },
    innerContainer: {
        maxWidth: '77.500em',
    },
    list: {
        padding:'1em'
    }

}))




const AboutContainer = (props) => {
// console.log('props', props)
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
        <>
            <MDBAnimation reveal type='fadeInUp' className={classes.container}>
                    <Grid container justify='center' className={classes.innerContainer}>
                        <ServiceAreas 
                            locations={locations} 
                            classes={classes}
                            serviceHeading={serviceHeading}
                        />
                    {
                        props.location.pathname === '/'
                            ?
                            <AboutUs 
                                classes={classes}
                                aboutUs={aboutUs}
                            /> 
                            :
                            null  
                    }
                    </Grid>
            </MDBAnimation>
        </>
    )
}

export default withRouter(AboutContainer)