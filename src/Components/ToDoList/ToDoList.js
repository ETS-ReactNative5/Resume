import React from 'react';
import PropTypes from 'prop-types';
import topMenuJSON from '../../JSONfiles/topMenuJSON';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';
import TopMenu from '../TopMenu/topMenu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import connect from 'react-redux/es/connect/connect';
import { actionConstants } from '../../types/actionConstants';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

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
    width: 200,
  },
  button: {
    align: 'center',
    margin: theme.spacing.unit,
  },
});

class toDoList extends React.Component {
  constructor(props){
    super(props);
    this.data = topMenuJSON;
    this.state = {
      text: '',
      checked: [0],
      toDo: ['play Games', 'Do Stuff'],
    };
  }

  componentDidMount(){

  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
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
      payload: { toDo: ['text'] },
    });
    console.log(this.state.text);
    this.setState (prevState => ({
      toDo: [...prevState.toDo, this.state.text],
      text: '',
    }));
  };

  handleKeyPress=(e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <TopMenu/>
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
          Primary
        </Button>
        <List>
          {this.state.toDo.map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={this.handleToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`${value}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <CommentIcon />
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
});

toDoList.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  text: PropTypes.string,
};

export default connect(mapStateToProps)(withStyles(styles)(toDoList));
