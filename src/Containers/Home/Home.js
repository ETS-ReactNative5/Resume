import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import { connect, Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import Image from './Image/homeImage.jpg';
import {withStyles} from '@material-ui/core/styles/index';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background} style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', margin: '-0.55%', minHeight: '100%'}}>
        <TopMenu/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

const root = () => (
  <Provider store={configureStore(History)}>
    <ConnectedApp history={History} />
  </Provider>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
};

const mapStateToProps = () => ({});
const ConnectedApp = connect(mapStateToProps)(withStyles(styles)(Home));

export default root;
