import React from 'react'
import {Container, Typography, CssBaseline} from '@material-ui/core';


const Display = () => {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', width: '100vw', margin: '0 auto'}} />
        </Container>
      </React.Fragment>
    )
}

export default Display
