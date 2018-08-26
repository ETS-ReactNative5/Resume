import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/topMenu';
import './Components/TopMenu/topMenu';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid container spacing={24}>
          <Grid item xs={12}>
      <TopMenu/>
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default App;
