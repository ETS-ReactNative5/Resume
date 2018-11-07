import React from 'react';
import PropTypes from 'prop-types';
import topMenuJSON from '../../JSONfiles/topMenuJSON';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TopMenu from '../TopMenu/topMenu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import connect from 'react-redux/es/connect/connect';
import { actionConstants } from '../../types/actionConstants';
import List from '@material-ui/core/List';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

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

class toDoList extends React.Component {
  constructor(props){
    super(props);
    this.data = topMenuJSON;
    this.state = {
      text: '',
      checked: '',
      do: ['play Games', 'Do Stuff'],
    };
  }

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

  deleteItem = (value, index)=> () => {
    console.log(value,index);
    const { dispatch } = this.props;
    dispatch({
      type: actionConstants.TODO_DELETE_REQUEST,
      payload: { toDo: {
        key: value,
      }
      },
    });
  }

  handleToggle = value => () => {
    const { dispatch, toDo } = this.props;

    if(toDo[value].state === 'active'){
      dispatch({
        type: actionConstants.TODO_ALTER_STATE_REQUEST,
        payload: { toDo: {
          key: value,
          state: 'unactive',
        }
        },
      });
    }
    else{
      dispatch({
        type: actionConstants.TODO_ALTER_STATE_REQUEST,
        payload: { toDo: {
          key: value,
          state: 'active',
        }
        },
      });
    }
  };

  handleChange = text => event => {
    this.setState({
      [text]: event.target.value,
    });
  };

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
    const { classes, toDo } = this.props;
    return (
      <div onKeyPress={this.handleKeyPress}>
        <TopMenu value={2}/>
        <h1 align="center" className={classes.headline}>ToDo List</h1>
        <TextField
          id="standard-name"
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
        <List>
          {Object.keys(toDo).map((value, index) => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
              style={{display: toDo[value].text ? '' : 'none' }}
            >
              <Checkbox
                checked={toDo[value].state !== 'active'}
                tabIndex={index}
                disableRipple
              />
              <ListItemText primary={`${value}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <DeleteOutlinedIcon style={{display: toDo[value].text ? '' : 'none' }} onClick={this.deleteItem(value)} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.toDoList.text,
  toDo: state.toDoList.toDo,
});

toDoList.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  text: PropTypes.string,
  toDo: PropTypes.object,
};

export default connect(mapStateToProps)(withStyles(styles)(toDoList));
