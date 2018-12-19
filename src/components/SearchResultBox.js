import React, { Component } from 'react';
import {withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {tileData} from './tileData'
import EventCard from './EventCard';
import ArtistCard from './ArtistCard';

import Typography from '@material-ui/core/Typography';

//for grid
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing.unit*2,
    //borderColor: '#FFFFFF',
    //borderStyle: 'solid',
  },
  gridRoot: {
    display: 'flex',
    padding: theme.spacing.unit*2,
    flexShrink: 0,
    outline: '1px solid red',
  },
  gridItem:{
    display: 'flex',
    outline: '1px solid red',
    justifyContent: 'center',
    paddingBottom: theme.spacing.unit*2,
  },
  title: {
    color: theme.palette.textPrimary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

//This SearchResultBox can hold different types of cards
//based on the search result
class SearchResultBox extends Component {
    handleChange = key => (event, value) => {
     this.setState({
       [key]: value,
     });
   };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Typography gutterBottom variant="h6" component="h2">
          Artists related to %keyword%
        </Typography>
        <Grid container className={classes.gridRoot}>
          {tileData.map((tile,index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
              <ArtistCard data={tile}/>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.gridRoot}>
          {tileData.map((tile,index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <EventCard data={tile} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

SearchResultBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles,{withTheme: true})(SearchResultBox);
