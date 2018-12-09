import React, { Component } from 'react';
import {withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

//for card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//for grid
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {tileData} from './tileData'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  card: {
    maxWidth: 345,
  },
});

//This SearchResultBox can hold different types of cards
//based on the search result
class SearchResultBox extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

SearchResultBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultBox);
