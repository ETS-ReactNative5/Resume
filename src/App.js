import React, { Component } from 'react';
import AppRoutes from './routes/router';
import { connect, Provider } from 'react-redux';
import configureStore from './store/store';
import { history as History } from './utils/history';

class App extends Component {

  componentDidMount() {
    document.title = 'Tsvetomir Batinov';
  }

  render() {
    return (
      <div style={{ margin: '0px' }}>
        <AppRoutes />
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
const ConnectedApp = connect(mapStateToProps)(App);

export default root;
