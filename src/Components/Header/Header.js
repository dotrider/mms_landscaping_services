import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
} from '@material-ui/core';
import './Header.css';






const Header = (props) => {
    console.log(props)
    const companyName = 'MMS Landscaping'


    return (
        <header id='header'>
          <AppBar color='primary'
                  position="static"                 
          >
              <Toolbar>
                    <IconButton style={{padding:'0', borderRadius: '25%'}}>
                      <Link to='/' className='links'>
                        <Typography variant="h1">
                          {companyName}
                        </Typography>
                      </Link>
                    </IconButton>
                {
                  props.location.pathname === '/' ?
                      <Nav/>
                      : 
                      null
                }
              </Toolbar>
          </AppBar>
      </header>
    )
}

export default withRouter(Header)


