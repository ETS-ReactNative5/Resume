import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/TopMenu';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { Route } from 'react-router-dom';
import Todolist from './Images/todolist.jpg';
import DragNDrop from './Images/dragNdrop.png';
import Chaos from './Images/chaos.png';
import {withStyles} from '@material-ui/core/styles/index';

const styles = () => ({
  imageLeft: {
    '@media screen and (min-width: 601px)': {
      cursor: 'pointer',
      margin: '0 auto',
      marginLeft: '10px',
      width: '45%',
      border: 'solid 5px black',
      display: 'inline-block',
      height: '17vw',
      backgroundColor: 'orange'
    },
    '@media screen and (max-width: 600px)': {
      border: 'solid 5px black',
      width: '95%',
      height: '37vw',
      marginLeft: '3px',
    },
  },

  imageRight: {
    '@media screen and (min-width: 601px)': {
      cursor: 'pointer',
      margin: '0 auto',
      marginRight: '10px',
      width: '45%',
      border: 'solid 5px black',
      display: 'inline-block',
      height: '17vw',
      float: 'right',
    },
    '@media screen and (max-width: 600px)': {
      border: 'solid 5px black',
      width: '95%',
      height: '37vw',
      marginLeft: '3px',
    },
  },
  chaos: {
    '@media screen and (min-width: 601px)': {
      cursor: 'pointer',
      margin: '0 auto',
      marginLeft: '10px',
      width: '45%',
      border: 'solid 5px black',
      display: 'inline-block',
      height: '17vw',
      marginTop: '10px',
      marginBottom: '30px',
    },
    '@media screen and (max-width: 600px)': {
      border: 'solid 5px #D3D3D3',
      width: '95%',
      height: '37vw',
      marginLeft: '3px',
    },
  }
});

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth,
      spacing: 2,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <TopMenu value={2}/>
        <h1 align="center" style={{fontSize: '500%'}}> Projects </h1>
        <div>
          <Route render={({ history }) => (
            <img onClick={() => { history.push('/Projects/ToDoList'); }} src={Todolist} alt="todolist" className={classes.imageLeft}/>
          )} />
          <Route render={({ history }) => (
            <img onClick={() => { history.push('/Projects/Drag&Drop'); }} src={DragNDrop} alt="todolist" className={classes.imageRight}/>
          )} />
          <Route render={({ history }) => (
            <img onClick={() => { history.push('/Projects/Chaos'); }} src={Chaos} alt="todolist" className={classes.chaos}/>
          )} />
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};


const root = () => (
  <Provider store={configureStore(History)}>
    <ConnectedApp history={History} />
  </Provider>
);

const ConnectedApp = (withStyles(styles)(Projects));

export default root;
