import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { actionConstants } from '../../../types/actionConstants';
import List from '@material-ui/core/List';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

export const TaskList = props => {

  //Sets the target element state to Done or vise versa
  const handleDoneSelection = value => () => {
    const { dispatch, toDo } = props;

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

  const  deleteItem = value => () => {
    const { dispatch } = props;
    dispatch({
      type: actionConstants.TODO_DELETE_REQUEST,
      payload: { toDo: {
        key: value,
      }
      },
    });
  };
// haloooo
  const { toDo } = props;
  return (
    <List>
      {Object.keys(toDo).map((value, index) => (
        <ListItem
          key={value}
          role={undefined}
          dense
          button
          onClick={handleDoneSelection(value)}
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
              <DeleteOutlinedIcon style={{display: toDo[value].text ? '' : 'none' }} onClick={deleteItem(value)} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = state => ({
  text: state.toDoList.text,
  toDo: state.toDoList.toDo,
});

TaskList.propTypes = {
  dispatch: PropTypes.func,
  text: PropTypes.string,
  toDo: PropTypes.object,
};

export default connect(mapStateToProps)(TaskList);
