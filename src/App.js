import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu';
import './Components/TopMenu/topMenu';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid container spacing={24}>
      <TopMenu/>
        </Grid>

      </div>
    );
  }
}

export default App;
