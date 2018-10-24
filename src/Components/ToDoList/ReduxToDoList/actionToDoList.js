import { actionConstants } from '../../../types/actionConstants';

export const changeToDoText = action =>({
  type: actionConstants.TODO_TEXT_SUCCESS,
  text: action.text,
});
export const changeToDo = action =>({
  type: actionConstants.TODO_TODO_SUCCESS,
  toDo: action.toDo,
});

export const changeToDoState = action =>({
  type: actionConstants.TODO_ALTER_STATE_SUCCESS,
  toDo: action.toDo,
});

export const deleteToDo = action =>({
  type: actionConstants.TODO_DELETE_SUCCESS,
  toDo: action.toDo,
});
