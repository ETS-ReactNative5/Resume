import { actionConstants } from '../../../types/actionConstants';
import { updateObject, updateArray } from '../../../helpers/objectHelper';

const initialState = {
  walking: null,
  toDo: ['some String'],
};

const changeText = (state, action) => updateObject(state, {text: action.text});
const changeToDoReducer = (state, action) => updateArray(state.toDo, action.toDo);

const walkingReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionConstants.TODO_TEXT_SUCCESS:
    return changeText(state, action);
    case actionConstants.TODO_TODO_SUCCESS:
      return changeToDoReducer(state, action);
  default:
    return state;
  }
};

export default walkingReducer;
