import React, { Component } from 'react';
import Home from './Home'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import '../assets/fonts.css'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    // In Japanese the characters are usually larger.
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
  palette: {
    type: "dark",
    primary: {
      main: '#212121'
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
