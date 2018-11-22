import React from 'react';
import PropTypes from 'prop-types';
import topMenuJSON from '../../JSONfiles/topMenuJSON';
import { withStyles } from '@material-ui/core/styles';
import TopMenu from '../TopMenu/TopMenu';
import TaskList from './ToDoComponents/taskList';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import connect from 'react-redux/es/connect/connect';
import { actionConstants } from '../../types/actionConstants';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  headline: {
    fontSize: '500%',
  },
  textField: {
    align: 'center',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '77%',
  },
  button: {
    align: 'center',
    margin: theme.spacing.unit,
    width: '20%',
  },
  doNotDisplay: {
    display: 'none',
  }
});

export class ToDoList extends React.Component {
  constructor(props){
    super(props);
    this.data = topMenuJSON;
    this.state = {
      text: '',
    };
  }

  // Adds the initial values of the list
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: actionConstants.TODO_TODO_REQUEST,
      payload: { toDo: {
        text: 'Press F12 and check the Redux state!',
        state: 'active',
      }
      },
    });
  }

  // Handles the changes in the input of the user
  handleChange = text => event => {
    this.setState({
      [text]: event.target.value,
    });
  };

  // Adds the new task to the "To_do" List
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: actionConstants.TODO_TODO_REQUEST,
      payload: { toDo: {
        text: this.state.text,
        state: 'active',
      }
      },
    });
    this.setState({
      text: '',
    });
  };

  handleKeyPress=(e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div onKeyPress={this.handleKeyPress}>
        <TopMenu value={2}/>
        <h1 align="center" className={classes.headline}>ToDo List</h1>
        <TextField
          label="What do we do?"
          className={classes.textField}
          value={this.state.text}
          onChange={this.handleChange('text')}
          onKeyPress={this.handleKeyPress}
          margin="normal"
        />
        <Button onClick={this.handleClick} variant="contained" color="primary" className={classes.button}>
          Add
        </Button>
        <TaskList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.toDoList.text,
  toDo: state.toDoList.toDo,
});

ToDoList.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  text: PropTypes.string,
  toDo: PropTypes.object,
};

export default connect(mapStateToProps)(withStyles(styles)(ToDoList));
