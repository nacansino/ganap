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

const styles = theme => ({
  root: {
    display: 'flex',
  },
  media: {
    width: 200,
    height: 200,
    objectFit: 'cover',//cover all available space
    borderRadius: '50%',
  },
  card: {
    width: 200,
    height: 300,
  },
  content: {
    display: 'flex',
  },
  cardContent:{
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft:  theme.spacing.unit,
    paddingTop: theme.spacing.unit,
  },
});

class ArtistCard extends Component {

  render() {
    const {artist,title,img,venue} = this.props.data;
    const {classes} = this.props;
    return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={artist}
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6">
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
  }
}

ArtistCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtistCard);
