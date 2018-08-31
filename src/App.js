import React, { Component } from 'react';
import TopMenu from './Components/TopMenu/topMenu';
import './Components/TopMenu/topMenu';
import Grid from '@material-ui/core/Grid';
import Walking from './Animations/Walking/walking';
import { connect, Provider } from 'react-redux';
import configureStore from './store/store';
import { history as History } from './utils/history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TopMenu/>
          </Grid>
        </Grid>
        <Walking/>
      </div>
    );
  }
}

const root = () => (
  <Provider store={configureStore(History)}>
    <ConnectedApp history={History} />
  </Provider>
);

const mapStateToProps = state => ({});
const ConnectedApp = connect(mapStateToProps)(App);

export default root;
