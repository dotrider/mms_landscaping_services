import React, { useState } from 'react'
import { Link } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { 
  makeStyles,
  Typography, 
  IconButton, 
  ListItemText, 
  ListItemIcon, 
  ListItem, 
  List, 
  Drawer
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
  
    title: {
      flexGrow: 1,
      textTransform: 'uppercase',
      color: '#FFF',
      cursor: 'pointer'
    },
  
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '20em'
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

  



const Nav = () => {


    const classes = useStyles();
 
    const [ mobileMenu, setMobileMenu ] = useState(false);
    const menu = [
        { name: 'Services', label: 'services' },
        { name: 'Contact Us', label: 'contact-container' },
        { name: 'About', label: 'aboutUs' }
      ]



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
        {menu.map(({name, label}, i) => (
            <Link key={i}
              activeClass="active"
              to={label}
              spy={true}
              smooth={true}
            //   offset={-70}
              duration= {800}
            >
              <ListItem button>
                  <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={name} />
              </ListItem>
             </Link>
        ))}
      </List>
   </div>
  );


    return (
        <>
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
                          {
                            menu.map(({name, label}, i) => 
                            <Link
                              key={i}
                              activeClass="active"
                              to={label}
                              spy={true}
                              smooth={true}
                            //   offset={-70}
                              duration= {800}
                            >
                              <Typography variant="h3"  className={classes.title} >
                                        {name}
                              </Typography>
                            </Link>
                            )}
                        </div>
                    </nav>
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
        </>
    )
}

export default Nav
