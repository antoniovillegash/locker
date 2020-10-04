import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoIcon from '../../assets/img/logo.svg';
import PadlockIcon from '../../assets/img/padlock-closed.svg';
import AddIcon from '../../assets/img/add-blue.svg';
import Button from '@material-ui/core/Button';
import Index from './index';
import {Redirect} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  drawer: {

    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'var(--color-theme-4)'
  },
  logoContainer: {
    width: '40%',
    height: 'auto',
    margin: '2em auto'
  },
  logo: {
    width: '100%'
  },
  content: {
    marginLeft:drawerWidth/2,
    marginRight:'auto',
    position:'absolute',
    width: '100%',
    height:'auto',
    minHeight:'100%',
    backgroundColor: 'var(--color-theme-2)'
  },
  listItemIcon: {
    width: '2em',
    heihgt: 'auto',
  },
  listItemText: {
    color: 'var(--color-theme-5)'
  },
  addLockerButtonContainer: {
    width:'100%',
    margin: 'auto auto 1em auto',
    textAlign:'center',
    textDecoration:'none'
  },
  addLockerButton: {
    backgroundColor: 'var(--color-theme-2)',
    display: 'flex',
    width: '90%',
    margin: 'auto'
  },
  addLockerButtonIcon: {
    margin: '0 .5em',
    width: '1em',
    height: 'auto',
  },
  addLockerButtonText: {
    margin: '0',
  }

}));

 const MainContainer=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >


        <div className={classes.logoContainer}>
          <img className={classes.logo} src={LogoIcon} />
        </div>

        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <img className={classes.listItemIcon} src={PadlockIcon} />
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Example" />
          </ListItem>

        </List>

        <a href="/create-locker" className={classes.addLockerButtonContainer}>
        <Button className={classes.addLockerButton} variant="contained" color="primary" disableElevation
          onClick={()=>{
            return <Redirect to="/create-locker" />
          }}
          >
            <img className={classes.addLockerButtonIcon} src={AddIcon} />
            <h5 className={classes.addLockerButtonText} >Add Locker</h5>
          </Button>
        </a>

          
        








      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Index />
      </main>
    </div>
  );
}

export default MainContainer;