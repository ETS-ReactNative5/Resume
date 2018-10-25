import React, { Component } from 'react';
import TopMenu from '../../Components/TopMenu/topMenu';
import Grid from '@material-ui/core/Grid';
import { connect, Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { Route } from 'react-router-dom';
import Todolist from './Images/todolist.jpg';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      spacing: 2,
    };
  }
  render() {
    return (
      <Grid style={{maxWidth: '99.8%', margin: 'auto'}} container spacing={24}>
        <Grid item xs={12}>
          <TopMenu/>
          <h1 align="center" style={{fontSize: '500%'}}> Projects </h1>
        </Grid>
        <Route render={({ history }) => (
          <Grid item xs={6}>
            <img onClick={() => { history.push('/Projects/ToDoList'); }} src={Todolist} alt="todolist" style={{cursor: 'pointer', width: '80%', height: '110%', padding: '3%',borderStyle: 'solid',borderWidth: '5px'}}/>
          </Grid>
        )} />
        <Route render={({ history }) => (
          <Grid item xs={6}>
            <img onClick={() => { history.push('/Projects/Drag&Drop'); }} src={Todolist} alt="todolist" style={{cursor: 'pointer', width: '80%', height: '110%', padding: '3%',borderStyle: 'solid',borderWidth: '5px'}}/>
          </Grid>
        )} />
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
