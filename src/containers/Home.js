import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainSearch from "../components/MainSearch"
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
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,1)',
    background: 'linear-gradient(to top,rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%),url(' + BgImg + ') no-repeat center center fixed',
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
    borderRadius: '10px',
    //borderColor: '#FFFFFF',
    //borderStyle: 'solid',
    flexShrink: 0,
  },
  searchResultBody: {
    width: '90vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing.unit*2,
  },
  mainSearch: {
    display: 'flex',
    flex: "1 0 auto",
  },
  sub2: {
    display: 'flex',
    flex: "1 0 auto",
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
          <MainSearch className={classes.mainSearch}/>
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

export default withStyles(styles,{withTheme: true})(Home);
