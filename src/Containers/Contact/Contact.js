import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class Contact extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{backgroundSize: 'cover', margin: '-0.55%'}}>
        <TopMenu value={3}/>
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

const ConnectedApp = (withStyles(styles)(Contact));

export default root;
