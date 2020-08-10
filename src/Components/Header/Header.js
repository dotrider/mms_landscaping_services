import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { 
  makeStyles,
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  ListItemText, 
  ListItemIcon, 
  ListItem, 
  List, 
  Drawer
} from '@material-ui/core';
import './Header.css';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1,
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '175px'
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  
  baseMenu: {
    marginLeft: 'auto',
  },

  list: {
    width: 250,
  },

  fullList: {
    width: 'auto',
  },
  
  //  drawerPaper: {
  //       marginTop: theme.mixins.toolbar.minHeight,
  //       zIndex: theme.zIndex.appBar
  //     }
}));




const Header = () => {

    const classes = useStyles();
 
    const [ mobileMenu, setMobileMenu ] = useState(false);



    
  //handles mobile menu showing and closing if option is selected or if click outside drawer
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setMobileMenu({ ...mobileMenu, [anchor]: open });
    };


    ///handles styles ex. Drawer width and renders mobile menu text/icons
    const list = (anchor) => (
      <div
        className={clsx(classes.list
        //   , {
        //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        // }
        )}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['About', 'Services'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
     </div>
    );

    return (
        <header className={classes.root} >
          <AppBar color='primary'
                  position="static"
                  // style={{boxShadow: 'none'}}
                   
          >
              <Toolbar>
                    <IconButton style={{padding:'0', borderRadius: '25%'}}>
                      <Link to='/' className='links'>
                        <Typography variant="h6">
                          MMS Landscaping
                        </Typography>
                      </Link>
                    </IconButton>
                    <nav className={classes.baseMenu}>
                        <div className={classes.sectionMobile}>
                            <IconButton edge="end"
                              className={classes.menuButton}
                              color="inherit" aria-label="menu"
                              onClick={toggleDrawer('right', true)}
                              >
                                <MenuIcon  />
                            </IconButton>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <Typography variant="h6" className={classes.title} >
                                About
                            </Typography>
                            <Typography variant="h6" className={classes.title} >
                            Services
                            </Typography>
                        </div>
                    </nav>
              </Toolbar>
          </AppBar>
          <Drawer 
              varient='persistent'
              anchor={'right'} open={mobileMenu['right']} 
              onClose={toggleDrawer('right', false)}
              classes={{
                paper: classes.drawerPaper
              }}
          >
                {list('right')}
          </Drawer>
  
      </header>
    )
}

export default Header


