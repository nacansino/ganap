import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainSearch from "../components/MainSearch"
import SearchSample from "../components/Search_Sample1"
import Typography from '@material-ui/core/Typography'
import {withStyles } from '@material-ui/core/styles';
import BgImg from '../assets/images/bg.jpg';
import SearchResultBox from '../components/SearchResultBox'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'url(' + BgImg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
  },
  searchPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh',
    width: '66vw',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
  },
  searchResultBody: {
    width: '100vw',
    height: '50vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  sub2: {
    display: 'flex',
    justifyContent: 'center',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

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
        <div className={classes.divider} />
        <div className={classes.searchResultBody}>
          <SearchResultBox />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
