import { actionConstants } from '../../../types/actionConstants';
import { updateObject } from '../../../helpers/objectHelper';

const initialState = {
};
const changeValue = (state, action) => updateObject(state, {value: action.value});

const topMenuReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionConstants.TOP_MENU_VALUE_SUCCESS:
    return changeValue(state, action);
  default:
    return state;
  }
};

export default topMenuReducer;
