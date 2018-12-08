import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100vh',
    width: '100%'
  },
  sub1: {
    display: 'flex',
    justifyContent: 'center'
  }
};

class Home extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.sub1}>
          hello
        </div>
        {/*flextimer container below*/}
        <div className={classes.sub1}>
          hello
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
