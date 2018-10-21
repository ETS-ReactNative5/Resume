import { actionConstants } from '../../../types/actionConstants';

export const changeToDoText = action =>({
  type: actionConstants.TODO_TEXT_SUCCESS,
  text: action.text,
});
export const changeToDo = action =>({
  type: actionConstants.TODO_TODO_SUCCESS,
  toDo: action.toDo[0],
});

