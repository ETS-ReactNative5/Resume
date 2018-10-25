import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import Grid from '@material-ui/core/Grid';
import { connect, Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { withStyles } from '@material-ui/core/styles';
import Image from './Image/homeImage.jpg';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Grid style={{backgroundImage: `url(${Image})`, width: '101.3%'}} container spacing={24}>
        <Grid item xs={12}>
          <TopMenu/>
          <p>Home page</p>
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

        </Grid>
      </Grid>
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
