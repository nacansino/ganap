import React, { Component } from 'react';
import Home from './Home'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 16,
  },
  palette: {
    type: "dark",
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ab47bc'
    },
  },
});

class Containers extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default Containers;
