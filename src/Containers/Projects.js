import React, { Component } from 'react';
import TopMenu from '../Components/TopMenu/topMenu';
import Grid from '@material-ui/core/Grid';
import { connect, Provider } from 'react-redux';
import configureStore from '../store/store';
import { history as History } from '../utils/history';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TopMenu value={3}/>
            <p>We are in the projects tab</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const root = () => (
  <Provider store={configureStore(History)}>
    <ConnectedApp history={History} />
  </Provider>
);

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({});
const ConnectedApp = connect(mapStateToProps)(Home);

export default root;
