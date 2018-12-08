import React, { Component } from 'react';
import MainSearch from "../components/MainSearch"
import SearchSample from "../components/Search_Sample1"
import Typography from '@material-ui/core/Typography'
import {withStyles } from '@material-ui/core/styles';
import BgImg from '../assets/images/bg.jpg';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: "url(" + BgImg + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  searchPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh',
    width: '66vw',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sub2: {
    display: 'flex',
    justifyContent: 'center',
  },
};

class Home extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.searchPanel}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            Ganap.
          </Typography>
          <Typography component="h1" variant="subtitle1" align="center" color="textSecondary" gutterBottom>
            Your local nightlife provider.
          </Typography>
          <MainSearch />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
