import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ManagePlayers from './ManagePlayers';
import {Switch} from 'react-router-dom';
import api from './api'

// import data from './data/players.json'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <div className={classes.root}>
          <CssBaseline />
          <img src={'Club-Logo.jpg'} alt={'Mater Hill Logo'} width="32"/>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                {process.env.REACT_APP_CLUB_NAME} player selections
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <Toolbar />
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button component={Link} to="/ManagePlayers">
                  <ListItemIcon><PersonIcon /></ListItemIcon>
                  <ListItemText primary="Manage Players" />
                </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
          <Toolbar />
            <Route path="/ManagePlayers" render={(props) => {
                return <ManagePlayers players={[]}/>;
            }}/>
            <Route exact path="/" render={(props) => {
                  return(
                    <div> 
                      <h1>Home</h1>
                    <Typography paragraph>
                      Welcome to the {process.env.REACT_APP_CLUB_NAME} team selector
                    </Typography>
                  </div>
                  );
              }}/>
          </main>
        </div>
      </Switch>
    </Router>
  );
}

export default App;