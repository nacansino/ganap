import React, { Component } from 'react';
import {withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {tileData} from './tileData'
import EventCard from './EventCard';
import ArtistCard from './ArtistCard';

import Typography from '@material-ui/core/Typography';

//for gridList
import GridList from '@material-ui/core/GridList';

//for grid
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //borderColor: '#FFFFFF',
    //borderStyle: 'solid',
  },
  gridRoot: {
    direction: 'row',
    justifyContent: 'flex-start',
    padding: theme.spacing.unit*2,
    flexShrink: 0,
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
  state = {
      spacing: '16',
    };

    handleChange = key => (event, value) => {
     this.setState({
       [key]: value,
     });
   };

  render() {
    const {classes} = this.props;
    const { spacing } = this.state;
    return (
      <div className={classes.root}>
        <Typography gutterBottom variant="h6" component="h2">
          Artists related to %keyword%
        </Typography>
        <Grid container className={classes.gridRoot} spacing={24}>
          {tileData.map(tile => (
            <Grid item lg="auto">
              <ArtistCard data={tile} />
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

export default withStyles(styles)(SearchResultBox);
