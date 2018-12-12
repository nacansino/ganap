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
    maxWidth: '100%',
    height: 175,
    objectFit: 'cover',//cover all available space
  },
  card: {
    width: 400,
    height: 300,
  },
  content: {
    display: 'flex',
  },
  cardContent:{
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  date: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
  }
});

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class EventCard extends Component {

  render() {
    const {title,img,date} = this.props.data;
    const {classes} = this.props;
    return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          className={classes.media}
          image={img}
          title={title}
        />
        <div className={classes.content}>
          <div className={classes.date}>
            <Typography component="p">{date.toLocaleString('en-US', {month: 'short'}).toUpperCase()}</Typography>
            <Typography component="p">{date.toLocaleString('en-US', {day: '2-digit'})}</Typography>
          </div>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {new Intl.DateTimeFormat('en-US', options).format(date)}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
  }
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);
