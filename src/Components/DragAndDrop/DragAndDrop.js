import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TopMenu from '../TopMenu/topMenu';
import List from './List';
import {withStyles} from '@material-ui/core/styles/index';
import connect from 'react-redux/es/connect/connect';

const styles = () => ({
  header: {
    fontSize: '500%',
  },
  grid: {
    margin:'auto',
    display:'inline',
  },
});

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TopMenu/>
          <h1 align="center" className={classes.header}>Drag And Drop</h1>
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <List/>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  value: state.topMenu.value,
});


DragAndDrop.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  text: PropTypes.string,
  toDo: PropTypes.object,
};

export default connect(mapStateToProps)(withStyles(styles)(DragAndDrop));
