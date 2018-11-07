import { actionConstants } from '../../../types/actionConstants';
import { updateObject, updateArray, updateStateOfTheArray, deleteObject } from '../../../helpers/objectHelper';

const initialState = {
  walking: 'newWord',
  toDo: {
  },
};

const changeText = (state, action) => updateObject(state, {text: action.text});
const changeToDoReducer = (state, action) => updateArray(state, {[action.toDo.text]: action.toDo}, action.toDo.text);
const changeToDoStateReducer = (state, action) => updateStateOfTheArray(state, {[action.toDo.key]: action.toDo}, action.toDo.key);
const deleteTodoReducer = (state, action) => deleteObject(state, {[action.toDo.key]: action.toDo}, action.toDo.key);

const walkingReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionConstants.TODO_TEXT_SUCCESS:
    return changeText(state, action);
  case actionConstants.TODO_TODO_SUCCESS:
    return changeToDoReducer(state, action);
  case actionConstants.TODO_ALTER_STATE_SUCCESS:
    return changeToDoStateReducer(state, action);
  case actionConstants.TODO_DELETE_SUCCESS:
    return deleteTodoReducer(state, action);
  default:
    console.log("todo reducer");
    return state;
  }
};

export default walkingReducer;
