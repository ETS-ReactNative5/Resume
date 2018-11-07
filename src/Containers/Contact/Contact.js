import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import { connect, Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { withStyles } from '@material-ui/core/styles';
import Pictureofme from '../Home/Image/pictureofme.jpg';

const styles = theme => ({
  pictureOfMe: {
    width: '28%',
    height: '356px',
    paddingTop: '11%',
    paddingLeft: '13%',
  },
  block: {
    float: 'right',
    width: '21%',
    paddingTop: '10%',
    paddingRight: '19%',
  }
});

class Contact extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{backgroundSize: 'cover', margin: '-0.55%'}}>
        <TopMenu/>
        <div>

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

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};


// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({
  value: state.topMenu.value,
  topMenu: state.topMenu,
});

const ConnectedApp = connect(mapStateToProps)(withStyles(styles)(Contact));

export default root;
