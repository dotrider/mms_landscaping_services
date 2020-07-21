import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
}));




const Header = () => {

    const classes = useStyles();


    return (
        <div className={classes.root} >
          <AppBar position="static">
              <Toolbar >
                <Typography variant="h6"  >
                  MMS Landscaping
                </Typography>
                    <div className={classes.baseMenu}>
                    <div className={classes.sectionMobile}>
                    <IconButton edge="end"
                    className={classes.menuButton}
                    color="inherit" aria-label="menu"
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
                    </div>
              </Toolbar>
          </AppBar>
      </div>
    )
}

export default Header


