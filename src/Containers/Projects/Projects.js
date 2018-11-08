import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../Components/TopMenu/topMenu';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import { history as History } from '../../utils/history';
import { Route } from 'react-router-dom';
import Todolist from './Images/todolist.jpg';
import {withStyles} from '@material-ui/core/styles/index';

const styles = theme => ({
  background: {
    backgroundSize: 'cover',
    margin: '-0.55%',
    minHeight: '100%',
  },
  backgroundSmall: {
    margin: '-2.55%',
    height: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  imageLeft: {
    cursor: 'pointer',
    width: '40%',
    height: '152px',
    padding: '3%',
    borderStyle: 'solid',
    borderWidth: '5px',
    float: 'left',
  },
  imageSmall: {
    width: '82%',
    padding: '3%',
    borderStyle: 'solid',
    borderWidth: '5px',
  },
  imageRight: {
    cursor: 'pointer',
    width: '40%',
    height: '152px',
    padding: '3%',
    borderStyle: 'solid',
    borderWidth: '5px',
    float: 'right',
    paddingRight: '32px',
  },

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
    const { width } = this.state;
    return (
      <div className = {width > 1000? classes.background : classes.backgroundSmall} >
        <TopMenu value={2}/>
        <h1 align="center" style={{fontSize: '500%'}}> Projects </h1>
        <div>
          <Route render={({ history }) => (
            <div style={{paddingLeft: '31px'}}>
              <img onClick={() => { history.push('/Projects/ToDoList'); }} src={Todolist} alt="todolist" className={width > 1000? classes.imageLeft : classes.imageSmall}/>
            </div>
          )} />
          <Route render={({ history }) => (
            <div style={width > 1000? {paddingRight: '32px'} : {paddingLeft: '31px'}}>
              <img onClick={() => { history.push('/Projects/Drag&Drop'); }} src={Todolist} alt="todolist" className={width > 1000? classes.imageRight : classes.imageSmall}/>
            </div>
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
