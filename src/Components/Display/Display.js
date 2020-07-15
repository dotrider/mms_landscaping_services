import React, { useState } from 'react'
import {Container, Typography, CssBaseline} from '@material-ui/core';
import data from '../../data'
import Project from '../Project/Project';

const Display = () => {

    const [ projects, setProjects ] = useState(data)
    
    console.log('display', projects)
    const mappedProjects = projects.map(project => <Project project={project}/>)
    return (
        <React.Fragment>
        <Container maxWidth="sm">
         {mappedProjects}
        </Container>
      </React.Fragment>
    )
}

export default Display
