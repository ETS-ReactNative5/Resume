import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import { connect, Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import Image from './Image/image.jpg';
import phoneImage from './Image/phone.jpg';
import {withStyles} from '@material-ui/core/styles/index';
import { GreetingsAnimation, NameAnimation, PositionAnimation, TextAnimation } from './textAnimations/GreetingsAnimation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  background: {
    backgroundImage: `url(${Image})`, backgroundSize: 'cover', margin: '-0.55%', minHeight: '100%',

  },
  backgroundSmall: {
    backgroundImage: `url(${phoneImage})`,
    margin: '-2.55%',
    height: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  phoneClick = () => {
    window.location.replace('https://github.com/Sclipper/Resume');
  };

  render() {
    const { classes } = this.props;
    const { width } = this.state;
    return (
      <div  className = {width > 1000? classes.background : classes.backgroundSmall}>
        <TopMenu value={0}/>
        <div onClick={width <1000? this.phoneClick : false}>
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
  classes: PropTypes.object.isRequired,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
};

const mapStateToProps = () => ({});
const ConnectedApp = connect(mapStateToProps)(withStyles(styles)(Home));

export default root;
