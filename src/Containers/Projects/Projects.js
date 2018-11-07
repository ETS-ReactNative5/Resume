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
      <div style={{backgroundSize: 'cover', margin: '-0.55%'}} >
        <TopMenu/>
        <Grid alignContent={'center'} container spacing={24}>
          <Grid item xs={12}>
            <h1 align="center" style={{fontSize: '500%'}}> Projects </h1>
          </Grid>
          <Route render={({ history }) => (
            <Grid style={{paddingLeft: '6%    '}} item xs={6}>
              <img onClick={() => { history.push('/Projects/ToDoList'); }} src={Todolist} alt="todolist" style={{cursor: 'pointer', width: '80%', height: '110%', padding: '3%',borderStyle: 'solid',borderWidth: '5px'}}/>
            </Grid>
          )} />
          <Route render={({ history }) => (
            <Grid item xs={6}>
              <img onClick={() => { history.push('/Projects/Drag&Drop'); }} src={Todolist} alt="todolist" style={{cursor: 'pointer', width: '80%', height: '110%', padding: '3%',borderStyle: 'solid',borderWidth: '5px'}}/>
            </Grid>
          )} />
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
const mapStateToProps = state => ({
  value: state.topMenu.value,
  topMenu: state.topMenu,
});

const ConnectedApp = connect(mapStateToProps)(Home);

export default root;
