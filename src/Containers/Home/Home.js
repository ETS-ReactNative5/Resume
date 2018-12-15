import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/TopMenu';
import { connect, Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import Image from './Image/image.jpg';
import {withStyles} from '@material-ui/core/styles/index';
import { GreetingsAnimation, NameAnimation, PositionAnimation, TextAnimation } from './textAnimations/GreetingsAnimation';

const styles = () => ({
  background: {
    backgroundImage: `url(${Image})`,   width: '100%',
    height: 'auto',

  },
});

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div  className = {classes.background}>
        <TopMenu value={0}/>
        <div>
          <NameAnimation/>
          <PositionAnimation/>
          <GreetingsAnimation/>
          <TextAnimation/>
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
  classes: PropTypes.object,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
};

const mapStateToProps = () => ({});
const ConnectedApp = connect(mapStateToProps)(withStyles(styles)(Home));

export default root;
